import { motion } from 'framer-motion';
import { Scissors, Zap, MapPin, CheckCircle, Star, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const howItWorks = [
    {
      icon: Zap,
      title: 'Request Repair',
      description: 'Upload photo, describe issue, and set urgency'
    },
    {
      icon: MapPin,
      title: 'Match Tailor',
      description: 'We find the nearest skilled tailor instantly'
    },
    {
      icon: CheckCircle,
      title: 'Repaired & Delivered',
      description: 'Track in real-time and get your outfit back'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'College Student',
      text: 'Saved my interview outfit 2 hours before the call! Amazing service.',
      rating: 5
    },
    {
      name: 'Rahul Mehta',
      role: 'Software Engineer',
      text: 'Perfect for professionals who need quick fixes. Highly recommended!',
      rating: 5
    },
    {
      name: 'Ananya Singh',
      role: 'Travel Blogger',
      text: 'Found a tailor in a new city within minutes. Game changer!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-purple-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center">
              <Scissors className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              StitchSwift
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <Button variant="ghost" onClick={() => onNavigate('login')}>
              Login
            </Button>
            <Button onClick={() => onNavigate('signup')}>
              Get Started
            </Button>
          </motion.div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Your Outfit.
                <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  {' '}Fixed.
                </span>
                <br />
                Instantly.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get your clothing repaired by skilled tailors near you. Perfect for students,
                professionals, and travelers who need quick fixes on the go.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" icon={Zap} onClick={() => onNavigate('signup')}>
                  Book a Tailor Now
                </Button>
                <Button size="lg" variant="outline">
                  How It Works
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-teal-500" size={20} />
                  <span>500+ Tailors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-teal-500" size={20} />
                  <span>Same Day Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-teal-500" size={20} />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[500px] bg-gradient-to-br from-teal-400/20 to-purple-400/20 rounded-[3rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-3xl opacity-60 animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Scissors className="text-white" size={120} strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              How It <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-600">Three simple steps to get your outfit fixed</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card glass hover>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="text-white" size={32} />
                    </div>
                    <div className="text-3xl font-bold text-teal-500 mb-2">{index + 1}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Users Say</span>
            </h2>
            <p className="text-xl text-gray-600">Real experiences from real people</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card glass hover>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-500 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of satisfied customers who trust StitchSwift for their clothing repairs
            </p>
            <Button
              size="lg"
              variant="secondary"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => onNavigate('signup')}
            >
              Start Your First Repair
            </Button>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center">
              <Scissors className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold">StitchSwift</span>
          </div>
          <p className="text-gray-400">© 2025 StitchSwift. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
