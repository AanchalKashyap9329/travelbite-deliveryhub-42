
import { Utensils, ShoppingBag, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleServiceClick = (service: 'food') => {
    navigate('/food-services');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-full animate-fade-down">
            {t('welcome')}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-up">
            {t('heroTitle')}
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8 animate-fade-up">
            Experience the best local cuisine delivered right to your doorstep
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up">
            <button 
              onClick={() => handleServiceClick('food')}
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              {t('orderFood')}
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('ourServices')}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our range of services designed to bring you the finest local cuisine with convenience and quality
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              title="Food Delivery"
              description="Fresh, local cuisine delivered to your doorstep. Experience authentic flavors with our quick delivery service."
              icon={Utensils}
            />
            <ServiceCard
              title="Bulk Orders"
              description="Special arrangements for events and gatherings. We cater to both small and large groups with customized menus."
              icon={ShoppingBag}
            />
            <ServiceCard
              title="Express Delivery"
              description="Quick delivery within 30 minutes for selected items and locations. Perfect for those urgent cravings."
              icon={Clock}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
