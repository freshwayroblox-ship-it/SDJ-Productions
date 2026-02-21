"use client"
import Navbar from "../components/Navbar"
import FeatureBox from "../components/FeatureBox"

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white">
      <Navbar />
      <section className="p-10 max-w-5xl mx-auto pt-32">
        <h1 className="text-4xl font-bold text-blue-400 mb-10 text-center">Products & Services</h1>
        <FeatureBox title="Retail Products" description="Self Checkout, Manual tills and more." color="blue" />
        <FeatureBox title="Tech Accessories" description="Quality tech gear at great prices." color="blue" />
        <FeatureBox title="Cheap" description="We sell our products for a cheap price!." color="blue" />
      </section>
    </div>
  )
}
