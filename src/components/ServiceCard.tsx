
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title.toLowerCase().includes('travel')) {
      navigate('/travel-services');
    }
    // Add other navigation conditions for other services here
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-gray-900 dark:text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
