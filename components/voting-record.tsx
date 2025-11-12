import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Wheat, BadgeDollarSign, Scale } from "lucide-react"

const recordSections = {
  farmers: {
    title: "Farmers & Workers",
    icon: <Wheat className="w-6 h-6 text-orange-500" />,
    items: [
      {
        title: "Trade Policy Contradictions",
        content: "Championed USMCA while supporting tariffs that disrupted soybean markets",
        score: "Inconsistent",
      },
      {
        title: "Rural Support",
        content: "Opposed COVID-19 aid for rural healthcare and student debt relief affecting farm families",
        score: "Failed",
      },
      {
        title: "Labor Rights",
        content: "0% AFL-CIO score in 2023; voted against worker protections and benefits",
        score: "Failed",
      },
    ],
  },
  lawEnforcement: {
    title: "Law Enforcement",
    icon: <Scale className="w-6 h-6 text-blue-500" />,
    items: [
      {
        title: "Police Funding",
        content: "Introduced David Dorn Back the Blue Act while opposing reform measures",
        score: "Mixed",
      },
      {
        title: "January 6 Response",
        content: "Praised Capitol Police but dismissed bipartisan investigation",
        score: "Failed",
      },
      {
        title: "Capitol Security",
        content: "Voted against funding for Capitol safety measures",
        score: "Failed",
      },
    ],
  },
  fiscal: {
    title: "Fiscal Policy",
    icon: <BadgeDollarSign className="w-6 h-6 text-green-500" />,
    items: [
      {
        title: "Tax Policy",
        content: "Supported $1.4T tax cuts while criticizing Biden's spending",
        score: "Inconsistent",
      },
      {
        title: "Debt Ceiling",
        content: "Opposed 2023 compromise despite supporting deficit-increasing policies",
        score: "Failed",
      },
      {
        title: "Social Programs",
        content: "Advocated cutting Medicaid while backing corporate incentives",
        score: "Failed",
      },
    ],
  },
  integrity: {
    title: "Rule of Law",
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    items: [
      {
        title: "FISA Stance",
        content: "Criticized FBI surveillance but voted to reauthorize FISA",
        score: "Inconsistent",
      },
      {
        title: "Election Claims",
        content: "Supported baseless fraud claims while opposing voting rights",
        score: "Failed",
      },
      {
        title: "Bipartisanship",
        content: "92.7% Trump alignment despite bipartisan rhetoric",
        score: "Failed",
      },
    ],
  },
}

export function VotingRecord() {
  return (
    <Card className="backdrop-blur-sm bg-white/30">
      <CardHeader>
        <CardTitle className="text-2xl text-red-800">Voting Record Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="farmers" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {Object.entries(recordSections).map(([key, section]) => (
              <TabsTrigger key={key} value={key} className="text-sm md:text-base">
                <span className="hidden md:inline">{section.title}</span>
                <span className="md:hidden">{section.icon}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(recordSections).map(([key, section]) => (
            <TabsContent key={key} value={key}>
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  {section.icon}
                  <h3 className="text-xl font-bold">{section.title}</h3>
                </div>
                {section.items.map((item, index) => (
                  <div key={index} className="bg-white/50 p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{item.title}</h4>
                      <span
                        className={`px-2 py-1 rounded text-sm font-medium ${
                          item.score === "Failed"
                            ? "bg-red-100 text-red-800"
                            : item.score === "Mixed"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {item.score}
                      </span>
                    </div>
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
