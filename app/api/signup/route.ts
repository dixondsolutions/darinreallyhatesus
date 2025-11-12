import { NextResponse } from "next/server"

const WEBHOOK_URL = "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZlMDYzMjA0MzY1MjZiNTUzMTUxMzUi_pc"

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error("Webhook submission failed")
    }

    return NextResponse.json({ message: "Signup successful" }, { status: 201 })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Failed to process signup" }, { status: 500 })
  }
}
