import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function middleware(req: NextRequest) {
  // إنشاء Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  // البحث عن أي كوكي يبدأ بـ sb- وينتهي بـ -auth-token
  let authToken = null
  req.cookies.getAll().forEach(cookie => {
    if (cookie.name.startsWith('sb-') && cookie.name.endsWith('-auth-token')) {
      authToken = cookie.value
    }
  })

  // الصفحات المحمية
  const protectedPaths = ['/profile', '/watch']
  const isProtectedPath = protectedPaths.some(path =>
    req.nextUrl.pathname.startsWith(path)
  )

  // إذا كانت الصفحة محمية والمستخدم غير مسجل
  if (isProtectedPath && !authToken) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/login'
    redirectUrl.searchParams.set('redirectTo', req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // إذا كان المستخدم مسجل ويحاول الوصول لصفحة login/signup
  if (authToken && (req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/signup')) {
    return NextResponse.redirect(new URL('/profile', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/profile/:path*', '/watch/:path*', '/login', '/signup']
}