import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sadek Soliman | Senior Frontend Developer & React Native Specialist",
  description: "Portfolio of Sadek Soliman, Senior Frontend Developer and React Native Specialist with 6+ years experience in Next.js, React, TypeScript, and Mobile development across KSA, Jordan & Egypt.",
  keywords: [
    "Sadek Soliman",
    "Frontend Developer",
    "React Native Specialist",
    "Next.js Developer",
    "React Developer Saudi Arabia",
    "React Developer Egypt",
    "TypeScript Developer",
    "Full Stack Frontend",
    "JeelPay Developer",
    "Qiyas Saudi Arabia Developer"
  ],
  authors: [{ name: "Sadek Soliman" }],
  openGraph: {
    title: "Sadek Soliman | Senior Frontend Developer & React Native Specialist",
    description: "Results-driven Frontend Developer with 6+ years experience creating scalable web & mobile apps in Next.js, React Native & TypeScript.",
    url: "https://sadek-soliman.dev",
    siteName: "Sadek Soliman Profile",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-[#080a11] text-slate-100 min-h-screen selection:bg-sky-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
