import React, { useState } from 'react';
import { 
  Scale, 
  BookOpen, 
  Video, 
  MessageCircle, 
  Newspaper, 
  Library,
  Users, 
  Award, 
  Globe, 
  Brain,
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Quote,
  Shield,
  Target,
  Lightbulb,
  Heart,
  Menu,
  X
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { number: "395+", label: "Constitutional Articles", description: "Simplified and explained" },
    { number: "10K+", label: "Active Learners", description: "Growing community" },
    { number: "50K+", label: "Quizzes Completed", description: "Interactive learning" },
    { number: "3", label: "Languages", description: "Hindi, English, Marathi" }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Simplified explanations of constitutional articles with interactive modules, quizzes, and games for better understanding.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Video,
      title: "Educational Videos",
      description: "Short animated videos that explain legal concepts through real-life examples and visual storytelling.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: MessageCircle,
      title: "AI-Powered Chatbot",
      description: "24/7 assistance for constitutional questions with real-time answers about legal provisions and concepts.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Library,
      title: "Comprehensive Library",
      description: "Extensive collection of legal resources, articles, books, and documents for all learning levels.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: Newspaper,
      title: "Legal News Updates",
      description: "Stay informed with current legal developments, court rulings, and constitutional reforms.",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Globe,
      title: "Multilingual Access",
      description: "Content available in Hindi, English, and Marathi to reach diverse audiences across India.",
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Know Your Rights",
      description: "Understand your fundamental rights and how to protect them"
    },
    {
      icon: Target,
      title: "Civic Engagement",
      description: "Become an informed citizen and participate actively in democracy"
    },
    {
      icon: Lightbulb,
      title: "Legal Awareness",
      description: "Stay updated on laws and constitutional provisions that affect you"
    },
    {
      icon: Heart,
      title: "Empower Communities",
      description: "Help bridge the legal literacy gap in rural and urban areas"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Law Student, Delhi University",
      content: "Nyaya Platform transformed how I understand constitutional law. The simplified explanations and interactive content made complex legal concepts accessible.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Rajesh Kumar",
      role: "Government Officer, Bihar",
      content: "As a civil servant, this platform helped me better understand constitutional provisions. The multilingual support is excellent for our diverse population.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Dr. Anita Desai",
      role: "Civics Teacher, Maharashtra",
      content: "I use Nyaya Platform to teach my students about constitutional rights. The visual content and quizzes make learning engaging and effective.",
      rating: 5,
      avatar: "AD"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Create Account",
      description: "Sign up for free and choose your preferred language for learning"
    },
    {
      step: "2", 
      title: "Start Learning",
      description: "Explore articles, watch videos, and interact with our AI chatbot"
    },
    {
      step: "3",
      title: "Take Quizzes",
      description: "Test your knowledge with interactive quizzes and earn certificates"
    },
    {
      step: "4",
      title: "Stay Updated",
      description: "Get latest legal news and continue your constitutional education journey"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-green-600 rounded-xl flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                  संविधान Learn
                </h1>
                <p className="text-xs text-slate-600">Nyaya Platform</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-800 transition-colors">Features</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-slate-800 transition-colors">How it Works</a>
              <a href="#testimonials" className="text-slate-600 hover:text-slate-800 transition-colors">Reviews</a>
              <a href="#about" className="text-slate-600 hover:text-slate-800 transition-colors">About</a>
              <button className="px-4 py-2 text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                Login
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-lg hover:from-orange-600 hover:to-green-700 transition-colors">
                Sign Up Free
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="space-y-4">
                <a href="#features" className="block text-slate-600 hover:text-slate-800">Features</a>
                <a href="#how-it-works" className="block text-slate-600 hover:text-slate-800">How it Works</a>
                <a href="#testimonials" className="block text-slate-600 hover:text-slate-800">Reviews</a>
                <a href="#about" className="block text-slate-600 hover:text-slate-800">About</a>
                <div className="space-y-2 pt-4">
                  <button className="w-full px-4 py-2 text-slate-700 border border-slate-300 rounded-lg">
                    Login
                  </button>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-lg">
                    Sign Up Free
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-orange-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-orange-500 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-green-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-orange-400 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-green-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Constitutional Literacy for Every Indian
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Master Your{' '}
              <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
                Constitutional Rights
              </span>{' '}
              & Duties
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn about the Indian Constitution through simplified explanations, interactive content, 
              and AI-powered assistance. Understand your rights, duties, and democratic framework.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-orange-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center group">
                Start Learning for Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-50 transition-colors flex items-center justify-center group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-slate-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Free to use
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Multilingual support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-slate-700 mb-1">{stat.label}</div>
                <div className="text-sm text-slate-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Constitutional Education
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our platform offers multiple ways to learn about the Indian Constitution, 
              making complex legal concepts accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200">
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why Constitutional Literacy Matters
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Understanding your constitutional rights and duties is essential for active citizenship. 
                Our platform empowers you with knowledge to participate meaningfully in democracy.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">{benefit.title}</h3>
                        <p className="text-slate-600">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-green-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Article 21</h3>
                    <p className="text-white/80">Right to Life and Personal Liberty</p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-sm text-white/90">
                    <strong>Simplified:</strong> Every person has the right to live with dignity and freedom. 
                    No one can take away this right except through fair legal procedures established by law.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-white/80">
                  <span>Interactive Example</span>
                  <span>1 of 395 Articles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How Nyaya Platform Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Start your constitutional education journey in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Our Learners Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join thousands of satisfied learners who have enhanced their constitutional knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="mb-6">
                  <Quote className="w-6 h-6 text-slate-300 mb-3" />
                  <p className="text-slate-700 italic leading-relaxed">"{testimonial.content}"</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Constitutional Learning Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of learners and become an informed citizen today. It's completely free!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-50 transition-colors">
                Get Started Free
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">संविधान Learn</h3>
                  <p className="text-slate-400 text-sm">Nyaya Platform</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Making constitutional education accessible to every Indian citizen through 
                interactive learning, multilingual content, and AI-powered assistance.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer">
                  <span className="text-xs">T</span>
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 cursor-pointer">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2025 Nyaya Platform. All rights reserved. Made with ❤️ for India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;