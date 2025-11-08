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
  title: "Adventure Sumbawa Island | Snorkeling with Whale Shark Sumbawa",
  description: "Operator wisata lokal terpercaya di Sumbawa. Spesialis snorkeling dengan hiu paus di Teluk Saleh, Labuhan Jambu. Paket wisata Pulau Moyo, Kenawa, dan destinasi eksotis lainnya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
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
