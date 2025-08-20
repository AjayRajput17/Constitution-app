import os
import requests
from bs4 import BeautifulSoup

def fetch_constitution_text():
    """
    Fetches the plain text of the Constitution of India from a reliable source
    and saves it to a file in the 'data' directory.
    """
    # URL to a web version of the Constitution
    url = "https://www.constitutionofindia.net/full-text/"

    # Create data directory if it doesn't exist
    if not os.path.exists('data'):
        os.makedirs('data')

    file_path = 'data/constitution_of_india.txt'

    try:
        print(f"Fetching data from {url}...")
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for bad status codes

        soup = BeautifulSoup(response.content, 'html.parser')

        # Find the main content area of the page
        content = soup.find('div', class_='wysiwyg')

        if not content:
            print("Could not find the main content element. The website structure may have changed.")
            return

        text = content.get_text(separator='\n\n', strip=True)

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(text)

        print(f"Successfully saved the Constitution to {file_path}")

    except requests.exceptions.RequestException as e:
        print(f"Error fetching the URL: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    fetch_constitution_text()
    
    
    
    
    
