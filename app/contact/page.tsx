'use client';

import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // سيتم إضافة منطق إرسال الرسالة لاحقاً
    console.log('Contact form:', formData);
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك! لا تتردد في التواصل معنا لأي استفسار أو دعم
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">البريد الإلكتروني</h3>
                <p className="text-gray-600 mb-3">راسلنا في أي وقت</p>
                <a href="mailto:info@blazeacademy.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                  info@blazeacademy.com
                </a>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">الهاتف</h3>
                <p className="text-gray-600 mb-3">متاح من 9 صباحاً - 6 مساءً</p>
                <a href="tel:+9641234567890" className="text-blue-600 hover:text-blue-700 font-semibold" dir="ltr">
                  +964 123 456 7890
                </a>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">العنوان</h3>
                <p className="text-gray-600 mb-3">زورنا في مكتبنا</p>
                <p className="text-gray-700">
                  شارع الجامعة<br />
                  بغداد، العراق
                </p>
              </div>

              {/* Card 4 - Working Hours */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">ساعات العمل</h3>
                <div className="space-y-2 text-blue-100">
                  <p>السبت - الخميس: 9:00 ص - 6:00 م</p>
                  <p>الجمعة: مغلق</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">أرسل لنا رسالة</h2>
                  <p className="text-gray-600">املأ النموذج وسنتواصل معك في أقرب وقت ممكن</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="أدخل اسمك الكامل"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      الموضوع *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">اختر الموضوع</option>
                      <option value="general">استفسار عام</option>
                      <option value="courses">استفسار عن الدورات</option>
                      <option value="technical">دعم تقني</option>
                      <option value="payment">الدفع والفواتير</option>
                      <option value="partnership">فرص الشراكة</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      الرسالة *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتب رسالتك هنا..."
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 space-x-reverse px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg hover:shadow-xl"
                  >
                    <Send className="h-5 w-5" />
                    <span>إرسال الرسالة</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-xl text-gray-600">
              إجابات سريعة على الأسئلة الأكثر شيوعاً
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'كيف يمكنني التسجيل في دورة؟',
                answer: 'يمكنك التسجيل في أي دورة بالنقر على زر "اشترك الآن" في صفحة تفاصيل الدورة، ثم اتباع خطوات الدفع البسيطة.'
              },
              {
                question: 'هل يمكنني الوصول إلى الدورات مدى الحياة؟',
                answer: 'نعم، بمجرد شراء الدورة، يمكنك الوصول إليها مدى الحياة مع جميع التحديثات المستقبلية.'
              },
              {
                question: 'هل تقدمون شهادات؟',
                answer: 'نعم، نقدم شهادة إتمام معتمدة عند إنهاء الدورة بنجاح.'
              },
              {
                question: 'ما هي طرق الدفع المتاحة؟',
                answer: 'نقبل الدفع عبر بطاقات الائتمان، PayPal، والتحويل البنكي.'
              },
              {
                question: 'هل يوجد ضمان استرداد الأموال؟',
                answer: 'نعم، نقدم ضمان استرداد الأموال خلال 30 يوماً من تاريخ الشراء.'
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition group"
              >
                <summary className="font-bold text-gray-900 cursor-pointer flex items-center justify-between">
                  <span>{faq.question}</span>
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-200 rounded-xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8629398947!2d44.366159!3d33.3128057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE4JzQ2LjEiTiA0NMKwMjEnNTguMiJF!5e0!3m2!1sen!2siq!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Blaze Academy Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}