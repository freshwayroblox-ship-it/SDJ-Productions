"use client"
import Navbar from "./components/Navbar"
import FeatureBox from "./components/FeatureBox"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white">
      <Navbar />
      <header className="flex flex-col justify-center items-center text-center min-h-screen p-10">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-400">SDJ Productions</h1>
        <p className="text-xl text-gray-300 mb-6">Roblox Retail, Tech & More — We Bring Your Ideas to Life!</p>
      </header>

      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Our Highlights</h2>
        <FeatureBox title="Roblox Products" description="Exclusive Roblox products for your collection." color="blue" />
        <FeatureBox title="Tech Gadgets" description="High-quality tech items at great prices." color="blue" />
        <FeatureBox title="Retail Deals" description="Retail products with fast shipping." color="blue" />
      </section>
    </div>
  )
}
