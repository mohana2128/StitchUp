import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Scissors, Chrome } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';

interface AuthPageProps {
  mode: 'login' | 'signup';
  onNavigate: (page: string) => void;
}

export default function AuthPage({ mode, onNavigate }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(mode === 'login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-screen flex">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-teal-500 via-cyan-500 to-purple-500 p-12 items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 text-white text-center max-w-md">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Scissors size={40} />
          </div>
          <h1 className="text-5xl font-bold mb-6">StitchSwift</h1>
          <p className="text-xl mb-8 text-white/90">
            Your trusted partner for instant clothing repairs and alterations
          </p>
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-2xl p-4">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <div className="font-semibold">Lightning Fast</div>
                <div className="text-sm text-white/80">Get repairs done in hours, not days</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-2xl p-4">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <div className="font-semibold">Expert Tailors</div>
                <div className="text-sm text-white/80">Verified professionals near you</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-2xl p-4">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💯</span>
              </div>
              <div>
                <div className="font-semibold">100% Satisfaction</div>
                <div className="text-sm text-white/80">Quality guaranteed or money back</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-purple-50"
      >
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Scissors className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              StitchSwift
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {isLogin ? 'Welcome Back!' : 'Get Started'}
              </h2>
              <p className="text-gray-600">
                {isLogin ? 'Login to continue your repair journey' : 'Create an account to book your first repair'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <Input
                  type="text"
                  placeholder="Full Name"
                  icon={User}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              )}

              <Input
                type="email"
                placeholder="Email Address"
                icon={Mail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input
                type="password"
                placeholder="Password"
                icon={Lock}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <button type="button" className="text-teal-600 hover:text-teal-700 font-medium">
                    Forgot Password?
                  </button>
                </div>
              )}

              <Button type="submit" fullWidth size="lg">
                {isLogin ? 'Login' : 'Create Account'}
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                fullWidth
                icon={Chrome}
                onClick={() => onNavigate('dashboard')}
              >
                Continue with Google
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-teal-600 hover:text-teal-700 font-semibold"
              >
                {isLogin ? 'Sign up' : 'Login'}
              </button>
            </div>

            <div className="mt-6 text-xs text-center text-gray-500">
              By continuing, you agree to our{' '}
              <button className="text-teal-600 hover:text-teal-700">Terms of Service</button>
              {' '}and{' '}
              <button className="text-teal-600 hover:text-teal-700">Privacy Policy</button>
            </div>
          </motion.div>

          <button
            onClick={() => onNavigate('landing')}
            className="mt-6 text-center w-full text-gray-600 hover:text-gray-900 font-medium"
          >
            ← Back to Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}
