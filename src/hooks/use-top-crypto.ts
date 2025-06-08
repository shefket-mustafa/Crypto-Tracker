import { apiFin } from "@/api/api";
import { CryptoCardProps } from "@/interfaces/interface";
import { useEffect, useState } from "react";

export const useTopCrypto = (limit: number = 5) => {
    const [data, setData] = useState<CryptoCardProps[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchTopCrypto = async () => {
        try {
          const response = await apiFin.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
          );
  
          setData(
            response.data.map((coin: any) => ({
                name: coin.name,
                symbol: coin.symbol.toUpperCase(),
                price: coin.current_price,
                change: Math.abs(Number(coin.price_change_percentage_24h.toFixed(2))),
                isPositive: coin.price_change_percentage_24h >= 0,
            }))
          );
        } catch (err: any) {
          setError(err.message || 'Something went wrong');
        } finally {
          setLoading(false);
        }
      };
  
      fetchTopCrypto();
    }, [limit]);
  
    return { data, error, loading };
  };
  