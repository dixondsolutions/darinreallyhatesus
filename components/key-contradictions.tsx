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
        promise: 'Stated in April 2017 he would only vote for tax cuts that were "revenue neutral"',
        reality: "Voted for Tax Cuts and Jobs Act in December 2017, adding $1.414 trillion to national debt",
        impact: "Broke his promise within months, prioritizing tax cuts for the wealthy over fiscal responsibility",
        source: "Congressional Budget Office, Wikipedia",
      },
      {
        title: "The $3.4 Trillion Betrayal",
        promise: "Campaigned on reducing federal deficit, voted against Fiscal Responsibility Act of 2023",
        reality: 'Voted for "One Big Beautiful Bill Act" adding $3.4 trillion to deficit over 10 years',
        impact: 'Praised legislation as "bold" despite it being the opposite of fiscal conservatism',
        source: "Congressional Budget Office, WGLT",
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
        promise: 'Introduced "Rural and Underserved Small Hospital (RUSH) Protection Act" in 2021',
        reality: "Voted for bill cutting Illinois Medicaid by $48 billion, threatening 9 rural hospitals with closure",
        impact: "Governor Pritzker warned 330,000 Illinoisans would lose coverage; hospitals may close in 8-10 years",
        source: "Capitol News Illinois, Springfield Business Journal",
      },
      {
        title: "Medicaid Cuts Hit Constituents",
        promise: "Claims to represent rural Illinois families",
        reality: "Voted to slash Medicaid that pays for 40% of childbirths and 69% of nursing home care in his district",
        impact: "Directly harms the most vulnerable constituents he claims to serve",
        source: "Capitol News Illinois",
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
        promise: 'Stated humans "play a role" in climate change and there is "no doubt about that"',
        reality: "0% lifetime rating from League of Conservation Voters",
        impact: "Despite acknowledging the science, votes against environmental protection consistently",
        source: "League of Conservation Voters, OnTheIssues",
      },
      {
        title: "Anti-Environment Consistency",
        promise: "N/A",
        reality: "Annual environmental scores ranging from 3% to 17% - near-perfect anti-environment record",
        impact: "Opposes clean energy, climate action, and environmental protection measures",
        source: "League of Conservation Voters",
      },
      {
        title: "Agricultural Impact Ignored",
        promise: "Claims to support farmers",
        reality: "Votes against climate measures that would help farmers adapt to changing conditions",
        impact: "Illinois farmers face increasing climate challenges without policy support",
        source: "Voting record analysis",
      },
    ],
  },
  democracy: {
    title: "Attack on Democracy",
    icon: <Scale className="w-6 h-6 text-blue-600" />,
    description: "Supported overturning legitimate election results",
    items: [
      {
        title: "Texas Lawsuit Support",
        promise: "Oath to uphold the Constitution",
        reality: "Signed amicus brief supporting Texas v. Pennsylvania to overturn 2020 election results in 4 states",
        impact: 'Supreme Court rejected case unanimously; Speaker Pelosi said signers "brought dishonor to the House"',
        source: "Wikipedia, WGLT, Supreme Court records",
      },
      {
        title: "January 6 Accountability Avoidance",
        promise: 'Stated Trump "bears responsibility" for January 6 attack',
        reality: 'Dismissed January 6 Select Committee as "partisan circus" and refused to participate',
        impact: "Acknowledged responsibility but opposed investigation and accountability",
        source: "ABC7 Chicago, LaHood House website",
      },
      {
        title: "Trump Endorsement After Jan 6",
        promise: "Held Trump accountable for insurrection",
        reality: "Endorsed Donald Trump for president in January 2024",
        impact: "Complete reversal from acknowledging Trump's responsibility to endorsing him",
        source: "LaHood for Congress, IPM Newsroom",
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
        promise: 'Claims to "support American workers"',
        reality: "0% AFL-CIO score in 2023",
        impact: "Voted against worker protections, unemployment benefits, and fair labor standards",
        source: "AFL-CIO Scorecard",
      },
      {
        title: "Trade Policy Contradiction",
        promise: "Championed USMCA trade agreement to help farmers",
        reality: "Supported tariffs that disrupted Illinois soybean markets and hurt farmers",
        impact: "Trade policies harmed the agricultural workers he claims to represent",
        source: "Politico, Voting record",
      },
      {
        title: "Infrastructure Jobs Opposed",
        promise: "N/A",
        reality: "Voted against bipartisan infrastructure bill that would create thousands of good-paying jobs",
        impact: "Opposed job creation in his own district",
        source: "NPR Illinois",
      },
    ],
  },
  ethics: {
    title: "Ethics Concerns",
    icon: <Building2 className="w-6 h-6 text-purple-600" />,
    description: "Questions about financial disclosures and accountability",
    items: [
      {
        title: "Delayed Stock Disclosure",
        promise: "Transparency and ethical conduct",
        reality: "Failed to timely report $15,000 West Suburban Bancorp stock sale in 2022",
        impact: "Didn't report until September 2024, raising ethics concerns",
        source: "OpenSecrets",
      },
      {
        title: "Family Ethics Issues",
        promise: "High ethical standards",
        reality: "Father Ray LaHood paid $40,000 fine in 2019 for misleading statements about foreign loan",
        impact: "Questions about ethical standards within LaHood's circle",
        source: "Various news reports",
      },
      {
        title: "Ethics Legislation Opposition",
        promise: "Government accountability",
        reality: "Voted against Combatting Financial Conflicts of Interest in Government Act (2021)",
        impact: "Opposed measures to increase transparency and accountability",
        source: "Voting record",
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
