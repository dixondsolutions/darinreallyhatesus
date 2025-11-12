import { Card, CardContent } from "@/components/ui/card"
import { Users, DollarSign, MapPin, Calendar } from "lucide-react"

export function AboutSection() {
  const facts = [
    {
      icon: <MapPin className="w-8 h-8 text-red-600" />,
      label: "District",
      value: "Illinois' 16th",
      detail: "21 counties across central and northwestern Illinois",
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      label: "Years in Office",
      value: "Since 2015",
      detail: "Won special election after Aaron Schock's resignation",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      label: "Political Dynasty",
      value: "Son of Ray LaHood",
      detail: "Former congressman and Obama's Transportation Secretary",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      label: "Campaign Funding",
      value: "57.3% from PACs",
      detail: "$3.7M raised in 2023-2024, heavily from special interests",
    },
  ]

  return (
    <section id="about" className="py-16 px-4 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who is Darin LaHood?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A congressman who has consistently placed party loyalty and special interests ahead of his constituents' needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {facts.map((fact, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-red-200">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{fact.icon}</div>
                <p className="text-sm text-gray-500 mb-1">{fact.label}</p>
                <p className="text-2xl font-bold text-gray-900 mb-2">{fact.value}</p>
                <p className="text-sm text-gray-600">{fact.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200">
          <CardContent className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Pattern of Contradictions</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">•</span>
                  <p>
                    <strong>Promised</strong> only revenue-neutral tax cuts, <strong>voted for</strong> $1.4 trillion in deficit spending
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">•</span>
                  <p>
                    <strong>Claims</strong> to champion rural healthcare, <strong>voted to cut</strong> Medicaid by $48 billion
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">•</span>
                  <p>
                    <strong>Acknowledges</strong> climate change is real, maintains <strong>0% environmental voting score</strong>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">•</span>
                  <p>
                    <strong>Said Trump "bears responsibility"</strong> for Jan 6, later <strong>endorsed him for president</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">•</span>
                  <p>
                    <strong>Claims</strong> to support workers, earned <strong>0% AFL-CIO score</strong> in 2023
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-xl">•</span>
                  <p>
                    <strong>Voted against</strong> bipartisan infrastructure, then <strong>took credit</strong> for its benefits
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
