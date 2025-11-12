import { DayCounter } from "../components/day-counter"
import { CrisisTimeline } from "../components/crisis-timeline"
import { SignUpForm } from "../components/sign-up-form"
import { VotingRecord } from "../components/voting-record"
import { ComprehensiveRecord } from "../components/comprehensive-record"
import { HeroSection } from "../components/hero-section"
import { Navigation } from "../components/navigation"
import { AboutSection } from "../components/about-section"
import { KeyContradictions } from "../components/key-contradictions"
import { Footer } from "../components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <Navigation />

      <HeroSection />

      <div className="max-w-7xl mx-auto px-4">
        <AboutSection />

        <div className="py-8">
          <DayCounter />
        </div>

        <section id="record" className="py-8 scroll-mt-16">
          <ComprehensiveRecord />
        </section>

        <KeyContradictions />

        <section className="py-16">
          <VotingRecord />
        </section>

        <section id="timeline" className="py-8 scroll-mt-16">
          <CrisisTimeline />
        </section>

        <section id="action" className="py-16 scroll-mt-16">
          <Card className="backdrop-blur-sm bg-white shadow-2xl border-2 border-red-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl text-red-800 mb-2">Take Action Now</CardTitle>
              <CardDescription className="text-lg md:text-xl">
                Join the movement for accountable representation in Illinois' 16th District
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 p-6 md:p-8">
              <div className="max-w-2xl mx-auto">
                <SignUpForm />
              </div>
              <div className="text-center space-y-4">
                <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-6 px-10 rounded-full text-xl shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                  Demand Accountability
                </Button>
                <p className="text-sm text-gray-600 max-w-xl mx-auto">
                  Share this information with your friends, family, and neighbors. Democracy requires an informed citizenry.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </main>
  )
}
