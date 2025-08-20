import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-green-500">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Master Your Constitutional Knowledge?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of learners and start your journey to understanding the Indian Constitution today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-slate-50 font-semibold px-8 py-3 rounded-lg transition-colors">
              Start Learning for Free
            </button>
            <button className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg transition-colors">
              Explore Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;