
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { name: 'Jan', Bitcoin: 45000, Ethereum: 3200, Solana: 120 },
  { name: 'Feb', Bitcoin: 48000, Ethereum: 3400, Solana: 135 },
  { name: 'Mar', Bitcoin: 52000, Ethereum: 3800, Solana: 150 },
  { name: 'Apr', Bitcoin: 49000, Ethereum: 3600, Solana: 140 },
  { name: 'May', Bitcoin: 55000, Ethereum: 4000, Solana: 165 },
  { name: 'Jun', Bitcoin: 58000, Ethereum: 4200, Solana: 180 },
];

const CryptoChart = () => {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border">
      <h3 className="text-xl font-semibold mb-6 text-center">Market Overview</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }} 
            />
            <Line type="monotone" dataKey="Bitcoin" stroke="#DC2626" strokeWidth={3} dot={{ fill: '#DC2626' }} />
            <Line type="monotone" dataKey="Ethereum" stroke="#EA580C" strokeWidth={3} dot={{ fill: '#EA580C' }} />
            <Line type="monotone" dataKey="Solana" stroke="#F97316" strokeWidth={3} dot={{ fill: '#F97316' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CryptoChart;
