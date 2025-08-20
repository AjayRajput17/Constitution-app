import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ChatPage from "./pages/Chatpage";
import VideoPage from "./pages/Videopage";
import NewsPage from "./pages/NewsPage";
import LoginPage from "./pages/LoginPage";
import LibraryPage from "./pages/Librarypage";
import LandingPage from './pages/LandingPage';
import GamificationPage from './pages/Gamificationpage';
import NewsPageApi from './pages/NewsPageApi';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/games" element={<GamificationPage />} /> 
        <Route path="/newsapi" element={<NewsPageApi />} /> 
        
      </Routes>
    </Router>
  );
} 


export default App;
