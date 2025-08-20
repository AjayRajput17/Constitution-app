import React from 'react';
import { BookOpen, Users, Award, Play, ArrowRight, CheckCircle } from "lucide-react";

const stats = [
  { label: "Articles Simplified", value: "395+", icon: BookOpen },
  { label: "Active Learners", value: "10K+", icon: Users },
  { label: "Quizzes Completed", value: "50K+", icon: Award },
];

const features = [
  "Plain language explanations of constitutional articles",
  "Interactive quizzes and scenario-based learning",
  "Comprehensive legal resource library",
  "Multilingual support (Hindi, English, Marathi)",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-white/50 to-green-500/10" />
      
      <div className="max-w-7xl relative mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-white rounded-full mr-2" />
                Constitutional Literacy for All
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-800">Understand Your</span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                  Constitution
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-2xl">
                Learn about your fundamental rights, duties, and the democratic framework 
                of India through simplified explanations, interactive quizzes, and expert guidance.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-slate-600">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white px-8 py-3 rounded-lg font-semibold group transition-all duration-300 flex items-center justify-center">
                Start Learning
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-lg font-semibold group transition-all duration-300 flex items-center justify-center">
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="font-bold text-2xl text-slate-800">{stat.value}</div>
                    <div className="text-xs text-slate-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Demo Card */}
          <div className="lg:flex justify-center hidden">
            <div className="p-8 max-w-sm shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-slate-800">Article 21</h3>
                  <p className="text-sm text-slate-600">Right to Life and Personal Liberty</p>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-sm text-slate-700">
                      <strong>Simplified:</strong> Every person has the right to live with dignity 
                      and freedom, and no one can take away this right except through 
                      fair legal procedures.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Progress</span>
                    <span className="font-medium text-slate-800">Article 1 of 395</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-500 to-green-500 h-2 rounded-full w-[2%]" />
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Continue Learning
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;