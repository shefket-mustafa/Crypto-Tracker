import { TrendingUp, TrendingDown } from 'lucide-react';

interface StockCardProps {
  name: string;
  symbol: string;
  price: number;
  change: number;
  isPositive: boolean;
}

const StockCard = ({ name, symbol, price, change, isPositive }: StockCardProps) => {
  return (
    <div className="bg-card hover-lift rounded-xl p-4 border border-border">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm text-muted-foreground">{symbol}</p>
        </div>
        <div className={`p-2 rounded-lg ${isPositive ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4 text-green-500" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500" />
          )}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">{price.toFixed(2)}</span>
        {isPositive ? (<span className={`text-sm font-medium text-green-500`}>
          +{change}%
        </span>) : (<span className={`text-sm font-medium text-red-500`}>
          -{change}%
        </span>)}
        
      </div>
    </div>
  );
};

export default StockCard;
