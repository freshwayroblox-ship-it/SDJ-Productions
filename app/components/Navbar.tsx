"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-black/70 backdrop-blur-md fixed w-full z-50">
      <h1 className="text-2xl font-bold text-blue-400">SDJ Productions</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/features">Products</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
