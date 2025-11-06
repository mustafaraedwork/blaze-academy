'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import { CheckCircle, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, use } from 'react';

const courseModules = [
  {
    id: '1',
    title: 'المقدمة والأساسيات',
    lessons: [
      { id: '1-1', title: 'مرحباً بك في كورس Meta', duration: '5 دقائق', isCompleted: true, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: '1-2', title: 'نظرة عامة على منصات Meta', duration: '15 دقيقة', isCompleted: true, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: '1-3', title: 'إنشاء حساب احترافي', duration: '20 دقيقة', isCompleted: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ]
  },
  {
    id: '2',
    title: 'استراتيجيات التسويق على Facebook',
    lessons: [
      { id: '2-1', title: 'فهم خوارزمية Facebook', duration: '25 دقيقة', isCompleted: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: '2-2', title: 'إنشاء محتوى جذاب', duration: '30 دقيقة', isCompleted: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: '2-3', title: 'إدارة Facebook Ads', duration: '40 دقيقة', isCompleted: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: '2-4', title: 'تحليل الأداء والنتائج', duration: '35 دقيقة', isCompleted: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ]
  },
  {
    id: '3',
    title: 'التسويق عبر Instagram',
    lessons: [
      { id: '3-1', title: 'بناء علامة تجارية على Instagram', duration: '30 دقيقة', isCompleted: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: '3-2', title: 'استخدام Instagram Stories بفعالية', duration: '25 دقيقة', isCompleted: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: '3-3', title: 'Instagram Reels - الدليل الشامل', duration: '35 دقيقة', isCompleted: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: '3-4', title: 'التسويق بالمؤثرين', duration: '30 دقيقة', isCompleted: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ]
  },
  {
    id: '4',
    title: 'أدوات Meta للأعمال',
    lessons: [
      { id: '4-1', title: 'Meta Business Suite', duration: '20 دقيقة', isCompleted: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: '4-2', title: 'Facebook Pixel وتتبع التحويلات', duration: '45 دقيقة', isCompleted: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { id: '4-3', title: 'Meta Analytics المتقدم', duration: '40 دقيقة', isCompleted: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ]
  }
];

export default function WatchPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const resolvedParams = use(params);
  const [selectedLessonId, setSelectedLessonId] = useState(resolvedParams.lessonId);

  // Find current lesson
  let currentLesson: any = null;
  let currentModule: any = null;
  
  for (const module of courseModules) {
    const lesson = module.lessons.find(l => l.id === selectedLessonId);
    if (lesson) {
      currentLesson = lesson;
      currentModule = module;
      break;
    }
  }

  // Get all lessons for navigation
  const allLessons = courseModules.flatMap(m => m.lessons);
  const currentIndex = allLessons.findIndex(l => l.id === selectedLessonId);
  const previousLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  if (!currentLesson) {
    return (
      <ProtectedRoute>
        <main className="min-h-screen bg-gray-900 text-white">
          <Header />
          <div className="flex items-center justify-center h-screen">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">الدرس غير موجود</h1>
              <p className="text-gray-400">عذراً، لم نتمكن من العثور على الدرس المطلوب</p>
            </div>
          </div>
        </main>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-gray-900">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Video Player */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video */}
              <div className="bg-black rounded-xl overflow-hidden aspect-video">
                <iframe
                  src={currentLesson.videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  title={currentLesson.title}
                />
              </div>

              {/* Lesson Info */}
              <div className="bg-gray-800 rounded-xl p-6 text-white">
                <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-400 mb-2">
                  <span>{currentModule.title}</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-4">{currentLesson.title}</h1>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <PlayCircle className="h-5 w-5" />
                    <span>{currentLesson.duration}</span>
                  </div>
                  {currentLesson.isCompleted && (
                    <div className="flex items-center space-x-2 space-x-reverse text-green-400">
                      <CheckCircle className="h-5 w-5" />
                      <span>مكتمل</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between gap-4">
                {previousLesson ? (
                  <button
                    onClick={() => setSelectedLessonId(previousLesson.id)}
                    className="flex items-center space-x-2 space-x-reverse px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                  >
                    <ChevronRight className="h-5 w-5" />
                    <span>الدرس السابق</span>
                  </button>
                ) : (
                  <div></div>
                )}
                
                {nextLesson ? (
                  <button
                    onClick={() => setSelectedLessonId(nextLesson.id)}
                    className="flex items-center space-x-2 space-x-reverse px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <span>الدرس التالي</span>
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                ) : (
                  <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    إنهاء الكورس
                  </button>
                )}
              </div>

              {/* Description */}
              <div className="bg-gray-800 rounded-xl p-6 text-white">
                <h2 className="text-xl font-bold mb-4">وصف الدرس</h2>
                <p className="text-gray-300 leading-relaxed">
                  في هذا الدرس، ستتعلم المفاهيم الأساسية والمتقدمة التي تحتاجها لإتقان هذا الموضوع. 
                  سنغطي جميع الجوانب المهمة مع أمثلة عملية وتطبيقات واقعية لضمان فهمك الكامل للمحتوى.
                </p>
              </div>
            </div>

            {/* Sidebar - Course Content */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-xl overflow-hidden lg:sticky lg:top-24">
                <div className="p-6 border-b border-gray-700">
                  <h2 className="text-xl font-bold text-white">محتوى الكورس</h2>
                  <p className="text-sm text-gray-400 mt-2">
                    {allLessons.filter(l => l.isCompleted).length} من {allLessons.length} دروس مكتملة
                  </p>
                </div>

                <div className="max-h-[600px] overflow-y-auto">
                  {courseModules.map((module) => (
                    <div key={module.id} className="border-b border-gray-700">
                      <div className="px-6 py-4 bg-gray-750">
                        <h3 className="font-bold text-white text-sm">{module.title}</h3>
                        <p className="text-xs text-gray-400 mt-1">{module.lessons.length} دروس</p>
                      </div>
                      <div className="divide-y divide-gray-700">
                        {module.lessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => setSelectedLessonId(lesson.id)}
                            className={`w-full text-right px-6 py-4 hover:bg-gray-700 transition ${
                              selectedLessonId === lesson.id ? 'bg-gray-700' : ''
                            }`}
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center space-x-3 space-x-reverse flex-1 min-w-0">
                                {lesson.isCompleted ? (
                                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                                ) : (
                                  <PlayCircle className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                )}
                                <span className={`text-sm truncate ${
                                  selectedLessonId === lesson.id ? 'text-blue-400 font-semibold' : 'text-gray-300'
                                }`}>
                                  {lesson.title}
                                </span>
                              </div>
                              <span className="text-xs text-gray-500 flex-shrink-0">{lesson.duration}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </ProtectedRoute>
  );
}