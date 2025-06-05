
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Layout from '../components/Layout';
import CryptoCard from '../components/CryptoCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Exchange = () => {
  const [selectedCategory, setSelectedCategory] = useState('crypto');
  const [searchTerm, setSearchTerm] = useState('');

  const allAssets = {
    crypto: [
      { name: 'Bitcoin', symbol: 'BTC', price: '$58,234', change: '+2.34%', isPositive: true },
      { name: 'Ethereum', symbol: 'ETH', price: '$4,123', change: '+1.89%', isPositive: true },
      { name: 'Solana', symbol: 'SOL', price: '$178', change: '-0.45%', isPositive: false },
      { name: 'Cardano', symbol: 'ADA', price: '$1.23', change: '+3.21%', isPositive: true },
      { name: 'Polkadot', symbol: 'DOT', price: '$32.45', change: '+0.78%', isPositive: true },
      { name: 'Chainlink', symbol: 'LINK', price: '$14.89', change: '+1.56%', isPositive: true },
    ],
    stocks: [
      { name: 'Apple', symbol: 'AAPL', price: '$189.50', change: '+1.23%', isPositive: true },
      { name: 'Microsoft', symbol: 'MSFT', price: '$378.85', change: '+0.89%', isPositive: true },
      { name: 'Google', symbol: 'GOOGL', price: '$142.56', change: '-0.34%', isPositive: false },
      { name: 'Tesla', symbol: 'TSLA', price: '$234.12', change: '+2.45%', isPositive: true },
      { name: 'Amazon', symbol: 'AMZN', price: '$151.78', change: '+0.67%', isPositive: true },
      { name: 'Meta', symbol: 'META', price: '$327.43', change: '+1.89%', isPositive: true },
    ],
    currency: [
      { name: 'USD/EUR', symbol: 'USDEUR', price: '0.85', change: '+0.12%', isPositive: true },
      { name: 'USD/GBP', symbol: 'USDGBP', price: '0.73', change: '-0.05%', isPositive: false },
      { name: 'USD/JPY', symbol: 'USDJPY', price: '149.82', change: '+0.34%', isPositive: true },
      { name: 'USD/CAD', symbol: 'USDCAD', price: '1.35', change: '+0.08%', isPositive: true },
      { name: 'USD/AUD', symbol: 'USDAUD', price: '1.52', change: '-0.15%', isPositive: false },
      { name: 'EUR/GBP', symbol: 'EURGBP', price: '0.86', change: '+0.23%', isPositive: true },
    ],
  };

  const filteredAssets = allAssets[selectedCategory as keyof typeof allAssets].filter(asset =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Exchange Center
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore and trade cryptocurrencies, stocks, and currencies
          </p>
        </div>

        {/* Filter Form */}
        <div className="bg-card rounded-2xl p-6 border border-border mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Filter className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl font-semibold">Filter Assets</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="crypto">Cryptocurrency</SelectItem>
                  <SelectItem value="stocks">Stocks</SelectItem>
                  <SelectItem value="currency">Currency</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search assets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-secondary border-border"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Action</label>
              <Button className="w-full crypto-gradient hover:opacity-80">
                Apply Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div>
          <h3 className="text-2xl font-bold mb-6 capitalize">
            {selectedCategory} ({filteredAssets.length} results)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssets.map((asset, index) => (
              <CryptoCard key={index} {...asset} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Exchange;
