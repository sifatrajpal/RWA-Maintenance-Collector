'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

export default function AuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const hashParams = new URLSearchParams(window.location.hash.substring(1))
    const access_token = hashParams.get('access_token')
    const refresh_token = hashParams.get('refresh_token')

    if (access_token && refresh_token) {
      supabase.auth.setSession({ access_token, refresh_token }).then(() => {
        router.push('/login')
      })
    } else {
      router.push('/login')
    }
  }, [router])

  return <div>Logging you in...</div>
}