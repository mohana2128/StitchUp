import { motion } from 'framer-motion';
import { Scissors, Calendar, MapPin, Package, Clock, TrendingUp, Zap } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  const quickActions = [
    {
      icon: Zap,
      title: 'Request Repair',
      description: 'Get instant tailor service',
      color: 'from-teal-400 to-cyan-500',
      action: () => onNavigate('booking')
    },
    {
      icon: Package,
      title: 'Track Order',
      description: 'See your repair status',
      color: 'from-purple-400 to-pink-400',
      action: () => onNavigate('tracking')
    },
    {
      icon: MapPin,
      title: 'Nearby Tailors',
      description: 'Browse local experts',
      color: 'from-orange-400 to-red-400',
      action: () => onNavigate('tailors')
    },
    {
      icon: Calendar,
      title: 'My Past Orders',
      description: 'View order history',
      color: 'from-blue-400 to-indigo-400',
      action: () => {}
    }
  ];

  const recentOrders = [
    {
      id: '#SS1234',
      item: 'Jeans Zip Repair',
      tailor: 'Raj Tailoring',
      status: 'In Progress',
      date: 'Today, 2:30 PM'
    },
    {
      id: '#SS1233',
      item: 'Shirt Hem Fix',
      tailor: 'Quick Stitch Co.',
      status: 'Completed',
      date: 'Yesterday'
    }
  ];

  const stats = [
    { label: 'Total Repairs', value: '12', icon: Scissors },
    { label: 'Saved Money', value: '₹2,400', icon: TrendingUp },
    { label: 'Avg. Time', value: '3.5 hrs', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-purple-50">
      <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center">
              <Scissors className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              StitchSwift
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center">
              <span className="text-xl">🔔</span>
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              A
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex!</h1>
              <p className="text-gray-600">Ready to fix your wardrobe today?</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card glass>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <stat.icon className="text-white" size={24} />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card glass hover>
                  <button onClick={action.action} className="w-full text-left">
                    <div className={`w-14 h-14 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <action.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{action.title}</h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </button>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Recent Orders</h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>

          <div className="space-y-4">
            {recentOrders.map((order, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card glass hover>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center">
                        <Package className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{order.item}</div>
                        <div className="text-sm text-gray-600">{order.tailor} • {order.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-4 py-2 rounded-xl text-sm font-medium ${
                        order.status === 'In Progress'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {order.status}
                      </span>
                      <Button variant="ghost" size="sm" onClick={() => onNavigate('tracking')}>
                        View
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card glass className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Need Emergency Repair?</h3>
                <p className="text-white/90 mb-4">Get priority service within 2 hours</p>
                <Button variant="secondary" icon={Zap} onClick={() => onNavigate('booking')}>
                  Quick Fix Now
                </Button>
              </div>
              <div className="hidden md:block text-6xl">⚡</div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
