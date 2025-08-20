from langchain.prompts import ChatPromptTemplate
from langchain_community.llms import Ollama
from langchain_chroma import Chroma
from langchain_community.embeddings import OllamaEmbeddings
from langchain.schema.runnable import RunnablePassthrough
from langchain.schema.output_parser import StrOutputParser

# --- Configuration ---
CHROMA_PATH = "chroma"
EMBEDDING_MODEL = "nomic-embed-text"
LLM_MODEL = "llama3:8b"

# --- Prompt Template ---
PROMPT_TEMPLATE = """
Answer the question based only on the following context:

{context}

---

Answer the question based on the above context: {question}
"""

def main():
    """
    Main function to run the chatbot.
    """
    print("Starting the Constitutional Law Chatbot...")

    # --- Initialize Components ---
    try:
        embeddings = OllamaEmbeddings(model=EMBEDDING_MODEL)
        db = Chroma(persist_directory=CHROMA_PATH, embedding_function=embeddings)
        retriever = db.as_retriever()
    except Exception as e:
        print(f"Error loading vector database from '{CHROMA_PATH}'.")
        print("Please make sure you have run 'ingest.py' first to create the database.")
        print(f"Details: {e}")
        return

    prompt = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
    llm = Ollama(model=LLM_MODEL)

    # --- Build the RAG Chain ---
    rag_chain = (
        {"context": retriever, "question": RunnablePassthrough()}
        | prompt
        | llm
        | StrOutputParser()
    )

    print("\nChatbot is ready. Type 'exit' to quit.")

    # --- Interactive Chat Loop ---
    while True:
        query = input("> ")
        if query.lower() == 'exit':
            break
        if query.strip() == "":
            continue

        answer = rag_chain.invoke(query)
        print("\n" + answer + "\n")

if __name__ == "__main__":
    main()