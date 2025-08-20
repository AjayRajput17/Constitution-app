import React from 'react';
import { ChevronRight } from "lucide-react";

const constitutionalParts = [
  {
    title: "Fundamental Rights",
    description: "Learn about your basic rights as guaranteed by the Constitution",
    articles: "Articles 12-35",
    color: "bg-blue-500"
  },
  {
    title: "Directive Principles",
    description: "Understand the guidelines for state policy and governance",
    articles: "Articles 36-51",
    color: "bg-green-500"
  },
  {
    title: "Fundamental Duties",
    description: "Discover your responsibilities as a citizen of India",
    articles: "Article 51A",
    color: "bg-orange-500"
  },
  {
    title: "Union & States",
    description: "Explore the federal structure and power distribution",
    articles: "Articles 52-151",
    color: "bg-purple-500"
  }
];

const ConstitutionalPartsSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Explore Constitutional Parts
          </h2>
          <p className="text-lg text-slate-600">
            Dive deep into the key sections of the Indian Constitution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {constitutionalParts.map((part, index) => (
            <div key={index} className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-slate-200 bg-white rounded-lg">
              <div className={`w-full h-2 ${part.color} rounded-full mb-4`} />
              <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
                {part.title}
              </h3>
              <p className="text-sm text-slate-600 mb-3">{part.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  {part.articles}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConstitutionalPartsSection;