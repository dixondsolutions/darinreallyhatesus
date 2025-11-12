import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileSignature, Users, DollarSign, Scale } from "lucide-react"

const timelineEvents = [
  {
    date: "January 20, 2025",
    title: "DOGE Initiative Launched",
    description: "Trump signs an executive order rebranding USDS as DOGE, granting it broad authority.",
    icon: <FileSignature className="w-6 h-6 text-blue-500" />,
    details:
      "The executive order establishes DOGE as a temporary organization set to terminate on July 4, 2026, with authority to 'maximize governmental efficiency'.",
  },
  {
    date: "January 29, 2025",
    title: "Federal Workforce Proposal",
    description: "DOGE proposes controversial plan to incentivize federal employee resignations.",
    icon: <Users className="w-6 h-6 text-orange-500" />,
    details:
      "The proposal, leaked to the press, outlines a tiered buyout system based on years of service and position.",
  },
  {
    date: "February 3, 2025",
    title: "USAID Closed & Treasury Access",
    description: "Musk abruptly closes USAID and gains access to $6 trillion Treasury payment systems.",
    icon: <DollarSign className="w-6 h-6 text-red-500" />,
    details: "This action sparked immediate international condemnation and accusations of financial malfeasance.",
  },
  {
    date: "February 4, 2025",
    title: "Legal Challenges Begin",
    description: "Unions and advocacy groups sue DOGE over privacy violations and overreach.",
    icon: <Scale className="w-6 h-6 text-purple-500" />,
    details:
      "Multiple lawsuits were filed across various jurisdictions, alleging violations of the First, Fourth, and Fifth Amendments.",
  },
]

export function CrisisTimeline() {
  return (
    <Card className="backdrop-blur-sm bg-white/30">
      <CardHeader>
        <CardTitle className="text-2xl text-red-800">Constitutional Crisis Timeline</CardTitle>
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
