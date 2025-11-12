import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { AIChatBot } from "@/components/AIChatBot";
import { LanguageProvider } from "@/contexts/LanguageContext";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adventure Sumbawa Island | Snorkeling with Whale Shark Sumbawa",
  description: "Operator wisata lokal terpercaya di Sumbawa. Spesialis snorkeling dengan hiu paus di Teluk Saleh, Labuhan Jambu. Paket wisata Pulau Moyo, Kenawa, dan destinasi eksotis lainnya.",
  icons: {
    icon: "/images/logoshare.PNG",
    shortcut: "/images/logoshare.PNG",
    apple: "/images/logoshare.PNG",
  },
  openGraph: {
    title: "Adventure Sumbawa Island | Snorkeling with Whale Shark Sumbawa",
    description: "Operator wisata lokal terpercaya di Sumbawa. Spesialis snorkeling dengan hiu paus di Teluk Saleh, Labuhan Jambu. Paket wisata Pulau Moyo, Kenawa, dan destinasi eksotis lainnya.",
    url: "https://adventuresumbawaisland.com",
    siteName: "Adventure Sumbawa Island",
    images: [
      {
        url: "/images/logoshare.PNG?v=2024",
        width: 512,
        height: 512,
        alt: "Adventure Sumbawa Island Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adventure Sumbawa Island | Snorkeling with Whale Shark Sumbawa",
    description: "Operator wisata lokal terpercaya di Sumbawa. Spesialis snorkeling dengan hiu paus di Teluk Saleh, Labuhan Jambu.",
    images: ["/images/logoshare.PNG?v=2024"],
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
        <meta property="og:image" content="/images/logoshare.PNG?v=2024" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="twitter:image" content="/images/logoshare.PNG?v=2024" />
        <link rel="icon" type="image/png" href="/images/logoshare.PNG" />
      </head>
      <ClientBody className={poppins.className}>
        <LanguageProvider>
          <Header />
          {children}
          <AIChatBot />
          <WhatsAppButton />
        </LanguageProvider>
      </ClientBody>
    </html>
  );
}
