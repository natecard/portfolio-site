import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
	const url = req.nextUrl.clone();

	// Check if the pathname ends with '/index.html'
	if (url.pathname.endsWith('/index.html')) {
		// Remove '/index.html' from the pathname
		url.pathname = url.pathname.replace('/index.html', '');

		// Redirect to the new URL
		return NextResponse.redirect(url);
	}

	// If the URL doesn't need to be redirected, continue to the next middleware
	return NextResponse.next();
}

// Specify which paths this middleware should run on
export const config = {
	matcher: ['/admin/:path*'],
};
