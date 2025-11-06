'use client';

import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-blue-600 font-semibold">🔥 أكثر من 50,000 طالب</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              تعلم مهارات جديدة
              <span className="text-blue-600"> معنا</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              اكتشف آلاف الدورات التدريبية في البرمجة، التصميم، التسويق وأكثر. 
              ابدأ رحلتك التعليمية اليوم مع أفضل المدربين.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-2 space-x-reverse px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-orange-700 transition shadow-lg hover:shadow-xl">
                <span className="font-semibold">ابدأ التعلم الآن</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button className="flex items-center justify-center space-x-2 space-x-reverse px-8 py-4 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition border-2 border-gray-200">
                <Play className="h-5 w-5" />
                <span className="font-semibold">شاهد الفيديو</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">دورة تدريبية</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-gray-600">طالب نشط</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-gray-600">مدرب محترف</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                alt="Students learning"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Play className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">12K+</div>
                  <div className="text-gray-600">فيديو تعليمي</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}