"use server"

import { z } from "zod"

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    message: z.string().min(10),
})

export type FormState = {
    success: boolean
    message: string
    errors?: Record<string, string[]>
}

export async function submitContact(prevState: FormState, formData: FormData): Promise<FormState> {
    const rawData = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
    }

    const result = formSchema.safeParse(rawData)

    if (!result.success) {
        return {
            success: false,
            message: "Please fix the errors below.",
            errors: result.error.flatten().fieldErrors,
        }
    }

    // ---------------------------------------------------------------------------
    // BACKEND INTEGRATION POINT
    // ---------------------------------------------------------------------------
    // This is where the email would be sent. 
    // Since no email provider keys were provided, we log the message to the server console.
    // To make this live:
    // 1. Install nodemailer or resend: `npm install resend`
    // 2. Add API Key to .env.local
    // 3. Uncomment validation code below

    console.log("------------------------------------------")
    console.log("🚀 NEW CONTACT FORM SUBMISSION RECEIVED")
    console.log("------------------------------------------")
    console.log("Name:   ", result.data.name)
    console.log("Email:  ", result.data.email)
    console.log("Phone:  ", result.data.phone)
    console.log("Message:", result.data.message)
    console.log("------------------------------------------")

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
        success: true,
        message: "Thank you! Your message has been securely logged on our server.",
    }
}
