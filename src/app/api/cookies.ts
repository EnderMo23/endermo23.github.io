"use server"
import { cookies } from "next/headers";

export async function setCookies(email: string) {
  const cookieStore = cookies()
  cookieStore.set("email", email, {
    sameSite: "none",
    secure: true
  })
}