"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, AlertTriangle } from "lucide-react"

export function DayCounter() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)

  useEffect(() => {
    // December 11, 2020 - When LaHood signed amicus brief supporting Texas v. Pennsylvania
    const startDate = new Date("2020-12-11")

    const updateTime = () => {
      const today = new Date()
      const diffTime = Math.abs(today.getTime() - startDate.getTime())
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
      const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60))

      setDays(diffDays)
      setHours(diffHours)
      setMinutes(diffMinutes)
    }

    updateTime()
    const timer = setInterval(updateTime, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="py-12">
      <Card className="bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white shadow-2xl border-4 border-red-800 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 animate-pulse" />

        <CardHeader className="pb-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <AlertTriangle className="w-8 h-8 animate-pulse" />
            <CardTitle className="text-center text-3xl md:text-4xl font-bold">
              Accountability Clock
            </CardTitle>
            <AlertTriangle className="w-8 h-8 animate-pulse" />
          </div>
          <p className="text-center text-lg md:text-xl text-red-100">
            Time since supporting efforts to overturn a legitimate election
          </p>
        </CardHeader>

        <CardContent className="pb-8">
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <p className="text-9xl md:text-[12rem] font-bold text-center leading-none tabular-nums animate-in">
                {days}
              </p>
              <p className="text-2xl md:text-3xl text-center mt-2 text-red-100">
                DAYS
              </p>
            </div>

            <div className="flex gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold tabular-nums">{hours}</p>
                <p className="text-sm md:text-base text-red-100 mt-1">Hours</p>
              </div>
              <div className="text-4xl md:text-5xl font-bold">:</div>
              <div>
                <p className="text-4xl md:text-5xl font-bold tabular-nums">{minutes}</p>
                <p className="text-sm md:text-base text-red-100 mt-1">Minutes</p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-red-100">
              <Calendar className="w-5 h-5" />
              <p className="text-sm md:text-base">
                Since December 11, 2020
              </p>
            </div>
            <div className="mt-4 text-center text-red-100 text-sm max-w-md mx-auto">
              <p>
                The day LaHood signed an amicus brief supporting Texas v. Pennsylvania,
                a lawsuit attempting to overturn the 2020 presidential election results
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
