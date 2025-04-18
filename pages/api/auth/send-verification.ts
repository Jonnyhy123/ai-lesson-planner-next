import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../lib/prisma"
import { signIn } from "next-auth/react"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({ message: "Email is required" })
    }

    // Send verification email using NextAuth's email provider
    const result = await signIn('email', {
      email,
      redirect: false,
    })

    if (result?.error) {
      throw new Error(result.error)
    }

    return res.status(200).json({ message: "Verification email sent" })
  } catch (error) {
    console.error("Verification email error:", error)
    return res.status(500).json({ message: "Failed to send verification email" })
  }
} 