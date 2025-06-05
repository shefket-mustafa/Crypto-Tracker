import { Bitcoin, TrendingUp } from "lucide-react";
import Layout from "../components/Layout";
import CryptoChart from "../components/CryptoChart";
import CryptoCard from "../components/CryptoCard";
import { useTopCrypto } from "@/hooks/use-top-crypto";
import { Crypto, Currency } from "@/interfaces/interface";
import { useTopCurrency } from "@/hooks/use-top-currency";
import CurrencyCard from "@/components/CurrencyCard";


const Index = () => {


  const currencies = [
    {
      name: "USD/EUR",
      symbol: "USDEUR",
      price: "0.85",
      change: "+0.12%",
      isPositive: true,
    },
    {
      name: "USD/GBP",
      symbol: "USDGBP",
      price: "0.73",
      change: "-0.05%",
      isPositive: false,
    },
    {
      name: "USD/JPY",
      symbol: "USDJPY",
      price: "149.82",
      change: "+0.34%",
      isPositive: true,
    },
    {
      name: "USD/CAD",
      symbol: "USDCAD",
      price: "1.35",
      change: "+0.08%",
      isPositive: true,
    },
    {
      name: "USD/AUD",
      symbol: "USDAUD",
      price: "1.52",
      change: "-0.15%",
      isPositive: false,
    },
  ];

  const stocks = [
    {
      name: "Apple",
      symbol: "AAPL",
      price: "$189.50",
      change: "+1.23%",
      isPositive: true,
    },
    {
      name: "Microsoft",
      symbol: "MSFT",
      price: "$378.85",
      change: "+0.89%",
      isPositive: true,
    },
    {
      name: "Google",
      symbol: "GOOGL",
      price: "$142.56",
      change: "-0.34%",
      isPositive: false,
    },
    {
      name: "Tesla",
      symbol: "TSLA",
      price: "$234.12",
      change: "+2.45%",
      isPositive: true,
    },
    {
      name: "Amazon",
      symbol: "AMZN",
      price: "$151.78",
      change: "+0.67%",
      isPositive: true,
    },
  ];

  const { data: topCryptoData, loading: topCryptoLoading, error: topCryptoError } = useTopCrypto(5);
  const { data: topCurrencyData, loading: topCurrencyLoding, error: topCurrencyError} = useTopCurrency(5);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Bitcoin className="w-12 h-12 text-orange-500 mr-4" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Your favorite crypto-tracker
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track real-time cryptocurrency prices, market trends, and make
            informed investment decisions
          </p>
        </div>

        {/* Crypto Chart */}
        <div className="mb-16">
          <CryptoChart />
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top Cryptocurrencies */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center flex items-center justify-center">
              <TrendingUp className="w-6 h-6 mr-2 text-red-500" />
              Top Cryptocurrencies
            </h2>
            <div className="space-y-4">
              {topCryptoData.map((crypto: Crypto) => (
                <CryptoCard
                  key={crypto.name}
                  name={crypto.id.toLocaleUpperCase()}
                  symbol={crypto.symbol.toLocaleUpperCase()}
                  price={crypto.price}
                  change={crypto.ath_change_percentage}
                  isPositive={crypto.ath_change_percentage >= 0}
                />
              ))}
            </div>
          </div>

          {/* Currency Exchange */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center flex items-center justify-center">
              <TrendingUp className="w-6 h-6 mr-2 text-orange-500" />
              Currency Rates
            </h2>
            <div className="space-y-4">
            {topCurrencyData.map((currency: Currency) => (
                <CurrencyCard
                  key={currency?.name}
                  name={currency?.name}
                  symbol={currency?.symbol.toLocaleUpperCase()}
                  price={currency?.price}
                  
                />
              ))}
            </div>
          </div>

          {/* Stock Market */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center flex items-center justify-center">
              <TrendingUp className="w-6 h-6 mr-2 text-red-600" />
              Stock Market
            </h2>
            <div className="space-y-4">
              {/* {stocks.map((stock, index) => (
                <CryptoCard key={index} {...stock} />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
