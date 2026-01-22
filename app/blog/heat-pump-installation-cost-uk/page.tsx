"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RedirectPage() {
  const router = useRouter()

  useEffect(() => {
    // 301 redirect to new URL
    router.replace("/blog/air-source-heat-pump-cost-uk")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-[#1d1d1f] mb-4">Redirecting...</h1>
        <p className="text-[#6e6e73]">You'll be redirected to our updated cost guide in a moment.</p>
      </div>
    </div>
  )
}
