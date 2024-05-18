"use server"
import { cookies } from "next/headers";

export async function testCookies(username: string, email: string, password: string) {
    const cookieStore = cookies()
    cookieStore.set("Username", username, {
        sameSite: "none",
        secure: true
    })
    cookieStore.set("Email", email, {
      sameSite: "none",
      secure: true
  })
  cookieStore.set("Password", password, {
    sameSite: "none",
    secure: true
})
    console.log("Cookies set with name moritz")
}