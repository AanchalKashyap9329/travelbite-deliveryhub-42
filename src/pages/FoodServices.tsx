
import { useLanguage } from "@/contexts/LanguageContext";
import { Star, ArrowLeft, UtensilsCrossed, Coffee, Pizza } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FoodOption {
  icon: any;
  name: string;
  cuisine: string;
  description: string;
  rating: number;
  reviews: number;
  deliveryTime: string;
  minOrder: string;
}

const FoodServices = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const foodServices: FoodOption[] = [
    {
      icon: UtensilsCrossed,
      name: "Local Delights",
      cuisine: "Chhattisgarhi & North Indian",
      description: "Authentic local cuisine and north Indian favorites delivered to your doorstep",
      rating: 4.8,
      reviews: 342,
      deliveryTime: "30-40 min",
      minOrder: "₹99"
    },
    {
      icon: Pizza,
      name: "Fast Food Express",
      cuisine: "Fast Food & Snacks",
      description: "Quick bites, pizzas, burgers, and more for your cravings",
      rating: 4.6,
      reviews: 256,
      deliveryTime: "25-35 min",
      minOrder: "₹149"
    },
    {
      icon: Coffee,
      name: "Café & Beverages",
      cuisine: "Beverages & Snacks",
      description: "Fresh coffee, tea, smoothies, and light snacks",
      rating: 4.7,
      reviews: 189,
      deliveryTime: "20-30 min",
      minOrder: "₹79"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300 fill-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('foodDelivery')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          {t('foodDescription')}
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodServices.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-gray-900 dark:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {service.cuisine}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <div className="flex items-center mb-3">
                <div className="flex mr-2">{renderStars(service.rating)}</div>
                <span className="text-gray-600 dark:text-gray-300">
                  ({service.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>🕒 {service.deliveryTime}</span>
                <span>Min order: {service.minOrder}</span>
              </div>
              <button className="w-full px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                Order Now
              </button>
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Customer Reviews
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Amit Kumar",
                rating: 5,
                comment: "Amazing food quality and quick delivery. The packaging was excellent and food was still hot when it arrived.",
                date: "1 day ago"
              },
              {
                name: "Sneha Patel",
                rating: 4.5,
                comment: "Great variety of local dishes. Really enjoyed the authentic Chhattisgarhi thali. Delivery was on time.",
                date: "3 days ago"
              }
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">{renderStars(review.rating)}</div>
                  <span className="text-gray-500 dark:text-gray-400">
                    {review.date}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {review.comment}
                </p>
                <p className="text-gray-900 dark:text-white font-medium">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodServices;
