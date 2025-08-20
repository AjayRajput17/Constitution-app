import React from 'react';
import { Scale, BookOpen, Library, GraduationCap, Video, Newspaper, MessageCircle } from "lucide-react";

const navigation = [
  { name: "Learn", href: "/learn", icon: BookOpen },
  { name: "Library", href: "/library", icon: Library },
  { name: "Quiz", href: "/quiz", icon: GraduationCap },
  { name: "Videos", href: "/videos", icon: Video },
  { name: "News", href: "/news", icon: Newspaper },
  { name: "Chat", href: "/chat", icon: MessageCircle },
];

const Header = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-green-500 rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">संविधान Learn</span>
          </div>

          {/* Centered Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors group"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Login Button */}
          <div className="flex items-center">
            <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;