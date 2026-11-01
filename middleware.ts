import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiting store (in production, use Cloudflare KV or Redis)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 60; // Max requests per window

export function middleware(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();

  // Rate limiting
  const rateLimitData = rateLimitMap.get(ip) || { count: 0, timestamp: now };

  if (now - rateLimitData.timestamp > RATE_LIMIT_WINDOW) {
    // Reset window
    rateLimitData.count = 1;
    rateLimitData.timestamp = now;
  } else {
    rateLimitData.count++;
  }

  rateLimitMap.set(ip, rateLimitData);

  if (rateLimitData.count > MAX_REQUESTS) {
    return new NextResponse(
      JSON.stringify({
        error: "Too many requests. Please try again later.",
        retryAfter: Math.ceil((RATE_LIMIT_WINDOW - (now - rateLimitData.timestamp)) / 1000)
      }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": String(Math.ceil((RATE_LIMIT_WINDOW - (now - rateLimitData.timestamp)) / 1000)),
        },
      }
    );
  }

  // Security headers for API routes
  if (request.nextUrl.pathname.startsWith("/api/")) {
    const response = NextResponse.next();

    // Set security headers
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-XSS-Protection", "1; mode=block");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");

    return response;
  }

  // Auth protection for dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const token = request.cookies.get("auth-token")?.value;

    if (!token) {
      // Redirect to login if not authenticated
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Only run middleware on relevant paths
export const config = {
  matcher: [
    "/api/:path*",
    "/dashboard/:path*",
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
