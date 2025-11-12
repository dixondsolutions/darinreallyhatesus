"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DayCounter } from "./components/day-counter"
import { CrisisTimeline } from "./components/crisis-timeline"
import { SignUpForm } from "./components/sign-up-form"
import { Background } from "./components/background"
import { AlertTriangle, ThumbsDown, Users, Vote, Scale, FileSignature } from "lucide-react"

export default function AccountabilityPage() {
  const constitutionalViolations = [
    {
      icon: <Scale className="w-6 h-6 text-red-500" />,
      title: "Separation of Powers",
      description:
        "DOGE bypasses congressional appropriations, violating Anti-Deficiency Act and Impoundment Control Act. Musk's team gained unauthorized access to Treasury systems.",
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      title: "Executive Overreach",
      description:
        "Musk's 'special government employee' status allows him to operate with minimal ethics oversight, despite holding $3B+ in federal contracts.",
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-500" />,
      title: "Fourth Amendment Concerns",
      description:
        "AI-driven analysis of contracts and employee performance risks unconstitutional surveillance of federal workers and citizens.",
    },
  ]

  const lahoodActions = [
    {
      icon: <ThumbsDown className="w-6 h-6 text-red-500" />,
      text: "Endorsed Trump's agenda in 2025 swearing-in statement",
    },
    { icon: <Vote className="w-6 h-6 text-red-500" />, text: "Voted against Trump's 2021 impeachment" },
    { icon: <AlertTriangle className="w-6 h-6 text-red-500" />, text: "Opposed January 6 commission" },
    { icon: <Scale className="w-6 h-6 text-orange-500" />, text: "Supported FISA reauthorization with reforms" },
    { icon: <FileSignature className="w-6 h-6 text-blue-500" />, text: "Silent on DOGE's constitutional overreach" },
  ]

  return (
    <div className="min-h-screen p-8 relative">
      <Background />
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          className="text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold text-red-800 drop-shadow-md mb-4">
            Constitutional Crisis: LaHood's Silence
          </h1>
          <p className="text-xl text-gray-700 mt-4">
            Rep. Darin LaHood's silence on Elon Musk's unprecedented influence over federal operations
          </p>
        </motion.div>

        <DayCounter />

        <CrisisTimeline />

        <Tabs defaultValue="violations" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="violations" className="text-lg">
              Constitutional Violations
            </TabsTrigger>
            <TabsTrigger value="lahood" className="text-lg">
              LaHood's Role
            </TabsTrigger>
            <TabsTrigger value="outlook" className="text-lg">
              Legal Outlook
            </TabsTrigger>
          </TabsList>
          <TabsContent value="violations">
            <Card className="backdrop-blur-sm bg-white/30">
              <CardHeader>
                <CardTitle className="text-2xl text-red-800">Key Constitutional Violations</CardTitle>
                <CardDescription className="text-lg">Musk's DOGE initiative threatens democratic norms</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-6">
                  {constitutionalViolations.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start space-x-4 bg-white/50 p-4 rounded-lg shadow"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {item.icon}
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="lahood">
            <Card className="backdrop-blur-sm bg-white/30">
              <CardHeader>
                <CardTitle className="text-2xl text-red-800">Rep. LaHood's Complicity</CardTitle>
                <CardDescription className="text-lg">Actions undermining constitutional duties</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-6">
                  {lahoodActions.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-4 bg-white/50 p-4 rounded-lg shadow"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {item.icon}
                      <span className="text-lg">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
                <p className="mt-6 text-lg font-semibold text-red-800">
                  By failing to challenge Musk's constitutional violations, LaHood risks violating his oath to "support
                  and defend the Constitution against all enemies, foreign and domestic".
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="outlook">
            <Card className="backdrop-blur-sm bg-white/30">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800">Legal Challenges and Outlook</CardTitle>
                <CardDescription className="text-lg">The path forward in this constitutional crisis</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-lg">
                  <li>
                    <strong>Lawsuits:</strong> Federal unions and advocacy groups have sued DOGE over Privacy Act
                    violations related to Treasury access.
                  </li>
                  <li>
                    <strong>Congressional Response:</strong> Senate Minority Leader Chuck Schumer accuses DOGE of
                    conducting a "hostile takeover" of the federal government.
                  </li>
                  <li>
                    <strong>Ethical Concerns:</strong> Musk's $3B+ in federal contracts with SpaceX and Tesla raises
                    significant conflict-of-interest questions.
                  </li>
                  <li>
                    <strong>Legal Review:</strong> Courts are examining whether DOGE's actions violate the Privacy Act,
                    Anti-Deficiency Act, and congressional spending authority.
                  </li>
                </ul>
                <p className="mt-6 text-lg font-semibold text-red-800">
                  This constitutional crisis centralizes power in the executive branch, undermining congressional
                  authority. The outcome of legal battles and public accountability efforts will determine whether this
                  marks a permanent shift in governance or a temporary breach of democratic norms.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="backdrop-blur-sm bg-white/30">
          <CardHeader>
            <CardTitle className="text-2xl text-red-800">Join the Movement</CardTitle>
            <CardDescription className="text-lg">
              Sign up to stay informed and take action against this constitutional crisis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignUpForm />
          </CardContent>
        </Card>

        <div className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg">
              Demand LaHood Uphold His Oath
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
