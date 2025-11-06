'use client';

import { Book, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Book className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-white">Blaze Academy</span>
            </div>
            <p className="text-gray-400">
              منصة تعليمية رائدة تقدم أفضل الدورات التدريبية في مختلف المجالات لمساعدتك على تحقيق أهدافك المهنية.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="hover:text-blue-600 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
            <div>
            <h3 className="text-white font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
                <li>
                <a href="/" className="hover:text-blue-600 transition">الرئيسية</a>
                </li>
                <li>
                <a href="/#courses" className="hover:text-blue-600 transition">الدورات</a>
                </li>
                <li>
                <a href="#" className="hover:text-blue-600 transition">المدربون</a>
                </li>
                <li>
                <a href="/about" className="hover:text-blue-600 transition">من نحن</a>
                </li>
                <li>
                <a href="/contact" className="hover:text-blue-600 transition">اتصل بنا</a>
                </li>
            </ul>
            </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">التصنيفات</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600 transition">البرمجة</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">التصميم</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">التسويق</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">الأعمال</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">التطوير الشخصي</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 space-x-reverse">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>info@blazeacademy.com</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <Phone className="h-5 w-5 text-blue-600" />
                <span dir="ltr">+964 123 456 789</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>بغداد، العراق</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Blaze Academy. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}