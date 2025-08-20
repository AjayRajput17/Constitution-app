import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Calendar,
  Scale,
  BookOpen,
  Users,
  Building,
  Bookmark,
  Share2,
  ExternalLink,
  TrendingUp,
  AlertCircle,
  Loader,
  RefreshCw
} from "lucide-react";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookmarkedArticles, setBookmarkedArticles] = useState(new Set());

  // Categories for filtering (based on common legal topics)
  const categories = [
    { id: 'all', name: 'All News', icon: BookOpen },
    { id: 'supreme-court', name: 'Supreme Court', icon: Scale },
    { id: 'high-court', name: 'High Courts', icon: Building },
    { id: 'constitutional', name: 'Constitutional Law', icon: Users },
    { id: 'government', name: 'Government', icon: Building },
    { id: 'rights', name: 'Rights & Freedoms', icon: TrendingUp }
  ];

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Replace 'YOUR_API_KEY' with your actual News API key
      const API_KEY = '117a9e3c803d48b983545712b0b06a18';
      const response = await fetch(
        `https://newsapi.org/v2/everything?q="Constitution of India"&language=en&sortBy=publishedAt&apiKey=${API_KEY}&pageSize=50`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.status === 'ok') {
        // Process articles and add categories based on content
        const processedArticles = data.articles.map((article, index) => ({
          ...article,
          id: index,
          category: categorizeArticle(article),
          timeAgo: getTimeAgo(article.publishedAt),
          isBookmarked: bookmarkedArticles.has(article.url)
        }));
        
        setArticles(processedArticles);
      } else {
        throw new Error(data.message || 'Failed to fetch news');
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching news:', err);
    } finally {
      setLoading(false);
    }
  };

  // Categorize articles based on their content
  const categorizeArticle = (article) => {
    const content = (article.title + ' ' + article.description).toLowerCase();
    
    if (content.includes('supreme court') || content.includes('apex court')) {
      return 'supreme-court';
    } else if (content.includes('high court')) {
      return 'high-court';
    } else if (content.includes('constitutional') || content.includes('constitution')) {
      return 'constitutional';
    } else if (content.includes('government') || content.includes('ministry')) {
      return 'government';
    } else if (content.includes('rights') || content.includes('freedom')) {
      return 'rights';
    }
    return 'all';
  };

  // Calculate time ago from published date
  const getTimeAgo = (publishedAt) => {
    const now = new Date();
    const published = new Date(publishedAt);
    const diffInHours = Math.floor((now - published) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
  };

  // Toggle bookmark status
  const toggleBookmark = (articleUrl) => {
    setBookmarkedArticles(prev => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(articleUrl)) {
        newBookmarks.delete(articleUrl);
      } else {
        newBookmarks.add(articleUrl);
      }
      return newBookmarks;
    });
  };

  // Filter articles based on search and category
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (article.description && article.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch && article.title !== '[Removed]';
  });

  // Get breaking news (articles from last 6 hours)
  const breakingNews = articles.filter(article => {
    const publishedTime = new Date(article.publishedAt);
    const sixHoursAgo = new Date(Date.now() - 6 * 60 * 60 * 1000);
    return publishedTime > sixHoursAgo && article.title !== '[Removed]';
  }).slice(0, 3);

  useEffect(() => {
    fetchNews();
  }, []);

  const NewsCard = ({ article }) => (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200">
      {/* Source */}
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-orange-600">
            {article.source.name}
          </span>
          <button 
            onClick={() => toggleBookmark(article.url)}
            className="p-1 hover:bg-slate-100 rounded transition-colors"
          >
            <Bookmark 
              className={`w-4 h-4 ${
                bookmarkedArticles.has(article.url) 
                  ? 'text-orange-500 fill-current' 
                  : 'text-slate-400 hover:text-orange-500'
              }`} 
            />
          </button>
        </div>
      </div>

      {/* Heading */}
      <div className="px-4">
        <h2 className="font-bold text-slate-800 text-lg mb-2 hover:text-orange-600 transition-colors cursor-pointer leading-tight">
          {article.title}
        </h2>
      </div>

      {/* Description */}
      {article.description && (
        <div className="px-4 mb-4">
          <p className="text-slate-600 text-sm leading-relaxed">
            {article.description.length > 150 
              ? article.description.substring(0, 150) + '...'
              : article.description
            }
          </p>
        </div>
      )}

      {/* Photo */}
      {article.urlToImage && (
        <div className="px-4 mb-4">
          <img 
            src={article.urlToImage} 
            alt={article.title}
            className="w-full h-48 object-cover rounded-lg"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}

      {/* Author and Date */}
      {article.author && (
        <div className="px-4 mb-2">
          <span className="text-xs text-slate-500">
            By {article.author}
          </span>
        </div>
      )}

      {/* Timestamp and Actions */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">
            {article.timeAgo}
          </span>
          
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-slate-100 rounded transition-colors">
              <Share2 className="w-4 h-4 text-slate-400 hover:text-orange-500" />
            </button>
            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1 hover:bg-slate-100 rounded transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-slate-400 hover:text-orange-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-lg border-b border-slate-200/50 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                Constitution of India - Latest News
              </h1>
              <p className="text-slate-600 mt-1">Real-time updates on constitutional developments and legal affairs</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search constitutional news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-64"
                />
              </div>
              
              <button 
                onClick={fetchNews}
                disabled={loading}
                className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 text-slate-600 ${loading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Breaking News Section */}
        {breakingNews.length > 0 && (
          <div className="mb-8 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4">
            <div className="flex items-center mb-3">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
              <span className="font-bold text-red-800">Latest Updates</span>
            </div>
            <div className="space-y-3">
              {breakingNews.map((news) => (
                <div key={news.id} className="border-b border-red-200 last:border-b-0 pb-3 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-orange-600 mb-1">{news.source.name}</div>
                      <h3 className="font-semibold text-slate-800 hover:text-orange-600 cursor-pointer mb-1">
                        <a href={news.url} target="_blank" rel="noopener noreferrer">
                          {news.title}
                        </a>
                      </h3>
                      {news.description && (
                        <p className="text-sm text-slate-600">
                          {news.description.length > 100 
                            ? news.description.substring(0, 100) + '...'
                            : news.description
                          }
                        </p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <span className="text-xs text-slate-500">{news.timeAgo}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const count = articles.filter(article => 
                category.id === 'all' || article.category === category.id
              ).length;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-orange-500 to-green-500 text-white border-transparent'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-orange-300 hover:bg-orange-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{category.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === category.id ? 'bg-white/20' : 'bg-slate-100'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <Loader className="w-8 h-8 text-orange-500 animate-spin mr-3" />
            <span className="text-slate-600">Loading latest constitutional news...</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
            <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to Load News</h3>
            <p className="text-red-600 mb-4">
              {error.includes('API key') ? 
                'Please add your News API key to fetch real-time news.' :
                error
              }
            </p>
            <button 
              onClick={fetchNews}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* News Grid */}
        {!loading && !error && (
          <>
            {filteredArticles.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-600 mb-2">No articles found</h3>
                <p className="text-slate-500">Try adjusting your search criteria or check back later for new updates.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <NewsCard 
                    key={article.id} 
                    article={article}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {/* API Attribution */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            News powered by <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">NewsAPI.org</a>
          </p>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 bg-gradient-to-r from-orange-50 to-green-50 rounded-xl p-8 border border-orange-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Stay Updated with Constitutional News</h3>
            <p className="text-slate-600 mb-6">
              Get real-time updates on constitutional developments, court rulings, and legal reforms directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-lg hover:from-orange-600 hover:to-green-600 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;