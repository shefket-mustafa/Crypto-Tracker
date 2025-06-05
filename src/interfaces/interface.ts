export interface Crypto {
    id: string;
    name: string;
    symbol: string;
    price: number;
    ath_change_percentage: number;
  };    

  export interface CryptoCardProps {
    name: string;
    symbol: string;
    price: number;
    change: number;
    isPositive: boolean;
  }

  export interface Currency {
    name: string
    symbol: string
    price: number
  };

  