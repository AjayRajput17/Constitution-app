import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Calendar,
  Scale,
  BookOpen,
  Users,
  Building,
  Bookmark,
  Share2,
  ExternalLink,
  TrendingUp,
  AlertCircle
} from "lucide-react";

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All News', icon: BookOpen, count: 245 },
    { id: 'supreme-court', name: 'Supreme Court', icon: Scale, count: 78 },
    { id: 'high-court', name: 'High Courts', icon: Building, count: 65 },
    { id: 'amendments', name: 'Constitutional Amendments', icon: Users, count: 12 },
    { id: 'government', name: 'Government Policies', icon: Building, count: 45 },
    { id: 'legal-reforms', name: 'Legal Reforms', icon: TrendingUp, count: 32 },
    { id: 'breaking', name: 'Breaking News', icon: AlertCircle, count: 13 }
  ];

  const breakingNews = [
    {
      id: 1,
      source: "ANI News",
      title: "Supreme Court Upholds Right to Privacy in Digital Age",
      subheading: "In landmark judgment, SC reinforces Article 21 protection in digital transactions and data collection with immediate effect across all platforms...",
      category: "supreme-court",
      priority: "high",
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      source: "PTI",
      title: "New Bill Proposes Changes to Fundamental Duties",
      subheading: "Parliament introduces bill to add environmental protection as 12th fundamental duty following widespread climate change concerns...",
      category: "amendments",
      priority: "medium",
      timeAgo: "4 hours ago"
    }
  ];

  const featuredNews = [
    {
      id: 3,
      source: "The Times of India",
      title: "Supreme Court Clarifies Article 370 Implementation in Landmark Judgment",
      subheading: "The apex court provided crucial clarifications on constitutional provisions and their application in Jammu & Kashmir reorganization, addressing federal structure implications...",
      category: "supreme-court",
      publishedDate: "2024-01-15",
      timeAgo: "2 hours ago",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=225&fit=crop",
      tags: ["Article 370", "Supreme Court", "Constitutional Law"],
      isBookmarked: false
    },
    {
      id: 4,
      source: "The Hindu",
      title: "Digital India Act Introduces Comprehensive Framework for Cyber Laws",
      subheading: "Government unveils new legislation to replace IT Act 2000, emphasizing digital rights, data protection, and robust mechanisms for digital justice in the modern era...",
      category: "government",
      publishedDate: "2024-01-14",
      timeAgo: "4 hours ago",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=225&fit=crop",
      tags: ["Digital Rights", "Cyber Law", "Privacy"],
      isBookmarked: true
    },
    {
      id: 5,
      source: "Indian Express",
      title: "Delhi High Court Mandates 50% Women's Reservation in Municipal Bodies",
      subheading: "In progressive ruling strengthening women's political participation, the court mandates enhanced reservation in local governance citing constitutional equality principles...",
      category: "high-court",
      publishedDate: "2024-01-13", 
      timeAgo: "6 hours ago",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=225&fit=crop",
      tags: ["Women's Rights", "Local Government", "Equality"],
      isBookmarked: false
    }
  ];

  const recentNews = [
    {
      id: 6,
      source: "Economic Times",
      title: "Parliament Passes Consumer Protection Amendment with Digital Marketplace Regulations",
      subheading: "New amendments strengthen consumer rights in digital economy with enhanced grievance mechanisms and marketplace accountability measures for better protection...",
      category: "legal-reforms",
      publishedDate: "2024-01-12",
      timeAgo: "8 hours ago",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=225&fit=crop",
      isBookmarked: false
    },
    {
      id: 7,
      source: "NDTV",
      title: "Supreme Court Issues Comprehensive Guidelines on Custodial Violence Prevention",
      subheading: "Apex court establishes detailed protocol for preventing police custodial violence, ensuring Article 21 protection with mandatory safeguards and monitoring mechanisms...",
      category: "supreme-court", 
      publishedDate: "2024-01-11",
      timeAgo: "12 hours ago",
      image: "https://images.unsplash.com/photo-1584454584988-e7e21d9b2e19?w=400&h=225&fit=crop",
      isBookmarked: true
    },
    {
      id: 8,
      source: "Hindustan Times",
      title: "National Green Tribunal Announces Stricter Environmental Law Enforcement",
      subheading: "Enhanced penalties for environmental violations announced, citing constitutional duty to protect environment with immediate implementation across all states...",
      category: "legal-reforms",
      publishedDate: "2024-01-10",
      timeAgo: "1 day ago",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=225&fit=crop",
      isBookmarked: false
    },
    {
      id: 9,
      source: "Live Law",
      title: "Government Considers Extending Right to Education Coverage to Higher Secondary",
      subheading: "Ministry proposes amendment to include higher secondary education under Article 21A, potentially making education free and compulsory till class 12...",
      category: "amendments",
      publishedDate: "2024-01-09",
      timeAgo: "2 days ago",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=225&fit=crop",
      isBookmarked: false
    },
    {
      id: 10,
      source: "Bar and Bench",
      title: "Bombay High Court Rules on Maratha Reservation Constitutional Validity",
      subheading: "Court examines reservation limits under constitutional framework, addressing social justice and equality provisions in landmark case with wide implications...",
      category: "high-court",
      publishedDate: "2024-01-08",
      timeAgo: "3 days ago",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=225&fit=crop",
      isBookmarked: false
    },
    {
      id: 11,
      source: "The Wire",
      title: "Election Commission Proposes Electoral Reforms for Transparent Democracy",
      subheading: "Comprehensive reforms proposed including candidate disclosure requirements, campaign finance transparency, and enhanced voter verification mechanisms...",
      category: "government",
      publishedDate: "2024-01-07",
      timeAgo: "4 days ago",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=225&fit=crop",
      isBookmarked: true
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const filteredNews = [...featuredNews, ...recentNews].filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.subheading.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const NewsCard = ({ article }) => (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200">
      {/* Source */}
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-orange-600">
            {article.source}
          </span>
          {article.isBookmarked && (
            <Bookmark className="w-4 h-4 text-orange-500 fill-current" />
          )}
        </div>
      </div>

      {/* Heading */}
      <div className="px-4">
        <h2 className="font-bold text-slate-800 text-lg mb-2 hover:text-orange-600 transition-colors cursor-pointer leading-tight">
          {article.title}
        </h2>
      </div>

      {/* Subheading */}
      <div className="px-4 mb-4">
        <p className="text-slate-600 text-sm leading-relaxed">
          {article.subheading}
        </p>
      </div>

      {/* Photo */}
      {article.image && (
        <div className="px-4 mb-4">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-48 object-cover rounded-lg"
          />
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
            <button className="p-1 hover:bg-slate-100 rounded transition-colors">
              <ExternalLink className="w-4 h-4 text-slate-400 hover:text-orange-500" />
            </button>
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
                Legal News & Updates
              </h1>
              <p className="text-slate-600 mt-1">Stay informed about constitutional developments and court rulings</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search legal news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-64"
                />
              </div>
              
              <button className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50">
                <Filter className="w-4 h-4 text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Breaking News Ticker */}
        {breakingNews.length > 0 && (
          <div className="mb-8 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4">
            <div className="flex items-center mb-3">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
              <span className="font-bold text-red-800">Breaking News</span>
            </div>
            <div className="space-y-3">
              {breakingNews.map((news) => (
                <div key={news.id} className="border-b border-red-200 last:border-b-0 pb-3 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-orange-600 mb-1">{news.source}</div>
                      <h3 className="font-semibold text-slate-800 hover:text-orange-600 cursor-pointer mb-1">
                        {news.title}
                      </h3>
                      <p className="text-sm text-slate-600">{news.subheading}</p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(news.priority)}`}>
                        {news.priority}
                      </span>
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
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((article) => (
            <NewsCard 
              key={article.id} 
              article={article}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-lg hover:from-orange-600 hover:to-green-600 transition-all duration-200 font-medium">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-green-50 rounded-xl p-8 border border-orange-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Stay Updated with Legal News</h3>
            <p className="text-slate-600 mb-6">
              Get daily updates on constitutional developments, court rulings, and legal reforms directly in your inbox.
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