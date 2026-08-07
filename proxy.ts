import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          response = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()
  console.log('lkajhdlfkajsdlkfj' , user);
  
  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  const isAdminRoute = request.nextUrl.pathname.startsWith('/manage-flats')
    || request.nextUrl.pathname.startsWith('/expense-log')
    || request.nextUrl.pathname.startsWith('/dues-overview')
    || request.nextUrl.pathname.startsWith('/generate-invoices')

  const isResidentRoute = request.nextUrl.pathname.startsWith('/resident')

  if (isAdminRoute && profile?.role !== 'admin') {  
    return NextResponse.redirect(new URL('/resident', request.url))
  }

  if (isResidentRoute && profile?.role !== 'resident') {
    return NextResponse.redirect(new URL('/manage-flats', request.url))
  }

  return response
}

export const config = {
  matcher: [
    '/manage-flats/:path*',
    '/expense-log/:path*',
    '/dues-overview/:path*',
    '/generate-invoices/:path*',
    '/resident/:path*',
  ],
}