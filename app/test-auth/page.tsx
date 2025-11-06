'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function TestAuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState<any>(null);

  const testSignIn = async () => {
    console.log('Testing sign in...');
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log('Result:', { data, error });
    setResult({ data, error });
  };

  const checkSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    console.log('Session:', { data, error });
    setResult({ session: data, error });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8" dir="rtl">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">اختبار Supabase Auth</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="test@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="********"
            />
          </div>

          <button
            onClick={testSignIn}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            اختبار تسجيل الدخول
          </button>

          <button
            onClick={checkSession}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            فحص الجلسة
          </button>

          {result && (
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <h3 className="font-bold mb-2">النتيجة:</h3>
              <pre className="text-xs overflow-auto" dir="ltr">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}