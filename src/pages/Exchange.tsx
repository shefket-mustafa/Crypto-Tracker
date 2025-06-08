import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Layout from '../components/Layout';
import CryptoCard from '../components/CryptoCard';
import StockCard from '@/components/StockCard';
import CurrencyCard from '@/components/CurrencyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { IndexProps } from './Index';
import { Crypto, Currency, Stock } from '@/interfaces/interface';

const Exchange = ({ topCryptoData, topCurrencyData, topStocksData }: IndexProps) => {
  const [selectedCategory, setSelectedCategory] = useState<'crypto' | 'stocks' | 'currency'>('crypto');
  const [searchTerm, setSearchTerm] = useState('');

  const getFilteredAssets = (): (Crypto | Stock | Currency)[] => {
    let data: (Crypto | Stock | Currency)[] = [];

    if (selectedCategory === 'crypto') {
      data = topCryptoData;
    } else if (selectedCategory === 'stocks') {
      data = topStocksData;
    } else if (selectedCategory === 'currency') {
      data = topCurrencyData;
    }

    return data.filter((asset) =>
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredAssets = getFilteredAssets();

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
              <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as typeof selectedCategory)}>
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
            {filteredAssets.map((asset, index) => {
              if (selectedCategory === 'crypto') {
                const crypto = asset as Crypto;
                return <CryptoCard key={index} {...crypto} />;
              } else if (selectedCategory === 'stocks') {
                const stock = asset as Stock;
                return <StockCard key={index} {...stock} />;
              } else if (selectedCategory === 'currency') {
                const currency = asset as Currency;
                return <CurrencyCard key={index} {...currency} />;
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Exchange;
