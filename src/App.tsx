
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TravelServices from "./pages/TravelServices";
import FoodServices from "./pages/FoodServices";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GetStarted from "./pages/GetStarted";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <TooltipProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/travel-services" element={<TravelServices />} />
              <Route path="/food-services" element={<FoodServices />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Navigate to="/get-started" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
      </LanguageProvider>
    </QueryClientProvider>
  </TooltipProvider>
);

export default App;
