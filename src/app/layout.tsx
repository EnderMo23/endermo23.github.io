import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chug Store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      {/* ADD NAVBAR HERE */}
      <body className={inter.className}>{children}</body>
      {/* ADD FOOTER HERE */}
    </html>
  );
}
