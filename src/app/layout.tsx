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
  title: "Advocate Md. Shahadat Hossain - Legal Services in Bangladesh",
  description: "Experienced legal counsel specializing in civil litigation, criminal defense, and corporate law. Serving clients across Bangladesh with dedication and expertise.",
  keywords: "lawyer, advocate, legal services, Bangladesh, civil litigation, criminal defense, corporate law",
  authors: [{ name: "Advocate Md. Shahadat Hossain" }],
  openGraph: {
    title: "Advocate Md. Shahadat Hossain - Legal Services",
    description: "Expert legal counsel with 15+ years of experience in Bangladesh",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
