
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t('back')}
        </button>

        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Danteserve
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Your Ultimate Travel & Food Companion in Chhattisgarh
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Danteserve aims to revolutionize how people in Chhattisgarh experience travel and food services. We bring convenience, reliability, and local flavors right to your fingertips, making every journey and meal memorable.
            </p>
          </div>

          {/* What We Offer */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Travel Services
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• Comfortable and reliable bike rentals</li>
                  <li>• Professional taxi services</li>
                  <li>• Convenient scooty rentals</li>
                  <li>• 24/7 customer support</li>
                  <li>• GPS-enabled vehicle tracking</li>
                  <li>• Flexible rental durations</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Food Services
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• Local Chhattisgarhi cuisine</li>
                  <li>• Fast food delivery</li>
                  <li>• Café & beverage options</li>
                  <li>• Live order tracking</li>
                  <li>• Multiple payment options</li>
                  <li>• Special dietary considerations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Danteserve?
            </h2>
            <div className="grid gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Local Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We understand Chhattisgarh like no other. Our deep roots in the local community help us provide services that are perfectly tailored to local needs and preferences.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Quality Assurance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  All our vehicles undergo regular maintenance, and our food partners are carefully selected to ensure the highest quality standards in hygiene and taste.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Customer-Centric Approach
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our dedicated support team is available round the clock to assist you. We value your feedback and continuously improve our services based on customer suggestions.
                </p>
              </div>
            </div>
          </div>

          {/* Safety & Hygiene */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Safety & Hygiene Standards
            </h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li>• Regular sanitization of all vehicles</li>
                <li>• Strict food safety protocols</li>
                <li>• Verified and trained delivery partners</li>
                <li>• Contactless delivery options</li>
                <li>• Regular health checks for staff</li>
                <li>• GPS tracking for all deliveries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
