
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
              At Danteserve, we strive to make travel and food services accessible, reliable, and enjoyable for everyone in Chhattisgarh. Our platform connects you with quality transportation options and delicious local cuisine.
            </p>
          </div>

          {/* Services Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Travel Services
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Reliable bike rentals</li>
                <li>• Professional taxi services</li>
                <li>• Convenient scooty rentals</li>
                <li>• 24/7 customer support</li>
                <li>• Competitive pricing</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Food Services
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Local cuisine delivery</li>
                <li>• Quick food delivery</li>
                <li>• Multiple restaurant options</li>
                <li>• Real-time order tracking</li>
                <li>• Special dietary options</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Danteserve?
            </h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Local Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Deep understanding of Chhattisgarh's transportation needs and food preferences.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Quality Service
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Committed to providing reliable, safe, and high-quality services to our customers.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Customer Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  24/7 dedicated support team to assist you with any queries or concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
