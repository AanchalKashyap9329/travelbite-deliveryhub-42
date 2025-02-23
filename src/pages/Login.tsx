
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add your login logic here
      toast({
        title: "Success",
        description: "Login successful!",
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to login. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {t('login')}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('email')}
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('password')}
              </label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="w-full"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              {loading ? t('loggingIn') : t('login')}
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            {t('noAccount')}{' '}
            <Link to="/signup" className="text-black dark:text-white font-medium hover:underline">
              {t('signUp')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
