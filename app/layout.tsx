import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://freevoice.ai"),
  title: {
    default: "FreeVoice.ai — Every AI Voice Tool, Completely Free",
    template: "%s — FreeVoice.ai",
  },
  description:
    "Text-to-speech, transcription, voice cloning, and more — all in one place. No credit card required. 5,000 free tokens daily.",
  openGraph: {
    type: "website",
    siteName: "FreeVoice.ai",
    title: "FreeVoice.ai — Every AI Voice Tool, Completely Free",
    description:
      "Text-to-speech, transcription, voice cloning, and more — all in one place. No credit card required.",
    url: "https://freevoice.ai",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FreeVoice.ai — Every AI Voice Tool, Completely Free",
    description:
      "Text-to-speech, transcription, voice cloning, and more — all in one place. No credit card required.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
