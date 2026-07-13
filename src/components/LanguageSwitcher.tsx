import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageSwitcherProps {
  variant?: 'header' | 'mobile' | 'footer';
  showLabels?: boolean;
}

export function LanguageSwitcher({ variant = 'header' }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex flex-col items-center justify-center group text-white hover:text-gray-200 transition-colors"
      title={language === 'id' ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
    >
      {/* Text Label ID | EN - Highlight active language */}
      <div className="flex items-center gap-0.5 text-[10px] md:text-xs font-semibold tracking-wider mb-[-2px]">
        <span className={language === 'id' ? "text-white font-bold" : "text-gray-400 font-normal"}>ID</span>
        <span className="text-gray-400">|</span>
        <span className={language === 'en' ? "text-white font-bold" : "text-gray-400 font-normal"}>EN</span>
      </div>

      {/* Globe Icon */}
      <Globe
        strokeWidth={1.5}
        className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110 duration-200"
      />
    </button>
  );
}
