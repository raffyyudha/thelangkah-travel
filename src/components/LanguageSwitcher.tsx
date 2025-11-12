"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageSwitcherProps {
  variant?: 'header' | 'mobile' | 'footer';
  showLabels?: boolean;
}

export function LanguageSwitcher({ variant = 'header', showLabels = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  const getButtonClasses = () => {
    const baseClasses = "transition-all duration-200 hover:scale-110 rounded";
    const sizeClasses = {
      header: "w-6 h-6 md:w-8 md:h-8",
      mobile: "w-8 h-8",
      footer: "w-6 h-6"
    };
    
    return `${baseClasses} ${sizeClasses[variant]}`;
  };

  const getContainerClasses = () => {
    const baseClasses = "flex items-center";
    const variantClasses = {
      header: "gap-1 md:gap-2 bg-gray-50 rounded-lg p-1",
      mobile: "gap-2 bg-gray-100 rounded-lg p-2",
      footer: "gap-2"
    };
    
    return `${baseClasses} ${variantClasses[variant]}`;
  };

  return (
    <div className={getContainerClasses()}>
      {/* Indonesian Flag */}
      <button 
        onClick={toggleLanguage}
        className={`${getButtonClasses()} ${
          language === 'id' 
            ? 'opacity-100 ring-2 ring-[#00a6b5] ring-offset-1 shadow-md' 
            : 'opacity-60 hover:opacity-80'
        }`}
        title="Switch to Bahasa Indonesia"
        aria-label="Switch to Indonesian language"
      >
        <Image
          src="https://flagcdn.com/w40/id.png"
          alt="Indonesia Flag"
          width={32}
          height={32}
          className="rounded shadow-sm"
        />
      </button>
      
      {showLabels && (
        <span className={`text-xs ${language === 'id' ? 'font-semibold text-[#00a6b5]' : 'text-gray-600'}`}>
          ID
        </span>
      )}

      {/* UK/English Flag */}
      <button 
        onClick={toggleLanguage}
        className={`${getButtonClasses()} ${
          language === 'en' 
            ? 'opacity-100 ring-2 ring-[#00a6b5] ring-offset-1 shadow-md' 
            : 'opacity-60 hover:opacity-80'
        }`}
        title="Switch to English"
        aria-label="Switch to English language"
      >
        <Image
          src="https://flagcdn.com/w40/gb.png"
          alt="UK Flag"
          width={32}
          height={32}
          className="rounded shadow-sm"
        />
      </button>
      
      {showLabels && (
        <span className={`text-xs ${language === 'en' ? 'font-semibold text-[#00a6b5]' : 'text-gray-600'}`}>
          EN
        </span>
      )}
    </div>
  );
}
