"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const NotFound = () => {
  const router = useRouter()
  return (
    <div className="min-h-screen max-w-xl mx-auto justify-center items-center" style={{ marginTop: '190px' }}>
      <div className="gap-5 flex items-center flex-col">
        <MagnifyingGlass size={44} className="text-color-accent" />
        <h3 className="text-color-accent text-2xl font-bold">
          NOT FOUND.
        </h3>
        <button
          onClick={() => router.back()}
          className="justify-center text-small text-color-primary hover:text-color-accent transition-all underline"
        >
          Kembali
        </button>
      </div>
    </div>
  )
}

export default NotFound
