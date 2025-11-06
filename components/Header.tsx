'use client';

import { Search, Menu, X, Book } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Book className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Blaze Academy</span>
          </div>

          {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition">الرئيسية</a>
            <a href="/#courses" className="text-gray-700 hover:text-blue-600 transition">الدورات</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">المدربون</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition">من نحن</a>
            </nav>

          {/* Search and Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن دورة..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
                <Link href="/login">
                <button className="px-4 py-2 text-blue-600 hover:text-blue-700 transition">
                    تسجيل الدخول
                </button>
                </Link>
                <Link href="/signup">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    إنشاء حساب
                </button>
                </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
                <a href="/" className="block text-gray-700 hover:text-blue-600">الرئيسية</a>
                <a href="/#courses" className="block text-gray-700 hover:text-blue-600">الدورات</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">المدربون</a>
                <a href="/about" className="block text-gray-700 hover:text-blue-600">من نحن</a>
            <div className="pt-4 space-y-2">
            <Link href="/login">
                <button className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-lg">
                تسجيل الدخول
                </button>
            </Link>
            <Link href="/signup">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg">
                إنشاء حساب
                </button>
            </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}