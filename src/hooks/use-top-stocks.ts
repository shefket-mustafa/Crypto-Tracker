import { useEffect, useState } from "react";
import { apiFin, api_key } from "@/api/api";

interface Stock {
  name: string;
  symbol: string;
  price: number;
  change: number;
  isPositive: boolean;
}
const symbols: string[] =  ["AAPL", "MSFT", "TSLA", "GOOGL", "AMZN"]

export const useTopStocks = (limit: number=5) => {
  const [data, setData] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const results = await Promise.all(
          symbols.map(async (symbol) => {
            const quoteRes = await apiFin.get(`/quote?symbol=${symbol}&token=${api_key}`);
            const profileRes = await apiFin.get(`/stock/profile2?symbol=${symbol}&token=${api_key}`);

            const price = quoteRes.data.c;
            const prevClose = quoteRes.data.pc;
            const change = price - prevClose;
            const percentChange = ((change / prevClose) * 100).toFixed(2);

            return {
              name: profileRes.data.name || symbol,
              symbol,
              price,
              change: parseFloat(percentChange),
              isPositive: change >= 0,
            };
          })
        );
        setData(results);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  return { data, loading, error };
};
