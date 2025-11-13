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
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Enhanced background with gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/90 via-white to-blue-50/90" />
        <div className="grid grid-cols-2 gap-4 h-full opacity-10">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8b54daa8-643e-597a-af4f-221d27a58f3a.jpg-fyr4nYZuWrbT0axs2wfJQPfBKXPgda.jpeg"
              alt="Decorative background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lebanon-pic.jpg-UIqGZZKk5IeCvi2Lwl7pEFd4cRum7p.jpeg"
              alt="Decorative background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero content with glass effect */}
      <div className="relative z-10 text-center px-4 py-20 max-w-6xl mx-auto">
        <div className="glass rounded-3xl p-12 md:p-16 shadow-2xl animate-fadeIn">
          <h1 className="text-6xl md:text-8xl font-bold text-gradient drop-shadow-lg mb-6 animate-scaleIn delay-100">
            LaHood's Record
          </h1>
          <p className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 animate-slideInLeft delay-200">
            Rhetoric vs. Reality
          </p>
          <p className="text-xl md:text-2xl text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed animate-slideInRight delay-300">
            Examining the contradictions between promises made and actions taken by Rep. Darin LaHood in Illinois' 16th District
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeIn delay-400">
            <Button
              onClick={scrollToContent}
              size="lg"
              className="shine bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-bold py-7 px-12 rounded-full text-lg shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-red-500/50"
            >
              See The Evidence
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("action")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              variant="outline"
              size="lg"
              className="shine border-3 border-red-600 text-red-700 hover:bg-red-50 hover:text-red-800 font-bold py-7 px-12 rounded-full text-lg shadow-xl transition-all duration-300 backdrop-blur-sm hover:border-red-700"
            >
              Take Action
            </Button>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform"
          aria-label="Scroll to content"
        >
          <div className="glass rounded-full p-3 shadow-lg">
            <ChevronDown size={32} className="text-red-600" />
          </div>
        </button>
      </div>
    </div>
  )
}
