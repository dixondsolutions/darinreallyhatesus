import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Stethoscope, TreePine, Scale, Users, Building2 } from "lucide-react"

const contradictionSections = {
  fiscal: {
    title: "Fiscal Hypocrisy",
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    description: "LaHood campaigns on fiscal responsibility while voting for massive deficit increases",
    items: [
      {
        title: "The Revenue-Neutral Lie",
        promise: 'April 2017: Stated he would only vote for tax cuts that were "revenue neutral" to avoid adding to the deficit',
        reality: "December 2017: Voted for Tax Cuts and Jobs Act, adding $1.414 trillion to national debt over 10 years",
        impact: "Broke his promise within 8 months, prioritizing tax cuts for the wealthy and corporations over fiscal responsibility. Set pattern of saying one thing, doing another.",
        source: "Congressional Budget Office, Wikipedia, LaHood statements",
      },
      {
        title: "The $3.4 Trillion Betrayal",
        promise: "Website states 'Washington spends too much.' Voted against Fiscal Responsibility Act of 2023 as supposed deficit hawk.",
        reality: 'May 2025: Voted for "One Big Beautiful Bill Act" adding $3.4 trillion to deficit over 10 years',
        impact: 'Praised legislation as "bold" and "comprehensive," creating "stronger and more prosperous future." Complete abandonment of fiscal conservatism when Republicans control agenda.',
        source: "Congressional Budget Office, WGLT, LaHood House website",
      },
      {
        title: "Infrastructure Contradiction",
        promise: "Requested over $23 million for district infrastructure projects",
        reality: "Voted against $1 trillion bipartisan Infrastructure Investment and Jobs Act",
        impact: "Opposed federal infrastructure spending while requesting federal infrastructure money",
        source: "IDCCA, LaHood House website",
      },
    ],
  },
  healthcare: {
    title: "Healthcare Betrayal",
    icon: <Stethoscope className="w-6 h-6 text-red-600" />,
    description: "Claims to protect rural healthcare while voting to destroy it",
    items: [
      {
        title: "Rural Hospital Destruction",
        promise: '2021: Introduced "Rural and Underserved Small Hospital (RUSH) Protection Act," positioning himself as champion of rural healthcare access',
        reality: "2025: Voted for 'One Big Beautiful Bill Act' cutting Illinois Medicaid by estimated $48 billion over 10 years, threatening 9 rural hospitals",
        impact: "Governor Pritzker warned 330,000 Illinoisans will lose coverage. One rural hospital administrator stated her 111-year-old hospital will be forced to close within 8-10 years. Direct contradiction of rural healthcare advocacy.",
        source: "Capitol News Illinois, Springfield Business Journal, LaHood House website",
      },
      {
        title: "Medicaid Cuts Hit Constituents",
        promise: "Claims to represent rural Illinois families and their healthcare needs",
        reality: "Voted to slash Medicaid despite it paying for 40% of all childbirths and 69% of all nursing home care in his district. Opposes 'able-bodied working men' accessing Medicaid.",
        impact: "Directly harms the most vulnerable constituents he claims to serve. Many 'able-bodied' Medicaid recipients are working families struggling to afford healthcare.",
        source: "Capitol News Illinois, LaHood voting record",
      },
      {
        title: "ACA Repeal Push",
        promise: "N/A - consistent opposition",
        reality: "Supports full repeal of Affordable Care Act despite lacking replacement plan",
        impact: "Would eliminate healthcare coverage for thousands of constituents",
        source: "Voting record",
      },
    ],
  },
  environment: {
    title: "Climate Denial in Action",
    icon: <TreePine className="w-6 h-6 text-emerald-600" />,
    description: "Admits climate change is real, then votes against every solution",
    items: [
      {
        title: "Acknowledges Science, Ignores Solutions",
        promise: 'Publicly stated humans "play a role" in climate change and there is "no doubt about that." Acknowledges climate science is settled.',
        reality: "0% lifetime rating from League of Conservation Voters. Annual scores ranging from 3% to 17% - near-perfect anti-environment record.",
        impact: "Despite acknowledging the science and reality of human-caused climate change, consistently votes against environmental protection, clean energy, and climate action. Says he believes the science, then votes as if he doesn't.",
        source: "League of Conservation Voters, OnTheIssues, Community Word",
      },
      {
        title: "Agricultural Climate Impact Ignored",
        promise: "Claims to support Illinois farmers and agricultural interests as Ways and Means Committee member",
        reality: "Votes against climate measures that would help farmers adapt to changing conditions. Illinois farmers face increasing droughts, floods, and unpredictable weather.",
        impact: "Farmers in his district suffer the consequences of climate change without policy support from their representative. Prioritizes fossil fuel industry over agricultural sustainability.",
        source: "Voting record analysis, League of Conservation Voters",
      },
    ],
  },
  democracy: {
    title: "Attack on Democracy",
    icon: <Scale className="w-6 h-6 text-blue-600" />,
    description: "Supported overturning legitimate election results",
    items: [
      {
        title: "Texas Lawsuit Support - Election Overturn Attempt",
        promise: "Oath to uphold the Constitution and protect democratic processes",
        reality: "December 11, 2020: Signed amicus brief supporting Texas v. Pennsylvania, attempting to overturn 2020 election by discarding all votes in Georgia, Michigan, Pennsylvania, and Wisconsin",
        impact: 'Supreme Court unanimously rejected case, stating Texas lacked standing. Legal experts called it a "Hail Mary" with no legal merit. Speaker Pelosi: signers "brought dishonor to the House" and "chose to subvert the Constitution and undermine public trust in our sacred democratic institutions."',
        source: "Wikipedia, WGLT, Supreme Court records, Texas v. Pennsylvania case documents",
      },
      {
        title: "January 6 Accountability Avoidance",
        promise: 'January 8, 2021: Stated Trump "bears responsibility" for January 6 attack on Capitol',
        reality: 'Voted against both impeachment efforts. Dismissed January 6 Select Committee as "partisan circus" and refused to participate in investigation',
        impact: "Acknowledged responsibility but actively opposed every mechanism to investigate and hold leaders accountable. Claimed individuals who committed crimes should be held accountable while blocking accountability for leadership.",
        source: "ABC7 Chicago, LaHood House website, impeachment voting records",
      },
      {
        title: "Trump Endorsement After Jan 6",
        promise: "Held Trump accountable for insurrection; acknowledged his responsibility for violence",
        reality: 'January 2024: Endorsed Donald Trump for president, calling him "the right leader for the country"',
        impact: "Complete 180-degree reversal from acknowledging Trump's responsibility for January 6 to endorsing him for president. Endorsement came despite Trump's continued false claims about 2020 election. Pattern: principles abandoned when politically convenient.",
        source: "LaHood for Congress website, IPM Newsroom",
      },
    ],
  },
  workers: {
    title: "Worker Betrayal",
    icon: <Users className="w-6 h-6 text-orange-600" />,
    description: "Claims to support workers while earning 0% from labor unions",
    items: [
      {
        title: "Perfect Anti-Worker Record",
        promise: 'Claims to "support American workers" and represent working-class rural constituents',
        reality: "0% AFL-CIO score in 2023. Perfect anti-worker voting record.",
        impact: "Voted against worker protections, unemployment benefits, fair labor standards, and infrastructure job creation. Opposed bipartisan infrastructure bill that would create thousands of good-paying jobs in his district.",
        source: "AFL-CIO Scorecard, voting record",
      },
      {
        title: "Trade Policy Contradiction",
        promise: "As co-chair of U.S.-China Working Group, championed USMCA and expressed concern about protecting farmers from Chinese retaliation",
        reality: "Supported Trump tariffs that triggered exactly the Chinese retaliation he warned about, disrupting Illinois soybean and agricultural markets",
        impact: "Trade policies directly harmed the agricultural workers and farmers he claims to represent. Illinois farmers bore the cost of his political positioning and party loyalty.",
        source: "Politico, voting record, news reports",
      },
      {
        title: "Infrastructure Jobs Opposed, Credit Taken",
        promise: "Claims to support infrastructure investment and job creation in district",
        reality: "Voted against $1 trillion bipartisan infrastructure bill. Later requested over $23 million for district infrastructure projects and took credit for improvements funded by the bill.",
        impact: "Opposed federal infrastructure spending and job creation when it required bipartisan cooperation, then took credit for the results. Democrats accused him of hypocrisy.",
        source: "NPR Illinois, IDCCA, LaHood House website",
      },
    ],
  },
  ethics: {
    title: "Ethics Concerns",
    icon: <Building2 className="w-6 h-6 text-purple-600" />,
    description: "Questions about financial disclosures and accountability",
    items: [
      {
        title: "Delayed Stock Disclosure & Special Interest Money",
        promise: "Transparency and ethical conduct in financial matters",
        reality: "Failed to timely report $15,000 West Suburban Bancorp stock sale in 2022; didn't report until September 2024. Raised $3.7M in 2023-2024 with 57.3% from PACs. Top donors: Insurance ($258,753), Securities/Investment ($229,528), Pharmaceuticals ($142,275), AIPAC ($123,000+).",
        impact: "Raises serious ethics concerns about transparency. Received over $200,000 from lobbyists in 2024 cycle alone, making him one of top recipients of lobbyist donations. Questions whose interests he represents: constituents or donors?",
        source: "OpenSecrets, FEC records",
      },
      {
        title: "Family Ethics Issues",
        promise: "High ethical standards and integrity",
        reality: "Father Ray LaHood paid $40,000 fine in 2019 for misleading statements about foreign loan while serving in Obama Cabinet",
        impact: "Raises questions about ethical standards within LaHood family political dynasty. Ray held same seat 1995-2009; Darin benefited from name recognition.",
        source: "News reports, federal ethics filings",
      },
      {
        title: "Ethics Legislation Opposition",
        promise: "Claims to support government accountability and transparency",
        reality: "Voted against Combatting Financial Conflicts of Interest in Government Act (2021), which would increase transparency and accountability for conflicts of interest",
        impact: "Actively opposed measures to increase government transparency when it came time to vote. Says one thing about ethics, votes another way when accountability measures are proposed.",
        source: "Congressional voting record",
      },
    ],
  },
}

export function KeyContradictions() {
  return (
    <section id="contradictions" className="py-16 px-4 bg-gray-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Key Contradictions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A detailed examination of LaHood's promises versus his actual voting record
          </p>
        </div>

        <Card className="backdrop-blur-sm bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-red-800">The Evidence</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="fiscal" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                {Object.entries(contradictionSections).map(([key, section]) => (
                  <TabsTrigger key={key} value={key} className="text-xs md:text-sm">
                    <span className="hidden lg:inline">{section.title}</span>
                    <span className="lg:hidden">{section.icon}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              {Object.entries(contradictionSections).map(([key, section]) => (
                <TabsContent key={key} value={key}>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      {section.icon}
                      <div>
                        <h3 className="text-2xl font-bold">{section.title}</h3>
                        <p className="text-gray-600">{section.description}</p>
                      </div>
                    </div>
                    {section.items.map((item, index) => (
                      <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md border-l-4 border-red-600">
                        <h4 className="font-bold text-lg mb-4 text-gray-900">{item.title}</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <span className="font-semibold text-blue-600 min-w-[80px]">Promise:</span>
                            <p className="text-gray-700 flex-1">{item.promise}</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="font-semibold text-red-600 min-w-[80px]">Reality:</span>
                            <p className="text-gray-700 flex-1">{item.reality}</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="font-semibold text-purple-600 min-w-[80px]">Impact:</span>
                            <p className="text-gray-700 flex-1">{item.impact}</p>
                          </div>
                          <div className="flex items-start gap-3 mt-4 pt-3 border-t border-gray-200">
                            <span className="text-sm text-gray-500 min-w-[80px]">Source:</span>
                            <p className="text-sm text-gray-500 flex-1">{item.source}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
