import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, DollarSign, Scale, Users, Building2 } from "lucide-react"

const recordSections = {
  policyReversals: {
    title: "Policy Reversals",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    items: [
      {
        title: "Infrastructure Bill Opposition & Credit Taking",
        content:
          "Opposed $1 trillion bipartisan Infrastructure Investment and Jobs Act in 2021, stating it was 'tied to reconciliation package.' Later took credit for infrastructure improvements in his district funded by the bill he opposed.",
        impact: "Democrats accused him of hypocrisy. Voted against federal infrastructure spending while requesting over $23 million for district projects.",
      },
      {
        title: "FISA Surveillance & FBI Targeting",
        content: "Claimed FBI improperly queried him under FISA Section 702 in March 2023. Despite criticizing surveillance overreach, voted to reauthorize FISA without substantial reforms.",
        impact: "Criticized surveillance when it affected him personally, but voted to continue the program affecting millions of Americans.",
      },
      {
        title: "Trade Policy & Farmer Harm",
        content: "As co-chair of U.S.-China Working Group and Ways and Means Trade Subcommittee member, supported Trump tariffs that disrupted Illinois soybean and agricultural markets. Expressed concern about Chinese retaliation while voting for policies triggering it.",
        impact: "Contradicted pro-trade rhetoric; Illinois farmers bore the cost of his political positioning.",
      },
    ],
  },
  democracy: {
    title: "Democracy & Elections",
    icon: <Users className="w-6 h-6 text-red-500" />,
    items: [
      {
        title: "Election Overturn Attempt",
        content: "Among 126 House Republicans who signed amicus brief supporting Texas v. Pennsylvania (Dec 11, 2020), seeking to overturn 2020 election by discarding votes in Georgia, Michigan, Pennsylvania, and Wisconsin. Supreme Court unanimously rejected the case.",
        impact: "Speaker Pelosi: signers 'brought dishonor to the House' and 'chose to subvert the Constitution.' Legal experts called it a 'Hail Mary' with no legal merit.",
      },
      {
        title: "January 6 Accountability Avoidance",
        content: "After Jan 6 attack, stated Trump 'bears responsibility.' Voted against both impeachment efforts. Dismissed Jan 6 Select Committee as 'partisan circus' while refusing to participate.",
        impact: "Acknowledged responsibility but opposed mechanisms to investigate and hold leaders accountable.",
      },
      {
        title: "Trump Endorsement After Insurrection",
        content: "January 2024: Endorsed Donald Trump for president, calling him 'the right leader for the country.' This came after acknowledging Trump's responsibility for January 6 and despite Trump's continued false election claims.",
        impact: "Complete reversal demonstrating prioritization of party loyalty over accountability and democratic principles.",
      },
    ],
  },
  financialEthics: {
    title: "Financial & Ethics",
    icon: <DollarSign className="w-6 h-6 text-green-500" />,
    items: [
      {
        title: "Special Interest Funding",
        content: "2023-2024: Raised $3.7 million with 57.3% from PACs. Top contributors: Insurance ($258,753), Securities/Investment ($229,528), Pharmaceuticals ($142,275), AIPAC ($123,000+). Received over $200,000 from lobbyists in 2024 cycle alone.",
        impact: "One of top recipients of lobbyist donations. Questions whose interests he represents: rural constituents or wealthy donors?",
      },
      {
        title: "Delayed Stock Disclosure & Ethics Violations",
        content: "Failed to timely report $15,000 West Suburban Bancorp stock sale in 2022; didn't report until September 2024. Father Ray LaHood paid $40,000 fine in 2019 for misleading statements about foreign loan.",
        impact: "Raised serious ethics concerns. Voted against Combatting Financial Conflicts of Interest in Government Act (2021).",
      },
      {
        title: "Net Worth & Financial Opacity",
        content: "Estimated net worth between $108,000-$575,000 (2024). Wide range suggests lack of transparency in financial disclosures.",
        impact: "Questions about complete financial picture while representing working-class rural district.",
      },
    ],
  },
  healthcare: {
    title: "Healthcare Betrayal",
    icon: <Scale className="w-6 h-6 text-blue-500" />,
    items: [
      {
        title: "Rural Hospital Destruction",
        content: "Introduced Rural and Underserved Small Hospital (RUSH) Protection Act in 2021, positioning himself as rural healthcare champion. Then voted for 'One Big Beautiful Bill Act' cutting Illinois Medicaid by $48 billion over 10 years.",
        impact: "Governor Pritzker warns 330,000 Illinoisans will lose coverage; 9 rural hospitals face closure. One 111-year-old hospital told they'll close in 8-10 years. Directly contradicts his rural healthcare advocacy.",
      },
      {
        title: "Medicaid Cuts Harm Constituents",
        content: "Voted to slash Medicaid that pays for 40% of all childbirths and 69% of all nursing home care in his district. Opposes 'able-bodied working men' accessing Medicaid despite many constituents relying on it.",
        impact: "Directly harms most vulnerable constituents he claims to serve. Supports full ACA repeal without replacement plan.",
      },
      {
        title: "SNAP & Welfare Rhetoric",
        content: "Republican Study Committee member calling for SNAP consolidation into state block grants. With Rep. Jason Smith, wrote 'more people are receiving these welfare benefits today than at any time in our nation's history' and 'a job is the best anti-poverty program.'",
        impact: "Ignores that many SNAP recipients are working families. Rhetoric demonizes struggling constituents while supporting cuts to programs supporting rural economies.",
      },
    ],
  },
  environment: {
    title: "Climate & Environment",
    icon: <Building2 className="w-6 h-6 text-purple-500" />,
    items: [
      {
        title: "Climate Acknowledgment, Zero Action",
        content: "Stated humans 'play a role' in climate change and there is 'no doubt about that.' Acknowledges the science is settled.",
        impact: "Despite acknowledging climate reality: 0% lifetime rating from League of Conservation Voters. Annual scores range 3-17%, indicating near-perfect anti-environment voting record.",
      },
      {
        title: "Consistent Anti-Environment Voting",
        content: "Votes against environmental protection, clean energy initiatives, and climate action measures consistently despite stating belief in climate change.",
        impact: "Says one thing, does another. Illinois farmers face increasing climate challenges without policy support from their representative.",
      },
      {
        title: "Constituent Access Problems",
        content: "Change.org petition created demanding town hall meetings. Constituents report difficulty getting policy responses. Rep. Sean Casten announced plans to hold town halls in LaHood's district, stating LaHood 'can't be bothered to hear directly from constituents.'",
        impact: "Office touts constituent casework milestones, but constituents report lack of public accessibility on policy concerns. Avoids accountability to voters.",
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
