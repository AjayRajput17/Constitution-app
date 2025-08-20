import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsPageApi = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q="Constitution of India"&language=en&sortBy=publishedAt&apiKey=117a9e3c803d48b983545712b0b06a18`
      );
      setArticles(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <h2>Constitution of India News</h2>
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <div>
          {articles.length === 0 ? (
            <p>No articles found.</p>
          ) : (
            articles.map((article, index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
                <hr />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NewsPageApi;
