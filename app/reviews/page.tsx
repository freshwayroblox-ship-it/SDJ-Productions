"use client"
import Navbar from "../components/Navbar"

export default function Reviews() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white">
      <Navbar />
      <section className="p-10 max-w-4xl mx-auto pt-32">
        <h1 className="text-4xl font-bold text-blue-400 mb-10 text-center">What Our Customers Say</h1>
        <div className="space-y-6">
          <div className="bg-black/60 p-6 rounded-2xl shadow-md">
            <p className="text-gray-300">“None”</p>
            <span className="text-blue-400 font-bold mt-2 block">— Person.</span>
          </div>
          <div className="bg-black/60 p-6 rounded-2xl shadow-md">
            <p className="text-gray-300">“None”</p>
            <span className="text-blue-400 font-bold mt-2 block">— Wowie.</span>
          </div>
        </div>
      </section>
    </div>
  )
}
