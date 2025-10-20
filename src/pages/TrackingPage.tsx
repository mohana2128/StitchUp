import { motion } from 'framer-motion';
import { Scissors, Package, CheckCircle, Truck, MapPin, Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

interface TrackingPageProps {
  onNavigate: (page: string) => void;
}

export default function TrackingPage({ onNavigate }: TrackingPageProps) {
  const order = {
    id: '#SS1234',
    status: 'in_progress',
    item: 'Jeans Zip Repair',
    tailor: 'Raj Kumar',
    shop: 'Raj Expert Tailoring',
    estimatedTime: '2:30 PM Today',
    price: '₹250',
    address: 'HSR Layout, Bangalore'
  };

  const timeline = [
    {
      status: 'completed',
      title: 'Order Placed',
      description: 'Your repair request has been confirmed',
      time: '11:00 AM',
      icon: CheckCircle
    },
    {
      status: 'completed',
      title: 'Picked Up',
      description: 'Item collected from your location',
      time: '11:30 AM',
      icon: Package
    },
    {
      status: 'active',
      title: 'In Progress',
      description: 'Tailor is working on your repair',
      time: 'Now',
      icon: Scissors
    },
    {
      status: 'pending',
      title: 'Out for Delivery',
      description: 'Item will be on the way soon',
      time: 'Est. 2:00 PM',
      icon: Truck
    },
    {
      status: 'pending',
      title: 'Delivered',
      description: 'Your repaired item will be delivered',
      time: 'Est. 2:30 PM',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-purple-50">
      <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('dashboard')}
              className="w-10 h-10 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Scissors className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                StitchSwift
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Track Your Order</h1>
          <p className="text-gray-600">Real-time updates on your repair status</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card glass>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Order {order.id}</h2>
                    <p className="text-gray-600">{order.item}</p>
                  </div>
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-xl font-medium">
                    In Progress
                  </span>
                </div>

                <div className="space-y-6">
                  {timeline.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                            step.status === 'completed'
                              ? 'bg-gradient-to-br from-green-400 to-emerald-500 scale-100'
                              : step.status === 'active'
                              ? 'bg-gradient-to-br from-teal-400 to-cyan-500 scale-110 shadow-lg shadow-teal-500/50 animate-pulse'
                              : 'bg-gray-200'
                          }`}
                        >
                          <step.icon
                            className={step.status === 'pending' ? 'text-gray-400' : 'text-white'}
                            size={24}
                          />
                        </div>
                        {index < timeline.length - 1 && (
                          <div
                            className={`w-1 h-16 transition-all duration-500 ${
                              step.status === 'completed' ? 'bg-green-400' : 'bg-gray-200'
                            }`}
                          />
                        )}
                      </div>

                      <div className="flex-1 pb-8">
                        <div className="flex items-start justify-between mb-1">
                          <h3
                            className={`font-bold ${
                              step.status === 'pending' ? 'text-gray-400' : 'text-gray-900'
                            }`}
                          >
                            {step.title}
                          </h3>
                          <span
                            className={`text-sm font-medium ${
                              step.status === 'pending' ? 'text-gray-400' : 'text-teal-600'
                            }`}
                          >
                            {step.time}
                          </span>
                        </div>
                        <p
                          className={`text-sm ${
                            step.status === 'pending' ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card glass>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Live Location</h3>
                <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="mx-auto mb-2" size={48} />
                      <div className="font-medium">Live tracking map</div>
                      <div className="text-sm">Tailor's location will appear here</div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-gray-700">Live Tracking</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card glass>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tailor Details</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                    RK
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{order.tailor}</div>
                    <div className="text-sm text-gray-600">{order.shop}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button variant="outline" fullWidth icon={Phone} size="sm">
                    Call Tailor
                  </Button>
                  <Button variant="outline" fullWidth icon={MessageCircle} size="sm">
                    Chat with Tailor
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card glass>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Service</span>
                    <span className="font-medium text-gray-900">{order.item}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Estimated Time</span>
                    <span className="font-medium text-gray-900">{order.estimatedTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery Address</span>
                    <span className="font-medium text-gray-900 text-right">{order.address}</span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="font-bold text-gray-900">Total Amount</span>
                      <span className="font-bold text-teal-600 text-xl">{order.price}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card glass className="bg-gradient-to-br from-purple-400 to-pink-400 text-white">
                <h3 className="text-lg font-bold mb-2">Need Help?</h3>
                <p className="text-white/90 text-sm mb-4">
                  Our support team is available 24/7 to assist you
                </p>
                <Button variant="secondary" fullWidth size="sm">
                  Contact Support
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
