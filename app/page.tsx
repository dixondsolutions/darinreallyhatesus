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
    <main className="min-h-screen relative overflow-hidden">
      {/* Modern animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white via-50% to-blue-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.3),transparent)]" />

        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <Navigation />
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="animate-fadeIn">
          <AboutSection />
        </div>

        <div className="py-8 animate-scaleIn delay-100">
          <DayCounter />
        </div>

        <section id="record" className="py-8 scroll-mt-16 animate-fadeIn delay-200">
          <ComprehensiveRecord />
        </section>

        <div className="animate-slideInLeft delay-300">
          <KeyContradictions />
        </div>

        <section className="py-16 animate-slideInRight delay-400">
          <VotingRecord />
        </section>

        <section id="timeline" className="py-8 scroll-mt-16 animate-fadeIn delay-500">
          <CrisisTimeline />
        </section>

        <section id="action" className="py-16 scroll-mt-16 animate-scaleIn">
          <Card className="glass rounded-3xl shadow-2xl border-2 border-red-200/50 overflow-hidden hover:shadow-red-500/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent pointer-events-none" />
            <CardHeader className="text-center relative z-10">
              <CardTitle className="text-4xl md:text-5xl text-gradient mb-4 font-bold">
                Take Action Now
              </CardTitle>
              <CardDescription className="text-lg md:text-xl text-gray-700 font-medium">
                Join the movement for accountable representation in Illinois' 16th District
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 p-6 md:p-10 relative z-10">
              <div className="max-w-2xl mx-auto">
                <SignUpForm />
              </div>
              <div className="text-center space-y-6">
                <Button
                  size="lg"
                  className="shine bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-bold py-7 px-14 rounded-full text-xl shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-red-500/50 pulse-glow"
                >
                  Demand Accountability
                </Button>
                <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
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
