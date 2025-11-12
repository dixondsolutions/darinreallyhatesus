"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToContent = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center">
      {/* Decorative background images */}
      <div className="absolute inset-0 -z-10 opacity-15">
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8b54daa8-643e-597a-af4f-221d27a58f3a.jpg-fyr4nYZuWrbT0axs2wfJQPfBKXPgda.jpeg"
              alt="Decorative background"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lebanon-pic.jpg-UIqGZZKk5IeCvi2Lwl7pEFd4cRum7p.jpeg"
              alt="Decorative background"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 py-20">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-red-900 drop-shadow-lg mb-6">
            LaHood's Record
          </h1>
          <p className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
            Rhetoric vs. Reality
          </p>
          <p className="text-xl md:text-2xl text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
            Examining the contradictions between promises made and actions taken by Rep. Darin LaHood in Illinois' 16th District
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContent}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-10 rounded-full text-lg shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              See The Evidence
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("action")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              variant="outline"
              className="border-2 border-red-600 text-red-600 hover:bg-red-50 font-bold py-6 px-10 rounded-full text-lg shadow-lg transition-all duration-300"
            >
              Take Action
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to content"
        >
          <ChevronDown size={40} className="text-red-600" />
        </button>
      </div>
    </div>
  )
}
