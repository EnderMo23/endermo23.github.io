import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chug Store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header></Header>

        {children}

        <Footer></Footer>
      </body>
    </html>
  );
}
