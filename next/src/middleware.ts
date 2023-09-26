import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token');
  const signInURL = new URL('/', request.url);
  const dashboardURL = new URL('/dashboard', request.url);

  if (!token) {
    if (request.nextUrl.pathname === '/') {
      return NextResponse.next();
    }
    return NextResponse.redirect(signInURL);
  }

  if (token && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(dashboardURL);
  }
}

export const config = {
  matcher: ['/', '/dashboard']
};
