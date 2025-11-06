'use client';

import { Target, Users, Award, Zap, Heart, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const values = [
  {
    icon: Target,
    title: 'التميز في التعليم',
    description: 'نسعى لتقديم محتوى تعليمي عالي الجودة يلبي احتياجات المتعلمين'
  },
  {
    icon: Users,
    title: 'مجتمع متعاون',
    description: 'نبني مجتمعاً من المتعلمين والمدربين المتفاعلين'
  },
  {
    icon: Award,
    title: 'الجودة والاحترافية',
    description: 'نلتزم بأعلى معايير الجودة في كل ما نقدمه'
  },
  {
    icon: Zap,
    title: 'الابتكار المستمر',
    description: 'نواكب أحدث التقنيات والأساليب التعليمية'
  },
  {
    icon: Heart,
    title: 'الشغف بالتعليم',
    description: 'نؤمن بقوة التعليم في تغيير الحياة'
  },
  {
    icon: Globe,
    title: 'التعلم للجميع',
    description: 'نجعل التعليم متاحاً ومتاحاً للجميع'
  }
];

const team = [
  {
    name: 'أحمد محمد',
    role: 'المؤسس والرئيس التنفيذي',
    image: 'https://ui-avatars.com/api/?name=أحمد+محمد&background=2563eb&color=fff&size=200'
  },
  {
    name: 'سارة أحمد',
    role: 'مديرة المحتوى',
    image: 'https://ui-avatars.com/api/?name=سارة+أحمد&background=2563eb&color=fff&size=200'
  },
  {
    name: 'محمد علي',
    role: 'رئيس قسم التقنية',
    image: 'https://ui-avatars.com/api/?name=محمد+علي&background=2563eb&color=fff&size=200'
  },
  {
    name: 'فاطمة حسن',
    role: 'مديرة العلاقات',
    image: 'https://ui-avatars.com/api/?name=فاطمة+حسن&background=2563eb&color=fff&size=200'
  }
];

const stats = [
  { number: '50,000+', label: 'طالب نشط' },
  { number: '500+', label: 'دورة تدريبية' },
  { number: '100+', label: 'مدرب محترف' },
  { number: '95%', label: 'رضا الطلاب' }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Blaze Academy هي منصة تعليمية رائدة تهدف إلى تمكين الأفراد من تطوير مهاراتهم
            وتحقيق أهدافهم المهنية من خلال تقديم دورات تدريبية عالية الجودة
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                رؤيتنا ورسالتنا
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-blue-600">رؤيتنا:</strong> أن نكون المنصة التعليمية الأولى في المنطقة
                  العربية، ونساهم في بناء جيل من المحترفين المؤهلين في مختلف المجالات.
                </p>
                <p>
                  <strong className="text-blue-600">رسالتنا:</strong> نلتزم بتقديم تعليم عالي الجودة، سهل الوصول،
                  ومتاح للجميع. نسعى لتمكين المتعلمين من اكتساب المهارات التي يحتاجونها للنجاح
                  في عالم العمل المتغير باستمرار.
                </p>
                <p>
                  نؤمن بأن التعليم هو المفتاح الأساسي للتطور والنمو، ولذلك نعمل جاهدين على
                  توفير بيئة تعليمية محفزة وداعمة لكل متعلم.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              قيمنا الأساسية
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              المبادئ التي نؤمن بها وتوجه عملنا اليومي
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              فريقنا
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              تعرف على الأشخاص الذين يعملون بشغف لتحقيق رؤيتنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            انضم إلى مجتمعنا اليوم
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            ابدأ رحلتك التعليمية معنا واكتسب المهارات التي تحتاجها للنجاح
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#courses">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold shadow-lg">
                تصفح الدورات
              </button>
            </a>
            <a href="/signup">
              <button className="px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-semibold border-2 border-blue-500">
                إنشاء حساب مجاني
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}