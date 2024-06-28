import { NextResponse } from 'next/server';
import { parse } from 'cookie';

export function middleware(request) {
  const cookies = parse(request.headers.get('token') || '');
  const token = cookies.token;
  console.log("middleware cosoling the token",token)
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/content',
};
