import { api } from "@/api/api";
import { Crypto } from "@/interfaces/interface";

import { useEffect, useState } from "react"


export const  useTopCrypto = (limit: number=10) => {
    const [data, setData] = useState<Crypto[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopCrypto  = async () => {
            try{
                const response = await api.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`)
                console.log(response);
                console.log(response.data);
                setData(response.data)
                
            }catch(err){
                console.error(err.message)
            }finally{
                setLoading(false)
            }
        }
        fetchTopCrypto();
    },[limit])

return {data, error, loading}

}