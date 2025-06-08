import {  apiFin } from "@/api/api";
import { Currency } from "@/interfaces/interface";
import { useEffect, useState } from "react";


export const  useTopCurrency = (limit: number=5) => {
    const [data, setData] = useState<Currency[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopCurrency  = async () => {
            try{
                const response = await apiFin.get(`https://api.coingecko.com/api/v3/exchange_rates`)
                const rates = response.data.rates;
                const topCurrencies = ["usd", "eur", "gbp", "jpy", "cad"];
                const extracted = topCurrencies.map((currency) => ({
                    name: rates[currency].name,
                    symbol: rates[currency].unit,
                    price: rates[currency].value
                }))
                setData(extracted)
                
            }catch(err){
                console.error(err.message)
            }finally{
                setLoading(false)
            }
        }
        fetchTopCurrency();
    },[limit])

return {data, error, loading}

}