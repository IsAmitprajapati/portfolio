import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amit Prajapati | Full Stack Engineer | Paytm Application",
  description: "Interactive portfolio of Amit Prajapati, applying as a Full Stack Developer at Paytm. Explore the interactive Paytm Soundbox simulation, wallet, and projects ledger.",
  keywords: [
    "Amit Prajapati",
    "Full Stack Developer",
    "Paytm Careers",
    "Next.js Developer",
    "React Developer",
    "MERN Stack",
    "Paytm Soundbox",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased light`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
