import { DayCounter } from "../components/day-counter"
import { CrisisTimeline } from "../components/crisis-timeline"
import { SignUpForm } from "../components/sign-up-form"
import { VotingRecord } from "../components/voting-record"
import { ComprehensiveRecord } from "../components/comprehensive-record"
import { HeroSection } from "../components/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <HeroSection />

        <div className="p-8 space-y-12">
          <DayCounter />

          <ComprehensiveRecord />

          <VotingRecord />

          <CrisisTimeline />

          <Card className="backdrop-blur-sm bg-white/30">
            <CardHeader>
              <CardTitle className="text-2xl text-red-800">Take Action Now</CardTitle>
              <CardDescription className="text-lg">
                Join the movement for accountable representation in Illinois' 16th District
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <SignUpForm />
              <div className="text-center">
                <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                  Demand LaHood Uphold His Oath
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
