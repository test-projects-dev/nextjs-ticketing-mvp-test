import type { Metadata, Viewport } from "next";
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
  title: "Event Ticketing MVP — Hello World",
  description:
    "A static preview of an event ticketing MVP — search, seats, checkout, and admin — built with Next.js, TypeScript, and Tailwind CSS.",
  openGraph: {
    title: "Event Ticketing MVP — Hello World",
    description:
      "A static preview of an event ticketing MVP — search, seats, checkout, and admin — built with Next.js, TypeScript, and Tailwind CSS.",
    type: "website",
  },
  metadataBase: new URL("https://nextjs-ticketing-mvp-test.vercel.app"),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
