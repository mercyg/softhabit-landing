import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://softhabit.app"),
  title: "SoftHabits — A Calmer Way to Build Habits",
  description:
    "SoftHabits is an iOS app for building habits gently, one check-in at a time. Launching soon.",
  keywords: [
    "habit tracker",
    "iOS app",
    "mindful habits",
    "gentle habit building",
    "wellness app",
  ],
  authors: [{ name: "Studio Rehoboth", url: "https://studiorehoboth.io" }],
  creator: "Studio Rehoboth",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://softhabit.app",
    siteName: "SoftHabits",
    title: "SoftHabits — A Calmer Way to Build Habits",
    description:
      "SoftHabits is an iOS app for building habits gently, one check-in at a time. Launching soon.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SoftHabits — soft habits. lasting change.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftHabits — A Calmer Way to Build Habits",
    description:
      "SoftHabits is an iOS app for building habits gently, one check-in at a time. Launching soon.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-cream text-charcoal font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
