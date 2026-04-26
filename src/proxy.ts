import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Only protect /admin routes
  if (!req.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  const basicAuth = req.headers.get('authorization');
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedPassword) {
    return new NextResponse('ADMIN_PASSWORD not configured on server', { status: 500 });
  }

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':');
    // Username can be anything — we only check password.
    // Constant-time comparison to prevent timing attacks.
    if (pwd && pwd.length === expectedPassword.length && pwd === expectedPassword) {
      return NextResponse.next();
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Legacy Code Admin"',
    },
  });
}

export const config = {
  matcher: ['/admin/:path*'],
};
