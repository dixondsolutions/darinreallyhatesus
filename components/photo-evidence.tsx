import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function PhotoEvidence() {
  return (
    <Card className="backdrop-blur-sm bg-white/30">
      <CardHeader>
        <CardTitle className="text-2xl text-red-800">Photo Evidence</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8b54daa8-643e-597a-af4f-221d27a58f3a.jpg-fyr4nYZuWrbT0axs2wfJQPfBKXPgda.jpeg"
              alt="Representative LaHood with political figures"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lebanon-pic.jpg-UIqGZZKk5IeCvi2Lwl7pEFd4cRum7p.jpeg"
              alt="Representative LaHood in a meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
