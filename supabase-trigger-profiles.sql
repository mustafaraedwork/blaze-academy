-- ===================================
-- Auto-create Profile Trigger
-- إنشاء Profile تلقائياً عند التسجيل
-- ===================================

-- 1. حذف الـ trigger القديم إن وُجد
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- 2. إنشاء function لإنشاء profile
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email, created_at, updated_at)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', 'User'),
    NEW.email,
    NEW.created_at,
    NOW()
  );
  RETURN NEW;
END;
$$;

-- 3. إنشاء trigger على auth.users
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ===================================
-- إنشاء profiles للمستخدمين الحاليين
-- ===================================

-- إضافة profiles للمستخدمين الذين ليس لهم profile
INSERT INTO public.profiles (id, name, email, created_at, updated_at)
SELECT
  au.id,
  COALESCE(au.raw_user_meta_data->>'name', 'User'),
  au.email,
  au.created_at,
  NOW()
FROM auth.users au
LEFT JOIN public.profiles p ON p.id = au.id
WHERE p.id IS NULL
ON CONFLICT (id) DO NOTHING;

-- ===================================
-- ✅ تم! الآن سيتم إنشاء profile تلقائياً لكل مستخدم جديد
-- ✅ Done! Now profiles will be created automatically for all new users
-- ===================================
