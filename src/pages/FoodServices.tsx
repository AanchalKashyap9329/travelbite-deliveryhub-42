
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

interface LocalDish {
  name: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  isSpicy?: boolean;
  isVeg: boolean;
}

const FoodServices = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const foodServices: FoodOption[] = [
    {
      icon: UtensilsCrossed,
      name: t('localDelights'),
      cuisine: "Chhattisgarhi & North Indian",
      description: t('foodDescription'),
      rating: 4.8,
      reviews: 342,
      deliveryTime: "30-40 min",
      minOrder: "₹99"
    },
    {
      icon: Pizza,
      name: t('fastFood'),
      cuisine: "Fast Food & Snacks",
      description: t('foodDescription'),
      rating: 4.6,
      reviews: 256,
      deliveryTime: "25-35 min",
      minOrder: "₹149"
    },
    {
      icon: Coffee,
      name: t('cafe'),
      cuisine: "Beverages & Snacks",
      description: t('foodDescription'),
      rating: 4.7,
      reviews: 189,
      deliveryTime: "20-30 min",
      minOrder: "₹79"
    }
  ];

  const localDishes: LocalDish[] = [
    {
      name: "Chousela Roti",
      description: "Crispy flatbread made from rice flour, served with various vegetable curries",
      price: "₹40",
      rating: 4.8,
      reviews: 156,
      isVeg: true
    },
    {
      name: "Aamat",
      description: "Traditional Chhattisgarhi mixed vegetable curry with bamboo shoots and spices",
      price: "₹120",
      rating: 4.7,
      reviews: 143,
      isSpicy: true,
      isVeg: true
    },
    {
      name: "Dubki Kadhi",
      description: "A delicious combination of besan dumplings in spiced yogurt curry",
      price: "₹80",
      rating: 4.6,
      reviews: 128,
      isVeg: true
    },
    {
      name: "Faraa",
      description: "Light and healthy steamed dumplings made from rice flour",
      price: "₹60",
      rating: 4.5,
      reviews: 112,
      isVeg: true
    },
    {
      name: "Muthia",
      description: "Spicy and crispy snacks made from rice or wheat flour",
      price: "₹30",
      rating: 4.7,
      reviews: 167,
      isSpicy: true,
      isVeg: true
    },
    {
      name: "Chapda Chutney",
      description: "Local delicacy made from red ants and spices",
      price: "₹40",
      rating: 4.9,
      reviews: 89,
      isSpicy: true,
      isVeg: false
    },
    {
      name: "Bore Baasi",
      description: "Refreshing summer dish made with leftover rice, water, and yogurt",
      price: "₹30",
      rating: 4.4,
      reviews: 95,
      isVeg: true
    },
    {
      name: "Tilgur Laddu",
      description: "Traditional winter sweets made from sesame seeds and jaggery",
      price: "₹20/piece",
      rating: 4.8,
      reviews: 178,
      isVeg: true
    },
    {
      name: "Dehati Chicken",
      description: "Popular spicy village-style chicken preparation",
      price: "₹180",
      rating: 4.9,
      reviews: 234,
      isSpicy: true,
      isVeg: false
    },
    {
      name: "Mahua Drink",
      description: "Traditional beverage made from Mahua flowers",
      price: "₹40",
      rating: 4.6,
      reviews: 145,
      isVeg: true
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
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t('back')}
        </button>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('foodDelivery')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          {t('foodDescription')}
        </p>

        {/* Restaurant Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Local Specialties Section */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {t('famousFood')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {localDishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {dish.name}
                </h3>
                <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                  {dish.price}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {dish.description}
              </p>
              <div className="flex items-center gap-2 mb-4">
                {dish.isVeg ? (
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-sm rounded-full">
                    {t('vegetarian')}
                  </span>
                ) : (
                  <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 text-sm rounded-full">
                    {t('nonVeg')}
                  </span>
                )}
                {dish.isSpicy && (
                  <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 text-sm rounded-full">
                    🌶️ {t('spicy')}
                  </span>
                )}
              </div>
              <div className="flex items-center mb-4">
                <div className="flex mr-2">{renderStars(dish.rating)}</div>
                <span className="text-gray-600 dark:text-gray-300">
                  ({dish.reviews} {t('reviews')})
                </span>
              </div>
              <button className="w-full px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                {t('orderNow')}
              </button>
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {t('customerReviews')}
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
