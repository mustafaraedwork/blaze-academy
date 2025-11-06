'use client';

import CourseCard from './CourseCard';
import { Course } from '@/types';

const metaCourse: Course = {
  id: '1',
  title: 'كورس Meta الشامل - دليلك الكامل للنجاح',
  description: 'تعلم كل ما تحتاجه عن Meta (Facebook & Instagram) من الصفر حتى الاحتراف. استراتيجيات متقدمة، أدوات احترافية، وتطبيقات عملية لتحقيق أهدافك.',
  instructor: 'فريق Blaze Academy',
  duration: '40 ساعة',
  level: 'beginner',
  image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80',
  price: 99.99,
  rating: 4.9,
  students: 15420,
  category: 'تسويق رقمي'
};

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            كورسنا <span className="text-blue-600">الحصري</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            الكورس الأشمل والأكثر تفصيلاً لتعلم Meta من الصفر حتى الاحتراف
          </p>
        </div>

        {/* Single Course - Centered */}
        <div className="max-w-md mx-auto">
          <CourseCard course={metaCourse} />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-lg text-gray-600">
            🎯 ابدأ رحلتك الآن واحصل على شهادة معتمدة
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="text-2xl font-bold text-blue-600">40+</span>
              <span className="text-gray-600 mr-2">ساعة محتوى</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="text-2xl font-bold text-blue-600">150+</span>
              <span className="text-gray-600 mr-2">درس عملي</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <span className="text-2xl font-bold text-blue-600">∞</span>
              <span className="text-gray-600 mr-2">وصول مدى الحياة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}