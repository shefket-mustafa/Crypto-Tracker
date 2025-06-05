
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CurrencyCardProps {
  name: string;
  symbol: string;
  price: number;
}

const CurrencyCard = ({ name, symbol, price }: CurrencyCardProps) => {
  return (
    <div className="bg-card hover-lift rounded-xl p-4 border border-border">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm text-muted-foreground">{symbol}</p>
        </div>
        <div className='p-2 rounded-lg bg-green-500/20'>
        
            <TrendingUp className="w-4 h-4 text-green-500" />
          
        </div>
      </div>
      <div className="flex items-center justify-end">
        <span className='text-sm font-medium text-green-500'>{price}</span>
        {/* <span className='text-sm font-medium text-green-500'>
          {change}
        </span> */}
      </div>
    </div>
  );
};

export default CurrencyCard;
