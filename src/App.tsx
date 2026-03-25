import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyConsultation from "@/components/StickyConsultation";
import Index from "./pages/Index";
import About from "./pages/About";
import Treatments from "./pages/Treatments";
import Consultation from "./pages/Consultation";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Branches from "./pages/Branches";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/products" element={<Products />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <StickyConsultation />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
