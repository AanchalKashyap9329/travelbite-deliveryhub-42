
import { useLanguage } from "@/contexts/LanguageContext";
import { Star, ArrowLeft, Bike, Car, Bike as BikeAlt } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface ServiceOption {
  icon: any;
  name: string;
  price: string;
  description: string;
  rating: number;
  reviews: number;
  image: string;
}

const TravelServices = () => {
  const { t, currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const [services, setServices] = useState<ServiceOption[]>([]);

  useEffect(() => {
    setServices([
      {
        icon: Bike,
        name: t('bikeRental'),
        price: "₹299/day",
        description: t('bikeDescription'),
        rating: 4.8,
        reviews: 127,
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
      },
      {
        icon: Car,
        name: t('taxiService'),
        price: "₹15/km",
        description: t('taxiDescription'),
        rating: 4.7,
        reviews: 243,
        image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
      },
      {
        icon: BikeAlt,
        name: t('scootyRental'),
        price: "₹249/day",
        description: t('scootyDescription'),
        rating: 4.9,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15"
      }
    ]);
  }, [t, currentLanguage]);

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
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t('back')}
        </button>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('travelServices')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          {t('travelDescription')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="relative h-48 -mx-6 -mt-6 mb-6">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
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
                  ({service.reviews} {t('reviews')})
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {service.price}
                </span>
                <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                  {t('bookNow')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {t('customerReviews')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Rahul Singh",
                rating: 5,
                comment: t('reviewComment1'),
                date: t('daysAgo')
              },
              {
                name: "Priya Sharma",
                rating: 4.5,
                comment: t('reviewComment2'),
                date: t('weeksAgo')
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
