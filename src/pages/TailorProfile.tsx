import { motion } from 'framer-motion';
import { Scissors, Star, MapPin, Clock, Award, MessageCircle, ArrowLeft, CheckCircle } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

interface TailorProfileProps {
  onNavigate: (page: string) => void;
}

export default function TailorProfile({ onNavigate }: TailorProfileProps) {
  const tailor = {
    name: 'Raj Kumar',
    shop: 'Raj Expert Tailoring',
    rating: 4.8,
    reviews: 247,
    distance: '1.2 km away',
    experience: '15 years',
    completedOrders: '2,340+',
    responseTime: '< 5 min',
    skills: ['Zip Repair', 'Hem Alteration', 'Button Replace', 'Custom Fitting', 'Tear Repair'],
    pricing: {
      zipRepair: '₹150',
      hemFix: '₹120',
      buttonReplace: '₹80'
    },
    availability: 'Available Now',
    images: [
      'https://images.pexels.com/photos/7642097/pexels-photo-7642097.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5705495/pexels-photo-5705495.jpeg?auto=compress&cs=tinysrgb&w=600'
    ]
  };

  const reviews = [
    {
      name: 'Priya Sharma',
      rating: 5,
      date: '2 days ago',
      comment: 'Excellent work! Fixed my jeans zipper perfectly. Very professional and quick service.',
      verified: true
    },
    {
      name: 'Amit Patel',
      rating: 5,
      date: '1 week ago',
      comment: 'Highly recommended! Great attention to detail and reasonable prices.',
      verified: true
    },
    {
      name: 'Sneha Reddy',
      rating: 4,
      date: '2 weeks ago',
      comment: 'Good service overall. Completed the alteration within promised time.',
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-purple-50">
      <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('booking')}
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card glass className="mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="w-full aspect-square bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl flex items-center justify-center text-white text-6xl font-bold mb-4">
                  RK
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin size={16} className="text-teal-600" />
                    <span className="text-gray-600">{tailor.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} className="text-teal-600" />
                    <span className="text-gray-600">Responds in {tailor.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award size={16} className="text-teal-600" />
                    <span className="text-gray-600">{tailor.experience} experience</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-1">{tailor.name}</h1>
                    <p className="text-lg text-gray-600 mb-2">{tailor.shop}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="text-yellow-400 fill-yellow-400" size={20} />
                        <span className="font-bold text-gray-900">{tailor.rating}</span>
                        <span className="text-gray-600">({tailor.reviews} reviews)</span>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {tailor.availability}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-teal-50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-teal-600">{tailor.completedOrders}</div>
                    <div className="text-sm text-gray-600">Repairs Done</div>
                  </div>
                  <div className="bg-purple-50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">{tailor.rating}</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                  <div className="bg-orange-50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">{tailor.experience}</div>
                    <div className="text-sm text-gray-600">Experience</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-3">Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    {tailor.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white border-2 border-teal-200 rounded-xl text-sm font-medium text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    size="lg"
                    icon={Scissors}
                    className="flex-1"
                    onClick={() => onNavigate('payment')}
                  >
                    Book Now
                  </Button>
                  <Button size="lg" variant="outline" icon={MessageCircle}>
                    Chat
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card glass>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Pricing</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-700">Zip Repair</span>
                  <span className="font-bold text-teal-600">{tailor.pricing.zipRepair}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-700">Hem Fix</span>
                  <span className="font-bold text-teal-600">{tailor.pricing.hemFix}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-700">Button Replace</span>
                  <span className="font-bold text-teal-600">{tailor.pricing.buttonReplace}</span>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card glass>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Work Gallery</h2>
              <div className="grid grid-cols-3 gap-3">
                {tailor.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-2xl overflow-hidden bg-gray-200"
                  >
                    <img
                      src={image}
                      alt={`Work ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card glass>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Customer Reviews</h2>
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 fill-yellow-400" size={24} />
                <span className="text-2xl font-bold text-gray-900">{tailor.rating}</span>
                <span className="text-gray-600">/ 5</span>
              </div>
            </div>

            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-2xl"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">{review.name}</span>
                        {review.verified && (
                          <CheckCircle className="text-teal-600" size={16} />
                        )}
                      </div>
                      <div className="text-sm text-gray-600">{review.date}</div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
