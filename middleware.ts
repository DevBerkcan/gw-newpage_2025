// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || '';

  // Redirect non-www to www for gentle-webdesign.com
  if (host === 'gentle-webdesign.com') {
    const url = new URL(req.url);
    url.host = 'www.gentle-webdesign.com';
    return NextResponse.redirect(url.toString(), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)'],
};
