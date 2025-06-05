
import { TrendingUp, Shield, Users, Zap } from 'lucide-react';
import Layout from '../components/Layout';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your data is protected with enterprise-grade security and encryption.'
    },
    {
      icon: Zap,
      title: 'Real-time Data',
      description: 'Get instant updates on market prices and trends as they happen.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join thousands of traders and investors sharing insights and strategies.'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            About CryptoTracker
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're dedicated to providing the most accurate and comprehensive cryptocurrency tracking platform for traders and investors worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-orange-500" />
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At CryptoTracker, we believe that everyone should have access to professional-grade market analysis tools. Our platform democratizes financial data, making it accessible to both beginners and experienced traders.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded in 2024, we've quickly become a trusted source for cryptocurrency market data, serving over 100,000 users worldwide with real-time price tracking, detailed analytics, and comprehensive market insights.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="crypto-gradient p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Tracking?</h3>
          <p className="text-muted-foreground mb-6">
            Join our community and take your trading to the next level with professional-grade tools and insights.
          </p>
          <button className="crypto-gradient px-8 py-3 rounded-lg text-white font-semibold hover:opacity-80 transition-opacity">
            Get Started Today
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default About;
