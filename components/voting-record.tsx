import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Wheat, BadgeDollarSign, Scale } from "lucide-react"

const recordSections = {
  farmers: {
    title: "Farmers & Workers",
    icon: <Wheat className="w-6 h-6 text-orange-500" />,
    items: [
      {
        title: "Agricultural Trade Harm",
        content: "Co-chair of U.S.-China Working Group, expressed concern about protecting farmers from Chinese retaliation. Yet supported Trump tariffs that triggered exactly that retaliation, disrupting Illinois soybean and agricultural markets. Receives significant campaign contributions from lobbyists ($200,000+ in 2024).",
        score: "Failed",
      },
      {
        title: "Perfect Anti-Worker Record",
        content: "0% AFL-CIO score in 2023. Claims to 'support American workers' while voting against worker protections, unemployment benefits, fair labor standards, and infrastructure jobs. Voted against bipartisan infrastructure bill that would create thousands of good-paying jobs.",
        score: "Failed",
      },
      {
        title: "SNAP & Welfare Cuts",
        content: "Republican Study Committee member pushing to consolidate SNAP into state block grants. States 'a job is the best anti-poverty program' while ignoring many SNAP recipients are working families. Seeks to cut programs supporting rural economies in his own district.",
        score: "Failed",
      },
    ],
  },
  lawEnforcement: {
    title: "Law & Democracy",
    icon: <Scale className="w-6 h-6 text-blue-500" />,
    items: [
      {
        title: "Election Overturn Support",
        content: "Signed amicus brief for Texas v. Pennsylvania (Dec 11, 2020) to overturn 2020 election by discarding votes in 4 states. Supreme Court unanimously rejected. Speaker Pelosi: signers 'brought dishonor to the House.'",
        score: "Failed",
      },
      {
        title: "January 6 Hypocrisy",
        content: "Said Trump 'bears responsibility' for Jan 6 attack. Then voted against both impeachment efforts, dismissed Jan 6 Committee as 'partisan circus,' refused to participate. Endorsed Trump for president in Jan 2024.",
        score: "Failed",
      },
      {
        title: "Gun Rights Absolutism",
        content: "NRA endorsed. 'Staunch advocate for 2nd Amendment.' Opposes universal background checks and all gun safety legislation despite communities affected by gun violence in his district.",
        score: "Failed",
      },
    ],
  },
  fiscal: {
    title: "Fiscal Hypocrisy",
    icon: <BadgeDollarSign className="w-6 h-6 text-green-500" />,
    items: [
      {
        title: "Revenue-Neutral Lie",
        content: "April 2017: Stated he'd only vote for 'revenue neutral' tax cuts. December 2017: Voted for Tax Cuts and Jobs Act adding $1.414 trillion to debt. Broke promise within months.",
        score: "Failed",
      },
      {
        title: "$3.4 Trillion Betrayal",
        content: "Campaigns on reducing federal deficit. Voted against Fiscal Responsibility Act of 2023. May 2025: Voted for 'One Big Beautiful Bill Act' adding $3.4 trillion to deficit. Praised it as 'bold' and 'comprehensive.'",
        score: "Failed",
      },
      {
        title: "Website Says: 'Washington Spends Too Much'",
        content: "LaHood's website: 'Our debt crisis is not due to the fact that Americans are taxed too little, it is due to the fact that Washington spends too much.' Yet he votes for every deficit-exploding Republican bill.",
        score: "Failed",
      },
    ],
  },
  integrity: {
    title: "Healthcare & Environment",
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    items: [
      {
        title: "Rural Hospital Sabotage",
        content: "2021: Introduced RUSH Protection Act for rural hospitals. 2025: Voted to cut Illinois Medicaid by $48 billion, threatening 9 rural hospitals with closure and causing 330,000 to lose coverage. Complete contradiction.",
        score: "Failed",
      },
      {
        title: "Climate Denial In Action",
        content: "Admits humans 'play a role' in climate change and 'no doubt about that.' Then maintains 0% lifetime League of Conservation Voters rating. Annual scores 3-17%. Perfect anti-environment record despite acknowledging science.",
        score: "Failed",
      },
      {
        title: "Constituent Access Problems",
        content: "Change.org petition demanding town halls. Constituents report difficulty getting responses. Rep. Casten holding town halls in LaHood's district because LaHood 'can't be bothered to hear directly from constituents.'",
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
