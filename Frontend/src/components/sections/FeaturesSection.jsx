import React from 'react';
import { BookOpen, Globe, Brain, Scale, Users, Shield } from "lucide-react";

const keyFeatures = [
  {
    icon: BookOpen,
    title: "Simplified Learning",
    description: "Complex constitutional concepts explained in easy-to-understand language for everyone."
  },
  {
    icon: Brain,
    title: "Interactive Quizzes",
    description: "Test your knowledge with engaging quizzes and scenario-based questions."
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Learn in Hindi, English, or Marathi - your preferred language."
  },
  {
    icon: Scale,
    title: "Legal Resources",
    description: "Access comprehensive legal documents, amendments, and case studies."
  },
  {
    icon: Users,
    title: "Community Learning",
    description: "Join thousands of learners in understanding our democratic framework."
  },
  {
    icon: Shield,
    title: "Rights & Duties",
    description: "Understand your fundamental rights and duties as an Indian citizen."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Why Choose संविधान Learn?
          </h2>
          <p className="text-lg text-slate-600">
            We make constitutional learning accessible, engaging, and meaningful for every Indian citizen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {keyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-6 hover:shadow-lg transition-shadow border border-slate-200 bg-white rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{feature.title}</h3>
                </div>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;