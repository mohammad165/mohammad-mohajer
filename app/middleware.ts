// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // اگر در مسیر ریشه هستی و زبان مشخص نیست
    if (pathname === '/') {
        const response = NextResponse.next()
        response.headers.set('x-middleware-rewrite', '/')
        return response
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}