
import { Bike, Utensils } from "lucide-react";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-black text-white rounded-full animate-fade-down">
            Welcome to Danteserve
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-up">
            Travel & Food Delivery in Dantewada
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8 animate-fade-up">
            Your one-stop solution for convenient travel and delicious food delivery services.
            Experience seamless booking and real-time tracking.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up">
            <button className="px-8 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
              Book a Ride
            </button>
            <button className="px-8 py-3 bg-white text-black border border-gray-200 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors">
              Order Food
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of services designed to make your life easier
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ServiceCard
              title="Travel Services"
              description="Book bikes, taxis, and scooties with real-time tracking and flexible payment options."
              icon={Bike}
            />
            <ServiceCard
              title="Food Delivery"
              description="Order from your favorite restaurants with live tracking and exclusive discounts."
              icon={Utensils}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
