from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain.prompts import ChatPromptTemplate
from langchain_community.llms import Ollama
from langchain_chroma import Chroma
from langchain_community.embeddings import OllamaEmbeddings
from langchain.schema.runnable import RunnablePassthrough, RunnableLambda
from langchain.schema.output_parser import StrOutputParser
import os

# --- Configuration ---
CHROMA_PATH = "chroma"
EMBEDDING_MODEL = "nomic-embed-text"
LLM_MODEL = "phi3"  # ✅ Ollama uses "phi3" not "phi-3" 
# LLM_MODEL = "llama3:8b"

# --- Initialize Flask App ---
app = Flask(__name__)
CORS(app)  # Allows cross-origin requests

# --- Global RAG Chain ---
rag_chain = None

def initialize_rag_chain():
    """Loads the vector database and initializes the RAG chain."""
    global rag_chain
    
    print("Loading vector database...")
    if not os.path.exists(CHROMA_PATH):
        raise FileNotFoundError(
            f"Chroma DB path not found: {CHROMA_PATH}. Please run ingest.py first."
        )
        
    embeddings = OllamaEmbeddings(model=EMBEDDING_MODEL)
    db = Chroma(persist_directory=CHROMA_PATH, embedding_function=embeddings)
    retriever = db.as_retriever()
    
    print(f"Initializing LLM: {LLM_MODEL}...")
    llm = Ollama(model=LLM_MODEL)
    
    PROMPT_TEMPLATE = """
    Answer the question based only on the following context:

    {context}

    ---

    Answer the question based on the above context: {question}
    """
    
    prompt = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
    
    rag_chain = (
        {
            "context": RunnableLambda(lambda q: retriever.invoke(q)),
            "question": RunnablePassthrough()
        }
        | prompt
        | llm
        | StrOutputParser()
    )
    print("RAG chain initialized successfully.")

# --- Root Health Check ---
@app.route('/', methods=['GET'])
def health():
    return jsonify({"status": "Chatbot API is running ✅"}), 200

# --- API Endpoint ---
@app.route('/api/chat', methods=['POST'])
def chat():
    """Handles chat requests from the frontend."""
    if not rag_chain:
        return jsonify({"error": "RAG chain is not initialized"}), 500

    data = request.get_json()
    query = data.get('query')

    if not query:
        return jsonify({"error": "Query parameter is missing"}), 400

    try:
        print(f"Received query: {query}")
        answer = rag_chain.invoke(query)
        print(f"Generated answer: {answer}")
        return jsonify({"answer": answer})
    except Exception as e:
        print(f"Error during RAG chain invocation: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    initialize_rag_chain()
    print("\n🚀 Server running at: http://127.0.0.1:8000/api/chat\n")
    app.run(host='0.0.0.0', port=8000, debug=True)
