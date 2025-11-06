'use client';

import { Star, Clock, Users, BookOpen, CheckCircle, PlayCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link'; 

const courseModules = [
  {
    id: '1',
    title: 'المقدمة والأساسيات',
    lessons: [
      { id: '1-1', title: 'مرحباً بك في كورس Meta', duration: '5 دقائق', isCompleted: false },
      { id: '1-2', title: 'نظرة عامة على منصات Meta', duration: '15 دقيقة', isCompleted: false },
      { id: '1-3', title: 'إنشاء حساب احترافي', duration: '20 دقيقة', isCompleted: false },
    ]
  },
  {
    id: '2',
    title: 'استراتيجيات التسويق على Facebook',
    lessons: [
      { id: '2-1', title: 'فهم خوارزمية Facebook', duration: '25 دقيقة', isCompleted: false },
      { id: '2-2', title: 'إنشاء محتوى جذاب', duration: '30 دقيقة', isCompleted: false },
      { id: '2-3', title: 'إدارة Facebook Ads', duration: '40 دقيقة', isCompleted: false },
      { id: '2-4', title: 'تحليل الأداء والنتائج', duration: '35 دقيقة', isCompleted: false },
    ]
  },
  {
    id: '3',
    title: 'التسويق عبر Instagram',
    lessons: [
      { id: '3-1', title: 'بناء علامة تجارية على Instagram', duration: '30 دقيقة', isCompleted: false },
      { id: '3-2', title: 'استخدام Instagram Stories بفعالية', duration: '25 دقيقة', isCompleted: false },
      { id: '3-3', title: 'Instagram Reels - الدليل الشامل', duration: '35 دقيقة', isCompleted: false },
      { id: '3-4', title: 'التسويق بالمؤثرين', duration: '30 دقيقة', isCompleted: false },
    ]
  },
  {
    id: '4',
    title: 'أدوات Meta للأعمال',
    lessons: [
      { id: '4-1', title: 'Meta Business Suite', duration: '20 دقيقة', isCompleted: false },
      { id: '4-2', title: 'Facebook Pixel وتتبع التحويلات', duration: '45 دقيقة', isCompleted: false },
      { id: '4-3', title: 'Meta Analytics المتقدم', duration: '40 دقيقة', isCompleted: false },
    ]
  }
];

export default function CoursePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Course Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-6 items-start">
            {/* صورة الكورس - أصغر */}
            <div className="md:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Meta Course"
                className="rounded-xl shadow-2xl w-full h-64 md:h-80 object-cover"
              />
            </div>

            {/* معلومات الكورس */}
            <div className="md:col-span-3 space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-500 rounded-full text-sm font-semibold">
                تسويق رقمي
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                كورس Meta الشامل - دليلك الكامل للنجاح
              </h1>
              <p className="text-base md:text-lg text-blue-100">
                تعلم كل ما تحتاجه عن Meta (Facebook & Instagram) من الصفر حتى الاحتراف
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-blue-200">(2,350 تقييم)</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Users className="h-5 w-5" />
                  <span>15,420 طالب</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Clock className="h-5 w-5" />
                  <span>40 ساعة</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 space-x-reverse text-sm">
                <BookOpen className="h-5 w-5" />
                <span>المدرب: فريق Blaze Academy</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold shadow-lg text-sm md:text-base">
                  اشترك الآن - $99.99
                </button>
                <button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-semibold border-2 border-blue-500 text-sm md:text-base">
                  معاينة مجانية
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* What You'll Learn */}
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">ماذا ستتعلم</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'إتقان استراتيجيات التسويق على Facebook و Instagram',
                    'إنشاء وإدارة حملات إعلانية ناجحة',
                    'فهم وتحليل البيانات والإحصائيات',
                    'بناء علامة تجارية قوية على Meta',
                    'استخدام أدوات Meta Business بشكل احترافي',
                    'تطبيق أفضل الممارسات في التسويق الرقمي',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 space-x-reverse">
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Content Modules */}
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">محتوى الكورس</h2>
                <div className="space-y-4">
                  {courseModules.map((module) => (
                    <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
                        <h3 className="font-bold text-gray-900 text-sm md:text-base">{module.title}</h3>
                        <span className="text-xs md:text-sm text-gray-600">{module.lessons.length} دروس</span>
                      </div>
                      <div className="divide-y divide-gray-100">
                        {module.lessons.map((lesson) => (
                            <Link href={`/watch/${lesson.id}`} key={lesson.id}>
                                <div className="px-4 md:px-6 py-3 md:py-4 hover:bg-gray-50 transition flex items-center justify-between gap-3 cursor-pointer">
                                <div className="flex items-center space-x-2 md:space-x-3 space-x-reverse flex-1 min-w-0">
                                    <PlayCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm md:text-base truncate hover:text-blue-600 transition">{lesson.title}</span>
                                </div>
                                <span className="text-xs md:text-sm text-gray-500 flex-shrink-0">{lesson.duration}</span>
                                </div>
                            </Link>
                            ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">المتطلبات</h2>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3 space-x-reverse text-sm md:text-base text-gray-700">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>لا يوجد خبرة سابقة مطلوبة</span>
                  </li>
                  <li className="flex items-start space-x-3 space-x-reverse text-sm md:text-base text-gray-700">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>حساب Facebook و Instagram</span>
                  </li>
                  <li className="flex items-start space-x-3 space-x-reverse text-sm md:text-base text-gray-700">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>جهاز كمبيوتر أو هاتف ذكي مع اتصال بالإنترنت</span>
                  </li>
                  <li className="flex items-start space-x-3 space-x-reverse text-sm md:text-base text-gray-700">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>الرغبة في التعلم والتطبيق العملي</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 lg:sticky lg:top-24 space-y-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900">$99.99</div>
                  <div className="text-gray-500 line-through">$199.99</div>
                  <div className="text-green-600 font-semibold">خصم 50%</div>
                </div>

                <button className="w-full py-3 md:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg text-sm md:text-base">
                  اشترك الآن
                </button>

                <div className="border-t border-gray-200 pt-6 space-y-3 md:space-y-4">
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-600">المدة</span>
                    <span className="font-semibold text-gray-900">40 ساعة</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-600">عدد الدروس</span>
                    <span className="font-semibold text-gray-900">150+ درس</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-600">المستوى</span>
                    <span className="font-semibold text-gray-900">جميع المستويات</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-600">اللغة</span>
                    <span className="font-semibold text-gray-900">العربية</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-600">الوصول</span>
                    <span className="font-semibold text-gray-900">مدى الحياة</span>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm">
                    <span className="text-gray-600">الشهادة</span>
                    <span className="font-semibold text-gray-900">نعم</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm md:text-base">يتضمن هذا الكورس:</h3>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>40 ساعة فيديو عند الطلب</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>ملفات وموارد قابلة للتحميل</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>وصول كامل مدى الحياة</span>
                    </li>
                    <li className="flex items-center space-x-2 space-x-reverse">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>شهادة إتمام</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}