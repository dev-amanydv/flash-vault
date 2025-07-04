import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlashVault – Secure & Instant Payment Transfers",
  description:
    "FlashVault is a modern payment platform that enables fast, secure, and seamless money transfers. Send and receive money instantly with advanced encryption and real-time tracking.",
  keywords: [
    "FlashVault",
    "Payment App",
    "Money Transfer",
    "Send Money",
    "Receive Payments",
    "Secure Payments",
    "Digital Wallet",
    "Online Payments",
    "Fast Money Transfer",
    "Mobile Payments"
  ],
  authors: [{ name: "Aman Yadav", url: "https://github.com/dev-amanydv" }],
  creator: "Aman Yadav",
  openGraph: {
    title: "FlashVault – Secure & Instant Payment Transfers",
    description:
      "Experience hassle-free digital payments with FlashVault. Send, receive, and manage money effortlessly on a secure and intuitive platform.",
    url: "https://flashvault.app", // replace with your actual URL
    siteName: "flashvault",
    images: [
      {
        url: "https://flashvault.app/og-image.png", // update this to your actual OG image
        width: 1200,
        height: 630,
        alt: "flashvault - Send and receive money easily",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/FlashVault.jpg" type="image/jpeg" />
      </head>
      <Providers>
        <body className={inter.className}>
          <div className="bg-slate-900 font-semibold text-white text-center flex items-center justify-center h-10 w-full">
              <h1><span className="text-lg">🚀  </span> Currently in development, Join our early access list!</h1>
          </div>
        <div className="">
        {children}
        </div>
        </body>
      </Providers>
    </html>
  );
}
