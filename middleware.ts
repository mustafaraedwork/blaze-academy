import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // الحصول على التوكن من الكوكيز
  const token = req.cookies.get('sb-access-token')?.value || 
                req.cookies.get('sb-localhost-auth-token')?.value

  // الصفحات المحمية
  const protectedPaths = ['/profile', '/watch']
  const isProtectedPath = protectedPaths.some(path => 
    req.nextUrl.pathname.startsWith(path)
  )

  // إذا كانت الصفحة محمية والمستخدم غير مسجل
  if (isProtectedPath && !token) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/login'
    redirectUrl.searchParams.set('redirectTo', req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // إذا كان المستخدم مسجل ويحاول الوصول لصفحة login/signup
  if (token && (req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/signup')) {
    return NextResponse.redirect(new URL('/profile', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/profile/:path*', '/watch/:path*', '/login', '/signup']
}