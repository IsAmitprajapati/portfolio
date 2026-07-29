import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amit Prajapati | Full Stack Developer | Portfolio",
  description: "Portfolio of Amit Prajapati - Full Stack Developer specializing in React, Next.js, Node.js, and high-performance web applications. Tailored for creative and engineering roles.",
  icons: {
    icon: "/images/amitprajapati.png",
    shortcut: "/images/amitprajapati.png",
    apple: "/images/amitprajapati.png",
  },
  keywords: [
    "Amit Prajapati",
    "Full Stack Developer",
    "Web Development",
    "Mobile Application Development",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Adobe Application Portfolio",
    "Web Developer Portfolio",
    "Software Engineer",
    "MongoDB",
  ],
  authors: [{ name: "Amit Prajapati", url: "https://amitprajapati.co.in" }],
  creator: "Amit Prajapati",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://amitprajapati.co.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amit Prajapati | Full Stack Developer",
    description: "Discover Amit Prajapati's software engineering projects, tech stack, and interactive portfolio designed for creative applications.",
    url: "https://amitprajapati.co.in",
    siteName: "Amit Prajapati Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
