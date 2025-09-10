import React from 'react';
import {
  Shield,
  MessageCircle,
  Smartphone,
  MapPin,
  Star,
  Clock,
} from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Fundis',
      description:
        'All Fundis undergo ID and background checks for your peace of mind.',
      color: 'text-pink-500',
    },
    {
      icon: MessageCircle,
      title: 'Real-time Messaging',
      description:
        'Chat directly with Fundis and get instant notifications on job updates.',
      color: 'text-pink-400',
    },
    {
      icon: Smartphone,
      title: 'M-Pesa Payments',
      description:
        'Secure mobile money payments with instant transaction confirmations.',
      color: 'text-pink-300',
    },
    {
      icon: MapPin,
      title: 'Location-Based Search',
      description:
        'Find Fundis near you using our integrated Google Maps technology.',
      color: 'text-pink-500',
    },
    {
      icon: Star,
      title: 'Rating System',
      description:
        'Make informed decisions with detailed reviews and ratings from real customers.',
      color: 'text-pink-400',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description:
        'Our customer support team is always available to help resolve any issues.',
      color: 'text-pink-300',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              FundiFind?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built trust, transparency, and convenience into every aspect of our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border border-pink-500 bg-white/30 backdrop-blur-md rounded-3xl shadow-md hover:scale-105 transition"
              >
                <CardHeader className="flex flex-col items-center space-y-4">
                  <div
                    className={`w-14 h-14 ${feature.color} bg-white/40 backdrop-blur-md rounded-xl flex items-center justify-center`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
