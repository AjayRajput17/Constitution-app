import React from 'react';
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Law Student",
    content: "This platform made understanding constitutional law so much easier. The simplified explanations are brilliant!",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    role: "Civil Servant",
    content: "As a government officer, this helped me understand the constitutional framework better. Highly recommended!",
    rating: 5
  },
  {
    name: "Anita Desai",
    role: "Teacher",
    content: "I use this platform to teach my students about civics. The multilingual support is fantastic!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            What Our Learners Say
          </h2>
          <p className="text-lg text-slate-600">
            Join thousands of satisfied learners who have mastered constitutional knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 border border-slate-200 bg-white rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="mb-4">
                <Quote className="w-6 h-6 text-slate-300 mb-2" />
                <p className="text-slate-600 italic">"{testimonial.content}"</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;