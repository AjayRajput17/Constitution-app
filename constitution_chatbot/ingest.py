import os
import shutil
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
from langchain_community.embeddings import OllamaEmbeddings

# --- Configuration ---
DATA_PATH = "data"
CHROMA_PATH = "chroma"
EMBEDDING_MODEL = "nomic-embed-text"
CHUNK_SIZE = 1000
CHUNK_OVERLAP = 200

def main():
    """
    Main function to generate and save the vector database.
    """
    print("Starting data ingestion process...")
    generate_data_store()
    print("Data ingestion process completed successfully.")

def generate_data_store():
    """
    Loads documents, splits them into chunks, creates embeddings,
    and saves them to a Chroma vector database.
    """
    documents = load_documents()
    chunks = split_documents(documents)
    save_to_chroma(chunks)

def load_documents():
    """
    Loads all .txt documents from the specified data directory.
    """
    print(f"Loading documents from '{DATA_PATH}'...")
    loader = DirectoryLoader(DATA_PATH, glob="*.txt", loader_cls=TextLoader, loader_kwargs={'encoding': 'utf-8'})
    documents = loader.load()
    print(f"Loaded {len(documents)} documents.")
    return documents

def split_documents(documents):
    """
    Splits the loaded documents into smaller chunks for processing.
    """
    print("Splitting documents into chunks...")
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=CHUNK_SIZE,
        chunk_overlap=CHUNK_OVERLAP,
        length_function=len,
        add_start_index=True,
    )
    chunks = text_splitter.split_documents(documents)
    print(f"Split documents into {len(chunks)} chunks.")
    return chunks

def save_to_chroma(chunks):
    """
    Creates embeddings for the chunks and saves them to a Chroma database.
    """
    print("Creating embeddings and saving to Chroma DB...")

    if os.path.exists(CHROMA_PATH):
        print(f"Clearing existing database at '{CHROMA_PATH}'...")
        shutil.rmtree(CHROMA_PATH)
    # Ensure the directory exists
    os.makedirs(CHROMA_PATH, exist_ok=True)

    embeddings = OllamaEmbeddings(model=EMBEDDING_MODEL)
    db = Chroma.from_documents(
        chunks, embeddings, persist_directory=CHROMA_PATH
    )

    print(f"Saved {len(chunks)} chunks to '{CHROMA_PATH}'.")

if __name__ == "__main__":
    main()