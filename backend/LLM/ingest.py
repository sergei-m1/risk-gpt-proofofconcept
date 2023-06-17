import os
from typing import List
import logging

from langchain.docstore.document import Document
from langchain.vectorstores import Chroma
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import HuggingFaceInstructEmbeddings

from constants import (
    CHROMA_SETTINGS,
    DOCUMENT_MAP,
    INGEST_THREADS,
    PERSIST_DIRECTORY,
    SOURCE_DIRECTORY,
    EMBEDDINGS_NAME,
)


def load_single_document(file_path: str) -> Document:
    # Loads single document from a file path
    file_extension = os.path.splitext(file_path)[1]
    loader_class = DOCUMENT_MAP.get(file_extension)
    if loader_class:
        loader = loader_class(file_path)
    else:
        raise ValueError(f"Document type is undefined")
    return loader.load()[0]


def load_documents(source_dir: str) -> List[Document]:
    # Loads all documents from the source documents directory
    all_files = os.listdir(source_dir)
    paths = []
    for file_path in all_files:
        file_extension = os.path.splitext(file_path)[1]
        source_file_path = os.path.join(source_dir, file_path)
        if file_extension in DOCUMENT_MAP.keys():
            paths.append(source_file_path)

    docs = []

    for file_path in paths:
        logging.info(f"Loading document from {file_path} \n")
        content = load_single_document(file_path)
        docs.append(content)

    return docs


def main():
    logging.info(f"Loading documents from {SOURCE_DIRECTORY}")
    documents = load_documents(SOURCE_DIRECTORY)
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=3000, chunk_overlap=500)
    texts = text_splitter.split_documents(documents)
    logging.info(f"Loaded {len(documents)} documents from {SOURCE_DIRECTORY}")
    logging.info(f"Split into {len(texts)} chunks of text\n")

    logging.info(f"Started embedding generation")
    # Create embeddings
    embeddings = HuggingFaceInstructEmbeddings(
        model_name=EMBEDDINGS_NAME,
        model_kwargs={"device": "mps"},
    )
    logging.info(f"Finished embedding generation\n")

    logging.info(f"Persist documents to the vectorstore")
    db = Chroma.from_documents(
        texts,
        embeddings,
        persist_directory=PERSIST_DIRECTORY,
        client_settings=CHROMA_SETTINGS,
    )
    db.persist()
    db = None


if __name__ == "__main__":
    logging.basicConfig(
        format="%(asctime)s - %(levelname)s - %(filename)s:%(lineno)s - %(message)s",
        level=logging.INFO,
    )
    main()
