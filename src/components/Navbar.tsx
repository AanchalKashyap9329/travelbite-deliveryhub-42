
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-semibold text-gray-900 dark:text-white">Danteserve</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="flex items-baseline space-x-4">
              <a href="#services" className="text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('ourServices')}
              </a>
              <a href="#about" className="text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('about')}
              </a>
              <a href="#contact" className="text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('contact')}
              </a>
            </div>
            <LanguageSelector />
            <ThemeToggle />
            <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
              {t('getStarted')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium">
                {t('ourServices')}
              </a>
              <a href="#about" className="block text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium">
                {t('about')}
              </a>
              <a href="#contact" className="block text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium">
                {t('contact')}
              </a>
              <div className="px-3 py-2">
                <LanguageSelector />
              </div>
              <button className="w-full mt-4 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                {t('getStarted')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
