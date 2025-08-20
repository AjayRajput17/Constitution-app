import express from "express";
import axios from "axios";
const router = express.Router();

// Define the Python API endpoint
const PYTHON_API_URL = 'http://127.0.0.1:8000/api/chat';

// POST /api/chatbot
router.post('/', async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }

    console.log(`Forwarding query to Python API: ${query}`);

    // Forward the request to the Python Flask server
    const response = await axios.post(PYTHON_API_URL, {
      query: query,
    });

    // Send the response from the Python server back to the React client
    res.json(response.data);

  } catch (error) {
    console.error('Error proxying request to Python API:', error.message);
    // Handle potential errors, like if the Python server is down
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: 'Internal Server Error or Chatbot service is down' });
    }
  }
});

// module.exports = router;
export default router;