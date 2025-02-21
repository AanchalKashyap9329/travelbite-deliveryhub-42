
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'cgr', name: 'Chhattisgarhi', nativeName: 'छत्तीसगढ़ी' }
] as const;

const LanguageSelector = () => {
  const { currentLanguage, setLanguage, t } = useLanguage();

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
        <Globe className="w-5 h-5" />
        <span className="text-sm">{t('language')}</span>
      </button>
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-1">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => setLanguage(language.code)}
              className={`w-full text-left px-4 py-2 text-sm 
                ${currentLanguage === language.code 
                  ? 'bg-gray-100 dark:bg-gray-700' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                } text-gray-700 dark:text-gray-300`}
            >
              <span className="block text-sm">{language.nativeName}</span>
              <span className="block text-xs text-gray-500 dark:text-gray-400">
                {language.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
