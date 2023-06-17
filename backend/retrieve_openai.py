import os
import logging
import textwrap


from langchain.vectorstores import Chroma
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.embeddings import HuggingFaceInstructEmbeddings
from InstructorEmbedding import INSTRUCTOR

from constants import (
    CHROMA_SETTINGS,
    PERSIST_DIRECTORY,
    EMBEDDINGS_NAME,
    OPENAI_LLM_NAME,
    N_DOCUMENTS_SEARCH,
)

from openai_key import OPENAIKEY

os.environ["OPENAI_API_KEY"] = OPENAIKEY


def wrap_text_preserve_newlines(text, width=110):
    # Split the input text into lines based on newline characters
    lines = text.split("\n")

    # Wrap each line individually
    wrapped_lines = [textwrap.fill(line, width=width) for line in lines]

    # Join the wrapped lines back together using newline characters
    wrapped_text = "\n".join(wrapped_lines)

    return wrapped_text


def process_llm_response(llm_response):
    print(wrap_text_preserve_newlines(llm_response["result"]))
    print("\n\nSources:")
    for source in llm_response["source_documents"]:
        print(source.metadata["source"])


def load_embeddings(embeddings_name):
    logging.info(f"Loading embeddings: {embeddings_name}...")
    embeddings = HuggingFaceInstructEmbeddings(
        model_name=embeddings_name,
        model_kwargs={"device": "mps"},
    )
    return embeddings


def assign_db(persist_directory, embeddings, chroma_settings):
    logging.info(f"Assigning db: {persist_directory}...")
    db = Chroma(
        persist_directory=persist_directory,
        embedding_function=embeddings,
        client_settings=chroma_settings,
    )
    return db


def load_retriever(db, search_documents):
    logging.info(f"Loading retriever...")
    retriever = db.as_retriever(search_kwargs={"k": search_documents})
    return retriever


def load_llm(model_name):
    logging.info(f"Loading llm: {model_name}...")
    llm = ChatOpenAI(temperature=0.3, model_name=model_name)
    return llm


def create_qa_chain(llm, retriever):
    logging.info(f"Creating qa chain...")
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm, chain_type="stuff", retriever=retriever, return_source_documents=True
    )
    return qa_chain


def main():
    embeddings = load_embeddings(embeddings_name=EMBEDDINGS_NAME)
    db = assign_db(
        persist_directory=PERSIST_DIRECTORY,
        embeddings=embeddings,
        chroma_settings=CHROMA_SETTINGS,
    )
    retriever = load_retriever(db=db, search_documents=N_DOCUMENTS_SEARCH)
    llm = load_llm(model_name=OPENAI_LLM_NAME)
    qa_chain = create_qa_chain(llm=llm, retriever=retriever)

    query = "What is IRRBB (interest rate risk) and why is it important? What types of activities result in this type of risk? Please provide answers in Australian context if possible"
    llm_response = qa_chain(query)
    process_llm_response(llm_response)


if __name__ == "__main__":
    logging.basicConfig(
        format="%(asctime)s - %(levelname)s - %(filename)s:%(lineno)s - %(message)s",
        level=logging.INFO,
    )
    main()
