import type { Metadata } from "next";
import Script from "next/script";
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "FreeVoice.ai",
  url: "https://freevoice.ai",
  description:
    "Free AI voice tools — text-to-speech, transcription, voice changer, and more. No signup required.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  creator: {
    "@type": "Organization",
    name: "FreeVoice.ai",
    url: "https://freevoice.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MSGRCE90FG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MSGRCE90FG');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
