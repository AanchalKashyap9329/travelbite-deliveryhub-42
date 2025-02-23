
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";

const GetStarted = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName"); // Get user name from localStorage

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/signup");
    }
  }, [navigate]);

  const handleGetStarted = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {t('welcomeUser').replace('{{name}}', userName || 'User')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {t('getStartedDescription')}
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            {t('getStarted')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
