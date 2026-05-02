import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Only /books/[id] (dynamic detail pages) are private
  // /books (the listing page) is public
  const isBookDetail = /^\/books\/[^/]+/.test(pathname);
  const isProfile = pathname.startsWith("/profile");

  if (!isBookDetail && !isProfile) return NextResponse.next();

  // Check for BetterAuth session cookie
  const sessionToken =
    request.cookies.get("better-auth.session_token")?.value ||
    request.cookies.get("__Secure-better-auth.session_token")?.value;

  if (!sessionToken) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/books/:id+"],
};
