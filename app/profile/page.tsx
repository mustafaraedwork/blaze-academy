'use client';
import { User, Mail, Calendar, Award, BookOpen, Clock, Settings, LogOut } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const enrolledCourses = [
  {
    id: '1',
    title: 'كورس Meta الشامل',
    progress: 35,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    lessonsCompleted: 8,
    totalLessons: 23,
    lastAccessed: '2025-11-04'
  }
];

const achievements = [
  { id: '1', title: 'أول درس', icon: '🎯', unlocked: true },
  { id: '2', title: 'أسبوع متواصل', icon: '🔥', unlocked: true },
  { id: '3', title: 'نصف الطريق', icon: '⭐', unlocked: false },
  { id: '4', title: 'إتمام كورس', icon: '🏆', unlocked: false },
];

export default function ProfilePage() {
  const user = {
    name: 'أحمد محمد',
    email: 'ahmed@example.com',
    joinDate: '2025-01-15',
    avatar: 'https://ui-avatars.com/api/?name=أحمد+محمد&background=2563eb&color=fff&size=200'
  };

  return (
      <main className="min-h-screen bg-gray-50">
        <Header />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-100"
                />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{user.name}</h2>
                <p className="text-gray-600 mb-4">{user.email}</p>
                
                <div className="flex items-center justify-center space-x-2 space-x-reverse text-sm text-gray-500 mb-6">
                  <Calendar className="h-4 w-4" />
                  <span>انضم في {new Date(user.joinDate).toLocaleDateString('ar-EG')}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-600">1</div>
                    <div className="text-xs text-gray-600">دورة مسجلة</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-600">8</div>
                    <div className="text-xs text-gray-600">دروس مكتملة</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <button className="w-full flex items-center justify-center space-x-2 space-x-reverse px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    <Settings className="h-5 w-5" />
                    <span>تعديل الملف الشخصي</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 space-x-reverse px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                    <LogOut className="h-5 w-5" />
                    <span>تسجيل الخروج</span>
                  </button>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2 space-x-reverse">
                  <Award className="h-6 w-6 text-blue-600" />
                  <span>الإنجازات</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-lg text-center ${
                        achievement.unlocked
                          ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200'
                          : 'bg-gray-100 opacity-50'
                      }`}
                    >
                      <div className="text-3xl mb-2">{achievement.icon}</div>
                      <div className="text-xs font-semibold text-gray-700">{achievement.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">1</div>
                  <div className="text-gray-600">دورة نشطة</div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">2</div>
                  <div className="text-gray-600">إنجاز محقق</div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
                  <div className="text-gray-600">ساعات تعلم</div>
                </div>
              </div>

              {/* Enrolled Courses */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">دوراتي</h3>
                
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                    <div className="flex flex-col md:flex-row gap-6">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full md:w-48 h-32 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1 space-y-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h4>
                          <p className="text-sm text-gray-600">
                            آخر وصول: {new Date(course.lastAccessed).toLocaleDateString('ar-EG')}
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">التقدم</span>
                            <span className="font-semibold text-blue-600">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">
                            {course.lessonsCompleted} من {course.totalLessons} دروس مكتملة
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <Link href={`/courses/${course.id}`} className="flex-1">
                            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-semibold">
                              متابعة التعلم
                            </button>
                          </Link>
                          <Link href={`/courses/${course.id}`}>
                            <button className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm font-semibold">
                              عرض التفاصيل
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {enrolledCourses.length === 0 && (
                  <div className="text-center py-12">
                    <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">لم تسجل في أي دورة بعد</p>
                    <Link href="/#courses">
                      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                        تصفح الدورات
                      </button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Learning Activity */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">نشاط التعلم</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 space-x-reverse pb-4 border-b">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold">أكملت درس "نظرة عامة على منصات Meta"</p>
                      <p className="text-sm text-gray-500">منذ يومين</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 space-x-reverse pb-4 border-b">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold">حصلت على إنجاز "أسبوع متواصل"</p>
                      <p className="text-sm text-gray-500">منذ 3 أيام</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold">سجلت في كورس Meta الشامل</p>
                      <p className="text-sm text-gray-500">منذ أسبوع</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
  );
}