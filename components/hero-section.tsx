import Image from "next/image"

export function HeroSection() {
  return (
    <div className="relative">
      {/* Decorative background images */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8b54daa8-643e-597a-af4f-221d27a58f3a.jpg-fyr4nYZuWrbT0axs2wfJQPfBKXPgda.jpeg"
              alt="Decorative background"
              fill
              className="object-cover opacity-50 blur-sm"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lebanon-pic.jpg-UIqGZZKk5IeCvi2Lwl7pEFd4cRum7p.jpeg"
              alt="Decorative background"
              fill
              className="object-cover opacity-50 blur-sm"
            />
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center py-20 transition-all duration-500 ease-in-out transform hover:scale-105">
        <h1 className="text-4xl md:text-6xl font-bold text-red-800 drop-shadow-md mb-4">
          LaHood's Record: Rhetoric vs. Reality
        </h1>
        <p className="text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
          Analyzing Rep. Darin LaHood's voting record and its impact on Illinois' 16th District
        </p>
      </div>
    </div>
  )
}
