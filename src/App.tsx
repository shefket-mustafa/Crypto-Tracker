
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Exchange from "./pages/Exchange";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useTopCrypto } from "./hooks/use-top-crypto";
import { useTopCurrency } from "./hooks/use-top-currency";
import { useTopStocks } from "./hooks/use-top-stocks";



const queryClient = new QueryClient();

const App = () => {

  const { data: topCryptoData, loading: topCryptoLoading, error: topCryptoError } = useTopCrypto(5);
  const { data: topCurrencyData, loading: topCurrencyLoding, error: topCurrencyError} = useTopCurrency(5);
  const { data: topStocksData, loading: TopStocksLoading, error: TopStocksError } = useTopStocks();

  return <>

  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index 
          topCryptoData={topCryptoData} 
          topCurrencyData={topCurrencyData}
          topStocksData={topStocksData}/>} />
          <Route path="/exchange" element={<Exchange 
          topCryptoData={topCryptoData} 
          topCurrencyData={topCurrencyData}
          topStocksData={topStocksData}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </>
}

export default App;
