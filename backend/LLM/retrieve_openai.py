import os

from .constants import (
    CHROMA_SETTINGS,
    PERSIST_DIRECTORY,
    EMBEDDINGS_NAME,
    OPENAI_LLM_NAME,
    N_DOCUMENTS_SEARCH,
    DOCUMENTS,
)

from .llm_utils import (
    process_llm_response,
    load_embeddings,
    assign_db,
    load_retriever,
    load_llm,
    create_qa_chain,
)

# "What is IRRBB (interest rate risk) and why is it important? What types of activities result in this type of risk? Please provide answers in Australian context if possible"


def get_retrieval_chain():
    embeddings = load_embeddings(embeddings_name=EMBEDDINGS_NAME)
    db = assign_db(
        persist_directory=PERSIST_DIRECTORY,
        embeddings=embeddings,
        chroma_settings=CHROMA_SETTINGS,
    )
    retriever = load_retriever(db=db, n_documents_search=N_DOCUMENTS_SEARCH)
    llm = load_llm(model_name=OPENAI_LLM_NAME)
    qa_chain = create_qa_chain(llm=llm, retriever=retriever)

    return qa_chain


def get_response(qa_chain, query):
    llm_response = qa_chain(query)
    response_text = llm_response["result"]
    sources_set = {
        DOCUMENTS.get(os.path.basename(i.metadata["source"]))
        for i in llm_response["source_documents"]
    }
    sources = list(sources_set)
    # process_llm_response(llm_response)
    return response_text, sources
