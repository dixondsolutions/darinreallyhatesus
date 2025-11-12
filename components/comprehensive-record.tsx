import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, DollarSign, Scale, Users, Building2 } from "lucide-react"

const recordSections = {
  policyReversals: {
    title: "Policy Reversals",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    items: [
      {
        title: "Infrastructure Bill Opposition",
        content:
          "Opposed $1.2T bipartisan infrastructure bill in 2021 despite long-standing advocacy for infrastructure investment.",
        impact: "Disappointed labor unions like LiUNA who expected his support.",
      },
      {
        title: "FISA Surveillance Stance",
        content: "Accused FBI of improperly targeting him through 'backdoor searches' under FISA Section 702.",
        impact: "Marked a departure from typical alignment with intelligence community oversight.",
      },
      {
        title: "Trade Policy Contradiction",
        content: "Supported Trump-era tariffs that disrupted Illinois soybean markets.",
        impact: "Contradicted pro-trade rhetoric and role as chair of Ways and Means Subcommittee on Trade.",
      },
    ],
  },
  trumpMuskSupport: {
    title: "Trump & Musk Alignment",
    icon: <Users className="w-6 h-6 text-red-500" />,
    items: [
      {
        title: "Trump Agenda Endorsement",
        content: "Endorsed Trump's agenda in 2025 swearing-in statement, pledging to support Speaker Mike Johnson.",
        impact: "Significant shift from initial criticism of Trump's rhetoric and actions.",
      },
      {
        title: "DOGE Initiative Support",
        content: "Backed Elon Musk's controversial Department of Government Efficiency (DOGE) initiative.",
        impact: "Silence on potential constitutional violations and unilateral agency closures.",
      },
      {
        title: "Executive Power Concerns",
        content: "Failed to address DOGE's overreach despite earlier emphasis on congressional spending authority.",
        impact: "Contradicts previous concerns about executive power.",
      },
    ],
  },
  financialEthics: {
    title: "Financial & Ethics",
    icon: <DollarSign className="w-6 h-6 text-green-500" />,
    items: [
      {
        title: "Net Worth and Investments",
        content: "Estimated net worth of $341,514 in 2018, with investments in mutual funds and stocks.",
        impact: "Moderate personal wealth for a congressman.",
      },
      {
        title: "Delayed Stock Disclosure",
        content: "Failed to timely report a $15,000 West Suburban Bancorp stock sale in 2022.",
        impact: "Raised ethics concerns when reported in September 2024.",
      },
      {
        title: "Campaign Finance",
        content: "50% reduction in campaign expenditures from 2016 to 2018 ($2.2M to $1.2M).",
        impact: "Focused on fundraising consultants and direct mail.",
      },
    ],
  },
  rhetoricVsActions: {
    title: "Rhetoric vs. Actions",
    icon: <Scale className="w-6 h-6 text-blue-500" />,
    items: [
      {
        title: "Worker Support Contradiction",
        content: "Claimed to 'support American workers' but earned 0% AFL-CIO score in 2023.",
        impact: "Voted against protections for federal workers, unemployment benefits, and infrastructure investments.",
      },
      {
        title: "Law Enforcement Stance",
        content: "Praised Capitol Police while dismissing January 6 bipartisan investigation as a 'partisan circus'.",
        impact: "Contradictory response to the January 6 riot and its aftermath.",
      },
      {
        title: "Fiscal Conservatism Hypocrisy",
        content:
          "Supported Tax Cuts and Jobs Act (2017) adding $1.4T to national debt while criticizing Biden's spending as 'radical'.",
        impact: "Contradicts claims of fiscal responsibility.",
      },
    ],
  },
  additionalConcerns: {
    title: "Additional Concerns",
    icon: <Building2 className="w-6 h-6 text-purple-500" />,
    items: [
      {
        title: "Ethics Legislation",
        content: "Voted against the Combatting Financial Conflicts of Interest in Government Act (2021).",
        impact: "Opposed measures to increase government transparency and accountability.",
      },
      {
        title: "Infrastructure Requests",
        content: "Requested over $23 million for FY2025 infrastructure projects in his district.",
        impact: "Contradicts opposition to federal infrastructure spending.",
      },
      {
        title: "Family Ethics Issues",
        content: "Father Ray LaHood paid a $40,000 fine in 2019 for misleading statements about a foreign loan.",
        impact: "Raises questions about ethical standards within LaHood's circle.",
      },
    ],
  },
}

export function ComprehensiveRecord() {
  return (
    <Card className="backdrop-blur-sm bg-white/30">
      <CardHeader>
        <CardTitle className="text-2xl text-red-800">LaHood's Comprehensive Record</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="policyReversals" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 mb-8">
            {Object.entries(recordSections).map(([key, section]) => (
              <TabsTrigger key={key} value={key} className="text-sm">
                <span className="hidden lg:inline">{section.title}</span>
                <span className="lg:hidden">{section.icon}</span>
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
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-700 mb-2">{item.content}</p>
                    <p className="text-sm text-red-600 font-medium">Impact: {item.impact}</p>
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
