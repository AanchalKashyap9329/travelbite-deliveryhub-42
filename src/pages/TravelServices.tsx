
import { useLanguage } from "@/contexts/LanguageContext";
import { Star, ArrowLeft, Bike, Car, Scooter } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ServiceOption {
  icon: any;
  name: string;
  price: string;
  description: string;
  rating: number;
  reviews: number;
}

const TravelServices = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const services: ServiceOption[] = [
    {
      icon: Bike,
      name: "Bike Rental",
      price: "₹299/day",
      description: "Comfortable bikes for your daily commute or adventure rides",
      rating: 4.8,
      reviews: 127
    },
    {
      icon: Car,
      name: "Taxi Service",
      price: "₹15/km",
      description: "Reliable and safe taxi service with professional drivers",
      rating: 4.7,
      reviews: 243
    },
    {
      icon: Scooter,
      name: "Scooty Rental",
      price: "₹249/day",
      description: "Easy to ride scooties perfect for city navigation",
      rating: 4.9,
      reviews: 156
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
          {t('travelServices')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          {t('travelDescription')}
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <div className="flex items-center mb-3">
                <div className="flex mr-2">{renderStars(service.rating)}</div>
                <span className="text-gray-600 dark:text-gray-300">
                  ({service.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {service.price}
                </span>
                <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                  Book Now
                </button>
              </div>
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
                name: "Rahul Singh",
                rating: 5,
                comment: "Great service! The bike was in perfect condition and the staff was very helpful.",
                date: "2 days ago"
              },
              {
                name: "Priya Sharma",
                rating: 4.5,
                comment: "Very convenient taxi service. The driver was professional and punctual.",
                date: "1 week ago"
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

export default TravelServices;
