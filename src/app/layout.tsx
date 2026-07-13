import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/contexts/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Go Whale Shark Sumbawa - Whale Shark Tour Labuhan Jambu",
  description: "Trusted local tour operator in Sumbawa. Specializing in whale shark snorkeling at Teluk Saleh, Labuhan Jambu. Tour packages to Moyo Island, Kenawa, and other exotic destinations.",
  icons: {
    icon: "/images/logo.webp",
    shortcut: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
  openGraph: {
    title: "Go Whale Shark Sumbawa - Whale Shark Tour Labuhan Jambu",
    description: "Trusted local tour operator in Sumbawa. Specializing in whale shark snorkeling at Teluk Saleh, Labuhan Jambu. Tour packages to Moyo Island, Kenawa, and other exotic destinations.",
    url: "https://gowhalesharksumbawa.com",
    siteName: "Go Whale Shark Sumbawa",
    images: [
      {
        url: "/images/logo.webp?v=2025",
        width: 512,
        height: 512,
        alt: "Go Whale Shark Sumbawa Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Go Whale Shark Sumbawa - Whale Shark Tour Labuhan Jambu",
    description: "Trusted local tour operator in Sumbawa. Specializing in whale shark snorkeling at Teluk Saleh, Labuhan Jambu.",
    images: ["/images/logo.webp?v=2025"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta property="og:image" content="/images/logo.webp?v=2025" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="twitter:image" content="/images/logo.webp?v=2025" />
        <link rel="icon" type="image/webp" href="/images/logo.webp" />

        {/* Preload critical images for better performance */}
        <link rel="preload" as="image" href="/images/logo.webp" />
      </head>
      <ClientBody className={poppins.className}>
        <LanguageProvider>
          <Header />
          {children}
          <WhatsAppButton />
        </LanguageProvider>
      </ClientBody>
    </html>
  );
}
