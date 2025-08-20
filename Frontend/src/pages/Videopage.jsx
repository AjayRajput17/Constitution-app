import React, { useState } from 'react';
import { 
  Play, 
  Search, 
  Filter, 
  Clock, 
  BookOpen, 
  Scale, 
  Users, 
  Globe, 
  Award, 
  Bookmark,
  Heart,
  Share2,
  CheckCircle,
  Star,
  Eye,
  X
} from "lucide-react";

const VideoPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = [
    { id: 'all', name: 'All Videos', icon: Play, count: 150 },
    { id: 'fundamentals', name: 'Fundamental Rights', icon: Scale, count: 35 },
    { id: 'duties', name: 'Fundamental Duties', icon: Users, count: 12 },
    { id: 'government', name: 'Government Structure', icon: BookOpen, count: 28 },
    { id: 'amendments', name: 'Amendments', icon: Award, count: 20 },
    { id: 'case-studies', name: 'Case Studies', icon: Eye, count: 25 },
    { id: 'current-affairs', name: 'Current Affairs', icon: Star, count: 30 }
  ];

  const featuredVideos = [
    {
      id: 1,
      title: "Article 21: Right to Life - Explained with Real Cases",
      description: "Understanding the most fundamental right in the Indian Constitution through landmark Supreme Court cases and real-life examples.",
      thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample YouTube video
      duration: "12:45",
      views: "45.2K",
      category: "fundamentals",
      isWatched: false,
      rating: 4.8,
      instructor: "Prof. Meera Sharma",
      language: "Hindi/English"
    },
    {
      id: 2,
      title: "How Parliament Works: Animation Explained",
      description: "Simple animated explanation of how the Indian Parliament functions, including Lok Sabha and Rajya Sabha processes.",
      thumbnail: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "8:30",
      views: "67.8K",
      category: "government",
      isWatched: true,
      rating: 4.9,
      instructor: "Nyaya Animation Team",
      language: "Hindi/English"
    },
    {
      id: 3,
      title: "Fundamental Duties: Your Responsibilities as a Citizen",
      description: "Explore the 11 fundamental duties every Indian citizen should know, with practical examples from daily life.",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "15:20",
      views: "32.1K",
      category: "duties",
      isWatched: false,
      rating: 4.7,
      instructor: "Dr. Rajesh Kumar",
      language: "Hindi/English/Marathi"
    }
  ];

  const allVideos = [
    {
      id: 4,
      title: "Constitutional Amendments: How Laws Change",
      description: "Understanding the process of amending the Constitution with examples from major amendments.",
      thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "10:15",
      views: "28.4K",
      category: "amendments",
      isWatched: false,
      rating: 4.6,
      instructor: "Adv. Priya Singh",
      language: "English"
    },
    {
      id: 5,
      title: "Supreme Court Powers: Guardian of Constitution",
      description: "Learn about the Supreme Court's role as the guardian of the Constitution and its various powers.",
      thumbnail: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "14:30",
      views: "41.7K",
      category: "government",
      isWatched: true,
      rating: 4.8,
      instructor: "Justice (Retd.) Ramesh Gupta",
      language: "Hindi/English"
    },
    {
      id: 6,
      title: "Right to Equality: Understanding Articles 14-18",
      description: "Detailed explanation of equality before law and equal protection of laws with case examples.",
      thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "11:45",
      views: "36.9K",
      category: "fundamentals",
      isWatched: false,
      rating: 4.7,
      instructor: "Prof. Anita Desai",
      language: "Hindi/English"
    },
    {
      id: 7,
      title: "Emergency Provisions: When Democracy is Tested",
      description: "Understanding the three types of emergencies and their historical use in Indian democracy.",
      thumbnail: "https://images.unsplash.com/photo-1584454584988-e7e21d9b2e19?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "16:20",
      views: "52.3K",
      category: "case-studies",
      isWatched: false,
      rating: 4.9,
      instructor: "Dr. Vikram Shastri",
      language: "Hindi/English"
    },
    {
      id: 8,
      title: "Recent Supreme Court Judgments on Privacy",
      description: "Analysis of recent court rulings on digital privacy and their impact on citizens' rights.",
      thumbnail: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: "9:45",
      views: "19.2K",
      category: "current-affairs",
      isWatched: false,
      rating: 4.5,
      instructor: "Adv. Kavita Mehta",
      language: "English"
    }
  ];

  const filteredVideos = [...featuredVideos, ...allVideos].filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const VideoCard = ({ video, isFeatured = false }) => (
    <div className="group cursor-pointer" onClick={() => setSelectedVideo(video)}>
      <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
        {/* Thumbnail */}
        <div className="relative">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-orange-600 ml-1" />
            </div>
          </div>

          {/* Duration */}
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </div>

          {/* Watched Indicator */}
          {video.isWatched && (
            <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
              <CheckCircle className="w-4 h-4" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 bg-white">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-slate-800 group-hover:text-orange-600 transition-colors line-clamp-2 text-sm">
              {video.title}
            </h3>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity">
              <Bookmark className="w-4 h-4 text-slate-400 hover:text-orange-500" />
            </button>
          </div>

          <p className="text-slate-600 text-xs mb-3 line-clamp-2">
            {video.description}
          </p>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3 text-xs text-slate-500">
              
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {video.duration}
              </div>
            </div>
            
          </div>

          <div className="flex items-center justify-between mb-2">
            <div className="text-xs text-slate-600">
              By {video.instructor}
            </div>
            <div className="text-xs text-slate-500">
              <Globe className="w-3 h-3 inline mr-1" />
              {video.language}
            </div>
          </div>

          <div className="flex items-center justify-end space-x-2">
            <button className="p-1 hover:bg-slate-100 rounded">
              <Heart className="w-4 h-4 text-slate-400 hover:text-red-500" />
            </button>
            <button className="p-1 hover:bg-slate-100 rounded">
              <Share2 className="w-4 h-4 text-slate-400 hover:text-orange-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal Popup */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedVideo(null);
            }
          }}
        >
          <div className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <div>
                <h3 className="text-lg font-bold text-slate-800">{selectedVideo.title}</h3>
                <p className="text-sm text-slate-600">{selectedVideo.instructor}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedVideo(null);
                }}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Info */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4 text-sm text-slate-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {selectedVideo.duration}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    <Heart className="w-4 h-4 text-slate-600" />
                    <span className="text-sm">Like</span>
                  </button>
                  <button 
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    <Share2 className="w-4 h-4 text-slate-600" />
                    <span className="text-sm">Share</span>
                  </button>
                  <button 
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-1 px-3 py-1.5 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg transition-colors"
                  >
                    <Bookmark className="w-4 h-4" />
                    <span className="text-sm">Save</span>
                  </button>
                </div>
              </div>
              
              <p className="text-slate-700 text-sm leading-relaxed">
                {selectedVideo.description}
              </p>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200">
                <div className="text-sm text-slate-600">
                  <Globe className="w-4 h-4 inline mr-1" />
                  Available in: {selectedVideo.language}
                </div>
                <div className="text-sm text-slate-600">
                  Category: {categories.find(c => c.id === selectedVideo.category)?.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
                Constitutional Learning Videos
              </h1>
              <p className="text-slate-600 mt-1">Simplified legal concepts through animations and real-life examples</p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search videos..."
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

        {/* Featured Videos */}
        {selectedCategory === 'all' && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-800">Featured Videos</h2>
              <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                View All →
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredVideos.map((video) => (
                <VideoCard key={video.id} video={video} isFeatured={true} />
              ))}
            </div>
          </div>
        )}

        {/* All Videos */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              {selectedCategory === 'all' ? 'All Videos' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-600">
                {filteredVideos.length} videos found
              </span>
              <div className="flex border border-slate-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-orange-50 text-orange-600' : 'text-slate-400'}`}
                >
                  <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                    <div className="bg-current rounded-sm"></div>
                  </div>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 border-l border-slate-300 ${viewMode === 'list' ? 'bg-orange-50 text-orange-600' : 'text-slate-400'}`}
                >
                  <div className="w-4 h-4 flex flex-col gap-1">
                    <div className="bg-current h-0.5 rounded"></div>
                    <div className="bg-current h-0.5 rounded"></div>
                    <div className="bg-current h-0.5 rounded"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;