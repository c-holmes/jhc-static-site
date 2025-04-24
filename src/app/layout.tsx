import type { Metadata } from "next";
import { Nav } from "./components/Nav";
import { Indie_Flower } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";

const indieFlower = Indie_Flower({
  variable: "--font-indie-flower",
  subsets: ["latin"],
  weight: ["400"], // Indie Flower only supports 400 weight
});

export const metadata: Metadata = {
  title: "Janet Holmes Consulting",
  description:
    "I am a visual practitioner who uses graphic recording and graphic facilitation to help teams and organizations make sense of their conversations. I have a passion for helping people understand and communicate complex ideas through visual means.",
  icons: {
    icon: "/jhc-favicon.ico",
  },
  openGraph: {
    title: "Janet Holmes Consulting",
    description:
      "I am a visual practitioner who uses graphic recording and graphic facilitation to help teams and organizations make sense of their conversations.",
    url: "https://www.janetholmesconsulting.com",
    siteName: "Janet Holmes Consulting",
    images: [
      {
        url: "/jhc-social-share.jpg",
        width: 1200,
        height: 630,
        alt: "Janet Holmes Consulting - Visual Practitioner",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${indieFlower.variable} antialiased`}>
        <Nav />
        <div className="max-w-screen-lg mx-auto p-4 font-[family-name:var(--font-geist-sans)]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
