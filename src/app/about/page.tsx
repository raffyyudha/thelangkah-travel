"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Users, Shield, Leaf, Award, Heart, MapPin, Compass, Briefcase, Map, Waves } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-start">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sumbawa.jpg"
            alt="About Go Whale Shark Sumbawa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 max-w-3xl">
            {t.aboutTitle}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            {t.aboutDesc}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6 text-center">
              {t.aboutOurStory}
            </h2>
            <div className="text-gray-700 leading-relaxed text-justify space-y-4 max-w-5xl mx-auto whitespace-pre-line">
              {t.aboutOurStoryDesc}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">{t.aboutMissionTitle}</h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {t.aboutMissionDesc1}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">{t.aboutVisionTitle}</h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {t.aboutVisionDesc1}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">{t.aboutWhyChooseUs}</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00a6b5] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t.aboutLocalExperience}</h3>
                    <p className="text-gray-600">{t.localExpertiseDesc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00a6b5] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t.aboutBestValue}</h3>
                    <p className="text-gray-600">{t.aboutBestValueDesc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00a6b5] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t.aboutFlexibleTitle}</h3>
                    <p className="text-gray-600">{t.aboutFlexibleDesc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00a6b5] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t.supportedWay}</h3>
                    <p className="text-gray-600">{t.supportedWayDesc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00a6b5] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t.aboutProDocumentationTitle}</h3>
                    <p className="text-gray-600">{t.aboutProDocumentationDesc}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00a6b5] to-[#008c9a] text-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.aboutCTAHeading}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t.aboutCTADesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6282341331975?text=Halo%20Adventure%20Sumbawa%20Island,%20saya%20ingin%20booking%20trip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#00a6b5] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              <MessageCircle size={24} />
              {t.tourChatWhatsApp}
            </a>
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#00a6b5] transition-all transform hover:scale-105"
            >
              {t.aboutCTASeePackages}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00a6b5]/10 text-[#00a6b5] mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function TeamCard({ name, role, icon, description }: { name: string; role: string; icon: string; description: string }) {
  const getIcon = () => {
    switch (icon) {
      case 'compass': return <Compass className="w-16 h-16" />;
      case 'briefcase': return <Briefcase className="w-16 h-16" />;
      case 'map': return <Map className="w-16 h-16" />;
      case 'waves': return <Waves className="w-16 h-16" />;
      default: return <Users className="w-16 h-16" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 bg-gradient-to-br from-[#00a6b5] to-[#0a3d52] flex items-center justify-center">
        <div className="text-white">
          {getIcon()}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-gray-900">{name}</h3>
        <p className="text-[#00a6b5] font-semibold mb-3">{role}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
