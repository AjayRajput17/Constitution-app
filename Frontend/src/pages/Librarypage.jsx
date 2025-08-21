import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  BookOpen, 
  FileText, 
  Scale, 
  Users, 
  Download,
  Eye,
  Bookmark,
  Share2,
  Star,
  Calendar,
  Globe,
  Tag,
  Library,
  Gavel,
  ScrollText,
  Image,
  Clock
} from "lucide-react";
import { libraryAPI } from '../utils/api';

const LibraryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [resources, setResources] = useState([]);
  const [featuredResources, setFeaturedResources] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const categories = [
    { id: 'all', name: 'All Resources', icon: Library, count: 1250 },
    { id: 'constitution', name: 'Constitution', icon: Scale, count: 395 },
    { id: 'fundamental-rights', name: 'Fundamental Rights', icon: Users, count: 156 },
    { id: 'case-law', name: 'Case Law', icon: Gavel, count: 289 },
    { id: 'amendments', name: 'Amendments', icon: ScrollText, count: 105 },
    { id: 'government', name: 'Government', icon: BookOpen, count: 178 },
    { id: 'legal-guides', name: 'Legal Guides', icon: FileText, count: 127 }
  ];

  const resourceTypes = [
    { id: 'all', name: 'All Types', count: 1250 },
    { id: 'articles', name: 'Articles', count: 456 },
    { id: 'books', name: 'Books', count: 89 },
    { id: 'documents', name: 'Documents', count: 234 },
    { id: 'infographics', name: 'Infographics', count: 123 },
    { id: 'cases', name: 'Court Cases', count: 289 },
    { id: 'guides', name: 'Study Guides', count: 59 }
  ];



  // Fetch library statistics
  const fetchStats = async () => {
    try {
      const response = await libraryAPI.getStats();
      console.log('Stats response:', response);
      setStats(response.data.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  // Fetch featured resources
  const fetchFeaturedResources = async () => {
    try {
      const response = await libraryAPI.getFeatured();
      console.log('Featured response:', response);
      setFeaturedResources(response.data.data);
    } catch (error) {
      console.error('Error fetching featured resources:', error);
    }
  };

  // Fetch all resources with filtering
  const fetchResources = async (page = 1, reset = false) => {
    try {
      setLoading(true);
      const params = {
        page,
        limit: 20,
        category: selectedCategory !== 'all' ? selectedCategory : undefined,
        type: selectedType !== 'all' ? selectedType : undefined,
        search: searchQuery || undefined
      };

      console.log('Fetching resources with params:', params);
      const response = await libraryAPI.getResources(params);
      console.log('Resources response:', response);
      
      if (reset) {
        setResources(response.data.data);
        setCurrentPage(1);
      } else {
        setResources(prev => [...prev, ...response.data.data]);
      }
      
      setHasMore(response.data.pagination.hasNextPage);
    } catch (error) {
      console.error('Error fetching resources:', error);
      setError('Failed to fetch resources');
    } finally {
      setLoading(false);
    }
  };

  // Load more resources
  const loadMore = () => {
    if (!loading && hasMore) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchResources(nextPage, false);
    }
  };

  // Search resources
  const handleSearch = () => {
    fetchResources(1, true);
  };

  // Filter resources
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    fetchResources(1, true);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    fetchResources(1, true);
  };

  // Initial data fetch
  useEffect(() => {
    fetchStats();
    fetchFeaturedResources();
    fetchResources(1, true);
  }, []);

  // Refetch when filters change
  useEffect(() => {
    if (currentPage === 1) {
      fetchResources(1, true);
    }
  }, [selectedCategory, selectedType]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-orange-100 text-orange-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'book': return BookOpen;
      case 'article': return FileText;
      case 'document': return ScrollText;
      case 'infographic': return Image;
      case 'cases': return Gavel;
      case 'guide': return Library;
      default: return FileText;
    }
  };

  const filteredResources = [...featuredResources, ...resources];

  const ResourceCard = ({ resource }) => {
    const TypeIcon = getTypeIcon(resource.type);
    
    return (
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200 group">
        {/* Thumbnail */}
        <div className="relative h-48">
          <img 
            src={resource.thumbnail} 
            alt={resource.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          
          {/* Type Badge */}
          <div className="absolute top-3 left-3">
            <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
              <TypeIcon className="w-3 h-3 text-slate-600" />
              <span className="text-xs font-medium text-slate-700 capitalize">{resource.type}</span>
            </div>
          </div>

          {/* Premium Badge */}
          {resource.isPremium && (
            <div className="absolute top-3 right-3">
              <div className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Premium
              </div>
            </div>
          )}

          {/* Bookmark */}
          {resource.isBookmarked && (
            <div className="absolute bottom-3 right-3">
              <Bookmark className="w-5 h-5 text-orange-500 fill-current" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
            {resource.title}
          </h3>
          
          <p className="text-slate-600 text-sm mb-4 line-clamp-3">
            {resource.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {resource.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs">
                #{tag}
              </span>
            ))}
          </div>

          {/* Meta Info */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>By {resource.author}</span>
              {resource.pages && (
                <span>{resource.pages} pages</span>
              )}
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-3 text-slate-500">
                <div className="flex items-center">
                  <Download className="w-3 h-3 mr-1" />
                  {resource.downloadCount}
                </div>
                <div className="flex items-center">
                  <Star className="w-3 h-3 mr-1 text-yellow-400 fill-current" />
                  {resource.rating}
                </div>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(resource.difficulty)}`}>
                {resource.difficulty}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center">
                <Globe className="w-3 h-3 mr-1" />
                {resource.language}
              </div>
              <div className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {new Date(resource.publishedDate).toLocaleDateString('en-IN')}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <button className="flex items-center space-x-1 px-3 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg transition-colors text-sm">
                <Eye className="w-4 h-4" />
                <span>Read</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors text-sm">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
            
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <Bookmark className="w-4 h-4 text-slate-400 hover:text-orange-500" />
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <Share2 className="w-4 h-4 text-slate-400 hover:text-orange-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-lg border-b border-slate-200/50 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                Constitutional Library
              </h1>
              <p className="text-slate-600 mt-1">Comprehensive collection of legal resources, articles, and documents</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
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
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-800">{stats.totalResources || 0}+</div>
                <div className="text-sm text-slate-600">Total Resources</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Download className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-800">{stats.totalDownloads ? `${(stats.totalDownloads / 1000).toFixed(1)}K+` : '0K+'}</div>
                <div className="text-sm text-slate-600">Downloads</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-800">3</div>
                <div className="text-sm text-slate-600">Languages</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-800">{stats.avgRating || 0}</div>
                <div className="text-sm text-slate-600">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
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

        {/* Resource Types */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Filter by Type</h2>
          <div className="flex flex-wrap gap-3">
            {resourceTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handleTypeChange(type.id)}
                className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                  selectedType === type.id
                    ? 'bg-slate-800 text-white border-slate-800'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                }`}
              >
                <span className="font-medium">{type.name}</span>
                <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                  selectedType === type.id ? 'bg-white/20' : 'bg-slate-100'
                }`}>
                  {type.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800">
              {selectedCategory === 'all' ? 'All Resources' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <div className="text-sm text-slate-600">
              {filteredResources.length} resources found
            </div>
          </div>
        </div>

        {/* Resource Grid */}
        {loading && resources.length === 0 ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-slate-600">Loading resources...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={() => fetchResources(1, true)}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Try Again
            </button>
          </div>
        ) : filteredResources.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600">No resources found. Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-12">
          {hasMore && (
            <button 
              onClick={loadMore}
              disabled={loading}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-lg hover:from-orange-600 hover:to-green-600 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Loading...' : 'Load More Resources'}
            </button>
          )}
        </div>

        {/* Featured Collections */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-green-50 rounded-xl p-8 border border-orange-200">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Featured Collections</h3>
            <p className="text-slate-600 mb-6">
              Curated collections of resources for comprehensive constitutional learning
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Scale className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Constitutional Basics</h4>
                <p className="text-sm text-slate-600">Essential documents for beginners</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Gavel className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Landmark Cases</h4>
                <p className="text-sm text-slate-600">Historic Supreme Court judgments</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Rights & Duties</h4>
                <p className="text-sm text-slate-600">Complete guide to citizen rights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;