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
          <h4 className="font-semibold text-orange-400">{name}</h4>
          <p className="text-sm text-muted-foreground">{symbol}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">{price.toFixed(4)}</span>
      </div>
    </div>
  );
};

export default CurrencyCard;
