import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileSignature, Users, DollarSign, Scale } from "lucide-react"

const timelineEvents = [
  {
    date: "April 2017",
    title: "Revenue-Neutral Promise",
    description: "LaHood states he will only vote for tax cuts that are 'revenue neutral' to avoid adding to the deficit.",
    icon: <FileSignature className="w-6 h-6 text-blue-500" />,
    details:
      "LaHood explicitly promised fiscal responsibility, stating he would not support legislation that increases the national debt.",
  },
  {
    date: "December 2017",
    title: "Tax Cuts Promise Broken",
    description: "LaHood votes for Tax Cuts and Jobs Act, adding $1.414 trillion to national debt.",
    icon: <DollarSign className="w-6 h-6 text-red-500" />,
    details:
      "Despite his April 2017 promise, LaHood voted for deficit-exploding tax cuts that primarily benefited wealthy Americans and corporations. Congressional Budget Office confirmed the massive deficit increase.",
  },
  {
    date: "December 11, 2020",
    title: "Attempted Election Overturn",
    description: "LaHood signs amicus brief supporting Texas v. Pennsylvania to overturn 2020 election.",
    icon: <Scale className="w-6 h-6 text-red-500" />,
    details:
      "LaHood was among 126 House Republicans supporting a lawsuit to discard all votes in Georgia, Michigan, Pennsylvania, and Wisconsin. The Supreme Court unanimously rejected the case. Speaker Pelosi stated signers 'brought dishonor to the House.'",
  },
  {
    date: "January 6, 2021",
    title: "Capitol Insurrection",
    description: "Trump supporters attack Capitol; LaHood initially says Trump 'bears responsibility.'",
    icon: <Users className="w-6 h-6 text-orange-500" />,
    details:
      "After the violent attack on the Capitol, LaHood acknowledged Trump's responsibility but voted against both impeachment efforts and later dismissed the January 6 Select Committee as a 'partisan circus.'",
  },
  {
    date: "January 2024",
    title: "Trump Endorsement",
    description: "LaHood endorses Trump for president, reversing his January 6 accountability stance.",
    icon: <FileSignature className="w-6 h-6 text-blue-500" />,
    details:
      "Despite previously stating Trump bears responsibility for the January 6 insurrection, LaHood endorsed Trump, calling him 'the right leader for the country.'",
  },
  {
    date: "May 2025",
    title: "$3.4 Trillion Deficit Vote",
    description: "LaHood votes for 'One Big Beautiful Bill Act' adding $3.4 trillion to deficit.",
    icon: <DollarSign className="w-6 h-6 text-red-500" />,
    details:
      "LaHood praised this deficit-exploding legislation as 'bold' and 'comprehensive,' completely abandoning his 2017 promise of fiscal responsibility. The bill also cuts Illinois Medicaid by $48 billion, threatening 9 rural hospitals with closure and causing 330,000 Illinoisans to lose coverage.",
  },
]

export function CrisisTimeline() {
  return (
    <Card className="backdrop-blur-sm bg-white/30">
      <CardHeader>
        <CardTitle className="text-2xl text-red-800">Timeline of Broken Promises and Contradictions</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {timelineEvents.map((event, index) => (
            <li key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                {event.icon}
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {event.title}
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                  {event.date}
                </span>
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{event.description}</p>
              <div className="mt-4 p-4 bg-white/50 rounded-lg shadow-md">
                <p className="text-sm text-gray-600">{event.details}</p>
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
