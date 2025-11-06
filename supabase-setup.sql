-- ===================================
-- Blaze Academy Database Setup
-- إعداد قاعدة بيانات Blaze Academy
-- ===================================

-- 1. جدول الملفات الشخصية | Profiles Table
-- =============================================
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- تفعيل Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- سياسات الأمان للملفات الشخصية
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- 2. جدول الدورات | Courses Table
-- =============================================
CREATE TABLE IF NOT EXISTS courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  instructor TEXT NOT NULL,
  duration TEXT,
  level TEXT DEFAULT 'مبتدئ',
  image TEXT,
  price DECIMAL(10,2) DEFAULT 0.00,
  rating DECIMAL(3,2) DEFAULT 0.00,
  students INTEGER DEFAULT 0,
  category TEXT,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- الجميع يمكنهم رؤية الدورات المنشورة
CREATE POLICY "Anyone can view published courses"
  ON courses FOR SELECT
  USING (is_published = true);

-- 3. جدول الأقسام | Sections Table
-- =============================================
CREATE TABLE IF NOT EXISTS sections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE sections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view sections of published courses"
  ON sections FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM courses
      WHERE courses.id = sections.course_id
      AND courses.is_published = true
    )
  );

-- 4. جدول الدروس | Lessons Table
-- =============================================
CREATE TABLE IF NOT EXISTS lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section_id UUID REFERENCES sections(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT,
  duration INTEGER, -- بالثواني
  order_index INTEGER NOT NULL,
  is_free BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view lessons of published courses"
  ON lessons FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM sections
      JOIN courses ON courses.id = sections.course_id
      WHERE sections.id = lessons.section_id
      AND courses.is_published = true
    )
  );

-- 5. جدول مرفقات الدروس | Lesson Attachments Table
-- =============================================
CREATE TABLE IF NOT EXISTS lesson_attachments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT, -- pdf, zip, doc, etc.
  file_size INTEGER, -- بالبايتات
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE lesson_attachments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view attachments of published courses"
  ON lesson_attachments FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM lessons
      JOIN sections ON sections.id = lessons.section_id
      JOIN courses ON courses.id = sections.course_id
      WHERE lessons.id = lesson_attachments.lesson_id
      AND courses.is_published = true
    )
  );

-- 6. جدول تقدم المستخدم | User Progress Table
-- =============================================
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT false,
  completed_at TIMESTAMP WITH TIME ZONE,
  watch_time INTEGER DEFAULT 0, -- بالثواني
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own progress"
  ON user_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON user_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- 7. جدول الاشتراكات | Subscriptions Table
-- =============================================
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'active', -- active, expired, cancelled
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE,
  payment_amount DECIMAL(10,2),
  payment_method TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own subscriptions"
  ON subscriptions FOR SELECT
  USING (auth.uid() = user_id);

-- 8. جدول الكوبونات | Coupons Table
-- =============================================
CREATE TABLE IF NOT EXISTS coupons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  discount_type TEXT DEFAULT 'percentage', -- percentage, fixed
  discount_value DECIMAL(10,2) NOT NULL,
  max_uses INTEGER,
  current_uses INTEGER DEFAULT 0,
  expires_at TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE coupons ENABLE ROW LEVEL SECURITY;

-- الجميع يمكنهم قراءة الكوبونات النشطة
CREATE POLICY "Anyone can view active coupons"
  ON coupons FOR SELECT
  USING (is_active = true AND (expires_at IS NULL OR expires_at > NOW()));

-- 9. جدول استخدامات الكوبونات | Coupon Usage Table
-- =============================================
CREATE TABLE IF NOT EXISTS coupon_usage (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  coupon_id UUID REFERENCES coupons(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  subscription_id UUID REFERENCES subscriptions(id) ON DELETE CASCADE,
  used_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(coupon_id, user_id, subscription_id)
);

ALTER TABLE coupon_usage ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own coupon usage"
  ON coupon_usage FOR SELECT
  USING (auth.uid() = user_id);

-- ===================================
-- إنشاء Indexes للأداء | Create Indexes for Performance
-- ===================================

CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);
CREATE INDEX IF NOT EXISTS idx_sections_course_id ON sections(course_id);
CREATE INDEX IF NOT EXISTS idx_lessons_section_id ON lessons(section_id);
CREATE INDEX IF NOT EXISTS idx_lesson_attachments_lesson_id ON lesson_attachments(lesson_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_lesson_id ON user_progress(lesson_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_course_id ON subscriptions(course_id);
CREATE INDEX IF NOT EXISTS idx_coupons_code ON coupons(code);

-- ===================================
-- إضافة بيانات تجريبية | Insert Sample Data
-- ===================================

-- إضافة دورة تجريبية (ميتا ماركتنج)
INSERT INTO courses (id, title, description, instructor, duration, level, price, rating, students, category, is_published)
VALUES (
  'c1e8f9a0-1234-5678-90ab-cdef12345678',
  'ميتا كما لم تراها من قبل',
  'دورة شاملة لتعلم التسويق عبر منصات ميتا (فيسبوك وإنستغرام) من الصفر إلى الاحتراف',
  'أحمد محمد',
  '40 ساعة',
  'مبتدئ',
  299.00,
  4.8,
  1250,
  'تسويق',
  true
)
ON CONFLICT (id) DO NOTHING;

-- إضافة قسم تجريبي
INSERT INTO sections (id, course_id, title, description, order_index)
VALUES (
  'a1e8f9a0-1234-5678-90ab-cdef12345678',
  'c1e8f9a0-1234-5678-90ab-cdef12345678',
  'مقدمة في التسويق الرقمي',
  'تعرف على أساسيات التسويق الرقمي ومنصات ميتا',
  1
)
ON CONFLICT (id) DO NOTHING;

-- إضافة دروس تجريبية
INSERT INTO lessons (section_id, title, description, duration, order_index, is_free)
VALUES
  (
    'a1e8f9a0-1234-5678-90ab-cdef12345678',
    'مرحباً بك في دورة ميتا',
    'نظرة عامة على محتوى الدورة وما ستتعلمه',
    600,
    1,
    true
  ),
  (
    'a1e8f9a0-1234-5678-90ab-cdef12345678',
    'ما هو التسويق الرقمي؟',
    'فهم مفهوم التسويق الرقمي وأهميته',
    900,
    2,
    true
  ),
  (
    'a1e8f9a0-1234-5678-90ab-cdef12345678',
    'منصات ميتا: فيسبوك وإنستغرام',
    'التعرف على منصات ميتا وإمكانياتها التسويقية',
    1200,
    3,
    false
  )
ON CONFLICT DO NOTHING;

-- ===================================
-- Functions | الدوال
-- ===================================

-- دالة لتحديث updated_at تلقائياً
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- تطبيق الدالة على الجداول
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON courses
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_sections_updated_at BEFORE UPDATE ON sections
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_lessons_updated_at BEFORE UPDATE ON lessons
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_progress_updated_at BEFORE UPDATE ON user_progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ===================================
-- تم إنشاء قاعدة البيانات بنجاح! ✅
-- Database Setup Complete! ✅
-- ===================================
