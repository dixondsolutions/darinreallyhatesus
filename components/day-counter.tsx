"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DayCounter() {
  const [days, setDays] = useState(0)

  useEffect(() => {
    const startDate = new Date("2025-02-01")
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - startDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDays(diffDays)

    const timer = setInterval(
      () => {
        setDays((prev) => prev + 1)
      },
      24 * 60 * 60 * 1000,
    ) // Update every 24 hours

    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">Days Since Darin Violated His Oath</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-8xl font-bold text-center">{days}</p>
      </CardContent>
    </Card>
  )
}
