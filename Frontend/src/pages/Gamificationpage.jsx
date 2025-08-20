import React, { useState } from 'react';
import { 
  Gamepad2, 
  Trophy, 
  Target, 
  Brain, 
  Users, 
  Clock, 
  Star,
  Play,
  Lock,
  CheckCircle,
  Award,
  Zap,
  Puzzle,
  BookOpen,
  Scale,
  Shield,
  Gavel,
  Crown,
  Search,
  Filter,
  Medal,
  Timer,
  Heart,
  RotateCcw
} from "lucide-react";

const GamificationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const gameCategories = [
    { id: 'all', name: 'All Games', icon: Gamepad2, count: 1580 },
    { id: 'fundamental-rights', name: 'Fundamental Rights', icon: Shield, count: 234 },
    { id: 'directive-principles', name: 'Directive Principles', icon: Target, count: 156 },
    { id: 'fundamental-duties', name: 'Fundamental Duties', icon: Users, count: 89 },
    { id: 'government-structure', name: 'Government Structure', icon: Scale, count: 267 },
    { id: 'judiciary', name: 'Judiciary', icon: Gavel, count: 198 },
    { id: 'amendments', name: 'Amendments', icon: BookOpen, count: 315 },
    { id: 'case-studies', name: 'Case Studies', icon: Brain, count: 321 }
  ];

  const gameTypes = [
    {
      id: 'quiz',
      name: 'Quiz Master',
      description: 'Multiple choice questions for each article',
      icon: Brain,
      color: 'bg-blue-500',
      count: 395
    },
    {
      id: 'scenarios',
      name: 'Real-Life Scenarios',
      description: 'Apply constitutional knowledge to daily situations',
      icon: Users,
      color: 'bg-green-500',
      count: 278
    },
    {
      id: 'puzzles',
      name: 'Constitutional Puzzles',
      description: 'Crosswords, word searches, and brain teasers',
      icon: Puzzle,
      color: 'bg-purple-500',
      count: 156
    },
    {
      id: 'timeline',
      name: 'Timeline Challenge',
      description: 'Arrange constitutional events chronologically',
      icon: Clock,
      color: 'bg-orange-500',
      count: 89
    },
    {
      id: 'matching',
      name: 'Match & Learn',
      description: 'Connect articles with their applications',
      icon: Target,
      color: 'bg-red-500',
      count: 234
    },
    {
      id: 'simulation',
      name: 'Court Simulation',
      description: 'Role-play as judges, lawyers, and citizens',
      icon: Gavel,
      color: 'bg-indigo-500',
      count: 167
    },
    {
      id: 'memory',
      name: 'Memory Palace',
      description: 'Remember constitutional facts and figures',
      icon: Star,
      color: 'bg-pink-500',
      count: 123
    },
    {
      id: 'adventure',
      name: 'Constitutional Adventure',
      description: 'Interactive stories with decision-making',
      icon: Crown,
      color: 'bg-teal-500',
      count: 138
    }
  ];

  const featuredGames = [
    {
      id: 1,
      title: "Article 21 Hero Journey",
      description: "Navigate through scenarios protecting the Right to Life and Personal Liberty",
      article: "Article 21",
      category: "fundamental-rights",
      type: "adventure",
      difficulty: "Intermediate",
      duration: "15-20 min",
      points: 250,
      players: "12.4K",
      rating: 4.9,
      isLocked: false,
      isCompleted: true,
      thumbnail: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Fundamental Rights Quiz Champion",
      description: "Master all 6 fundamental rights through progressive challenges",
      article: "Articles 12-35",
      category: "fundamental-rights",
      type: "quiz",
      difficulty: "Beginner",
      duration: "10-15 min",
      points: 180,
      players: "8.7K",
      rating: 4.8,
      isLocked: false,
      isCompleted: false,
      thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Supreme Court Simulation",
      description: "Act as Chief Justice in landmark constitutional cases",
      article: "Articles 124-147",
      category: "judiciary",
      type: "simulation",
      difficulty: "Advanced",
      duration: "25-30 min",
      points: 400,
      players: "6.2K",
      rating: 4.9,
      isLocked: false,
      isCompleted: false,
      thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Constitutional Timeline Master",
      description: "Arrange 105 amendments in chronological order",
      article: "All Amendments",
      category: "amendments",
      type: "timeline",
      difficulty: "Intermediate",
      duration: "12-18 min",
      points: 320,
      players: "5.9K",
      rating: 4.7,
      isLocked: true,
      isCompleted: false,
      thumbnail: "https://images.unsplash.com/photo-1584454584988-e7e21d9b2e19?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      title: "Parliament Procedure Game",
      description: "Guide bills through Lok Sabha and Rajya Sabha",
      article: "Articles 79-122",
      category: "government-structure",
      type: "simulation",
      difficulty: "Advanced",
      duration: "20-25 min",
      points: 350,
      players: "7.1K",
      rating: 4.8,
      isLocked: true,
      isCompleted: false,
      thumbnail: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=300&h=200&fit=crop"
    },
    {
      id: 6,
      title: "Rights vs Duties Matcher",
      description: "Connect fundamental rights with corresponding duties",
      article: "Articles 12-35 & 51A",
      category: "fundamental-duties",
      type: "matching",
      difficulty: "Beginner",
      duration: "8-12 min",
      points: 150,
      players: "9.3K",
      rating: 4.6,
      isLocked: false,
      isCompleted: true,
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop"
    }
  ];

  const quickGames = [
    {
      id: 7,
      title: "Daily Constitutional Quiz",
      description: "5 quick questions about random articles",
      duration: "3-5 min",
      points: 50,
      difficulty: "Mixed",
      isDaily: true
    },
    {
      id: 8,
      title: "Article Speed Match",
      description: "Match articles to their key provisions quickly",
      duration: "2-4 min",
      points: 75,
      difficulty: "Beginner",
      isDaily: false
    },
    {
      id: 9,
      title: "Constitutional Facts Memory",
      description: "Remember important constitutional facts",
      duration: "5-8 min",
      points: 100,
      difficulty: "Intermediate",
      isDaily: false
    }
  ];

  const achievements = [
    { id: 1, title: "First Steps", description: "Complete your first game", icon: Trophy, earned: true },
    { id: 2, title: "Rights Scholar", description: "Master all Fundamental Rights games", icon: Shield, earned: true },
    { id: 3, title: "Quiz Master", description: "Score 100% in 10 consecutive quizzes", icon: Brain, earned: false },
    { id: 4, title: "Constitution Expert", description: "Complete games for all 395 articles", icon: Crown, earned: false },
    { id: 5, title: "Speed Demon", description: "Complete 5 games in under 2 minutes each", icon: Zap, earned: false },
    { id: 6, title: "Helping Hand", description: "Share 10 games with friends", icon: Heart, earned: true }
  ];

  const userStats = {
    gamesPlayed: 47,
    totalPoints: 8950,
    averageScore: 87,
    streak: 12,
    rank: "Constitutional Scholar",
    level: 8,
    nextLevelPoints: 1050
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-orange-100 text-orange-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      case 'Mixed': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredGames = featuredGames.filter(game => {
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || game.difficulty === selectedDifficulty;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.article.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const GameCard = ({ game }) => (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200 group">
      {/* Thumbnail */}
      <div className="relative h-40">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-12 h-12 ${game.isLocked ? 'bg-slate-400' : 'bg-white/90'} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
            {game.isLocked ? (
              <Lock className="w-6 h-6 text-slate-600" />
            ) : (
              <Play className="w-6 h-6 text-orange-600 ml-1" />
            )}
          </div>
        </div>

        {/* Status Badges */}
        <div className="absolute top-3 left-3 flex space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(game.difficulty)}`}>
            {game.difficulty}
          </span>
        </div>

        <div className="absolute top-3 right-3 flex space-x-2">
          {game.isCompleted && (
            <div className="bg-green-500 text-white rounded-full p-1">
              <CheckCircle className="w-4 h-4" />
            </div>
          )}
          {game.isLocked && (
            <div className="bg-slate-500 text-white rounded-full p-1">
              <Lock className="w-4 h-4" />
            </div>
          )}
        </div>

        {/* Points */}
        <div className="absolute bottom-3 right-3 bg-gradient-to-r from-orange-500 to-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
          +{game.points} pts
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-orange-600 font-medium">{game.article}</span>
          <div className="flex items-center text-xs text-slate-500">
            <Timer className="w-3 h-3 mr-1" />
            {game.duration}
          </div>
        </div>

        <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-orange-600 transition-colors">
          {game.title}
        </h3>
        
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {game.description}
        </p>

        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Users className="w-3 h-3 mr-1" />
              {game.players}
            </div>
            <div className="flex items-center">
              <Star className="w-3 h-3 mr-1 text-yellow-400 fill-current" />
              {game.rating}
            </div>
          </div>
        </div>

        <button 
          className={`w-full py-3 rounded-lg font-semibold transition-colors ${
            game.isLocked 
              ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white'
          }`}
          disabled={game.isLocked}
        >
          {game.isLocked ? 'Unlock Required' : game.isCompleted ? 'Play Again' : 'Start Game'}
        </button>
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
                Constitutional Games
              </h1>
              <p className="text-slate-600 mt-1">Learn through play - 1,580+ interactive games covering all 395 articles</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search games..."
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
        {/* User Stats Dashboard */}
        <div className="bg-gradient-to-r from-orange-500 to-green-600 rounded-xl p-6 text-white mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold">{userStats.gamesPlayed}</div>
              <div className="text-white/80 text-sm">Games Played</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{userStats.totalPoints.toLocaleString()}</div>
              <div className="text-white/80 text-sm">Total Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{userStats.averageScore}%</div>
              <div className="text-white/80 text-sm">Avg Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{userStats.streak}</div>
              <div className="text-white/80 text-sm">Day Streak</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">Level {userStats.level}</div>
              <div className="text-white/80 text-sm">{userStats.rank}</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">{userStats.nextLevelPoints}</div>
              <div className="text-white/80 text-sm">To Next Level</div>
            </div>
          </div>
        </div>

        {/* Quick Daily Games */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Daily Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickGames.map((game) => (
              <div key={game.id} className="bg-white rounded-lg p-4 border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-800">{game.title}</h3>
                  {game.isDaily && (
                    <div className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-2 py-1 rounded-full text-xs">
                      Daily
                    </div>
                  )}
                </div>
                <p className="text-sm text-slate-600 mb-3">{game.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span>{game.duration}</span>
                  <span>+{game.points} pts</span>
                  <span className={`px-2 py-1 rounded-full ${getDifficultyColor(game.difficulty)}`}>
                    {game.difficulty}
                  </span>
                </div>
                <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 rounded-lg text-sm font-medium transition-colors">
                  Quick Play
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Game Types */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Game Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gameTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.id} className="bg-white rounded-lg p-4 border border-slate-200 hover:shadow-md transition-shadow cursor-pointer group">
                  <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-1">{type.name}</h3>
                  <p className="text-xs text-slate-600 mb-2">{type.description}</p>
                  <div className="text-xs text-slate-500">{type.count} games</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Browse by Constitutional Topic</h2>
          <div className="flex flex-wrap gap-3 mb-4">
            {gameCategories.map((category) => {
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

          {/* Difficulty Filter */}
          <div className="flex space-x-3">
            {['all', 'Beginner', 'Intermediate', 'Advanced'].map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedDifficulty === difficulty
                    ? 'bg-slate-800 text-white'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                }`}
              >
                {difficulty === 'all' ? 'All Levels' : difficulty}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Games Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800">Featured Games</h2>
            <div className="text-sm text-slate-600">
              {filteredGames.length} games available
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div key={achievement.id} className={`text-center p-4 rounded-lg border-2 transition-all ${
                  achievement.earned 
                    ? 'border-orange-300 bg-orange-50' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    achievement.earned 
                      ? 'bg-gradient-to-r from-orange-500 to-green-500 text-white' 
                      : 'bg-slate-100 text-slate-400'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className={`font-semibold text-sm mb-1 ${
                    achievement.earned ? 'text-slate-800' : 'text-slate-500'
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-slate-500">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Article-Based Game Generator */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Complete Article Coverage</h3>
            <p className="text-slate-600 mb-6">
              Every single constitutional article (1-395) has dedicated games designed to help you understand its significance and application.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">395</div>
                <div className="text-sm text-slate-600">Article Games</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">105</div>
                <div className="text-sm text-slate-600">Amendment Games</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">8</div>
                <div className="text-sm text-slate-600">Game Types</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">1,580+</div>
                <div className="text-sm text-slate-600">Total Games</div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-green-600 transition-colors">
              Explore All Article Games
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamificationPage;