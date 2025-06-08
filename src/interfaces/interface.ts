export interface Crypto {
  name: string;
  symbol: string;
  price: number;
  change: number;
  isPositive: boolean;
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

  export interface Stock {
    name: string;
    symbol: string;
    price: number; 
    change: number; 
    isPositive: boolean;
  }

  