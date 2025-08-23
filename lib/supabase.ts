import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type BookingData = {
  name: string
  email: string
  phone: string
  facility: string
  purpose: string
  booking_date: string
  booking_time: string
  message?: string
}

export async function createBooking(bookingData: BookingData) {
  const { data, error } = await supabase.from("bookings").insert([bookingData]).select()

  if (error) {
    throw error
  }

  return data
}

export async function getBookings() {
  const { data, error } = await supabase.from("bookings").select("*").order("created_at", { ascending: false })

  if (error) {
    throw error
  }

  return data
}
