# Local Constitutional Law Chatbot

This project is a self-hosted chatbot that answers questions about the Indian Constitution using a Retrieval-Augmented Generation (RAG) architecture.

## Setup Instructions

### 1. Create a Python Virtual Environment
It's highly recommended to use a virtual environment to manage dependencies.

```bash
# Navigate into the project directory
cd constitution_chatbot

# Create virtual environment
python -m venv venv

# Activate it
# Windows:
# venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate
```

### 2. Install Dependencies
Install all the required Python libraries.

```bash
pip install langchain langchain-community langchain-chroma langchain-text-splitters ollama beautifulsoup4 requests
```

### 3. Set Up Ollama
If you haven't already, download and install Ollama from [ollama.com](https://ollama.com/). Then, pull the necessary models from your terminal:

```bash
# Download the LLM for generation
ollama pull llama3:8b

# Download the model for embeddings
ollama pull nomic-embed-text
```

## How to Run

### Step 1: Fetch and Ingest Data
First, you need to populate the knowledge base.

```bash
# 1. Fetch the constitution text from the web
python fetch_data.py

# 2. Process all data and create the vector database
python ingest.py
```
This will create a `chroma` directory containing the vector store. You only need to do this once, or whenever you update the files in the `data` folder.

### Step 2: Run the Chatbot
Once the data is ingested, you can start the chatbot.

```bash
python chatbot.py
```

The chatbot will load, and you can start asking questions in the terminal. Type `exit` to quit.