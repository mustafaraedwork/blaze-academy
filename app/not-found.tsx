import Link from 'next/link';
import { Home, Search, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <div className="text-6xl mb-4">🔍</div>
        </div>

        {/* Content */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          عذراً! الصفحة غير موجودة
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو لم تعد موجودة
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="flex items-center justify-center space-x-2 space-x-reverse px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg hover:shadow-xl">
              <Home className="h-5 w-5" />
              <span>العودة للرئيسية</span>
            </button>
          </Link>
          
          <Link href="/#courses">
            <button className="flex items-center justify-center space-x-2 space-x-reverse px-8 py-4 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold shadow-lg border-2 border-gray-200">
              <Search className="h-5 w-5" />
              <span>تصفح الدورات</span>
            </button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <p className="text-gray-600 mb-4">أو جرب أحد هذه الروابط:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1 space-x-reverse">
              <span>من نحن</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1 space-x-reverse">
              <span>اتصل بنا</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1 space-x-reverse">
              <span>تسجيل الدخول</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}