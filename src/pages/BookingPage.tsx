import { useState } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Upload, MapPin, Clock, Zap, AlertCircle, ArrowLeft } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import Textarea from '../components/Textarea';

interface BookingPageProps {
  onNavigate: (page: string) => void;
}

export default function BookingPage({ onNavigate }: BookingPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [urgency, setUrgency] = useState('standard');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [description, setDescription] = useState('');

  const categories = [
    { id: 'zip', name: 'Zip Repair', icon: '🔧', price: '₹150' },
    { id: 'button', name: 'Button Replace', icon: '🔘', price: '₹80' },
    { id: 'hem', name: 'Hem Fix', icon: '📏', price: '₹120' },
    { id: 'tear', name: 'Tear Repair', icon: '🧵', price: '₹200' },
    { id: 'alteration', name: 'Alteration', icon: '✂️', price: '₹300' },
    { id: 'other', name: 'Other', icon: '❓', price: 'Varies' }
  ];

  const urgencyOptions = [
    { id: 'standard', name: 'Standard', time: '24 hours', price: '+₹0', icon: Clock },
    { id: 'express', name: 'Express', time: '6 hours', price: '+₹100', icon: Zap },
    { id: 'emergency', name: 'Emergency', time: '2 hours', price: '+₹250', icon: AlertCircle }
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('tailors');
  };

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Book a Repair</h1>
          <p className="text-gray-600">Tell us what needs fixing, and we'll find the perfect tailor</p>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Card glass>
              <h2 className="text-xl font-bold text-gray-900 mb-4">What needs to be fixed?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-teal-400 bg-teal-50 scale-105'
                        : 'border-gray-200 hover:border-teal-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <div className="font-semibold text-gray-900 text-sm">{category.name}</div>
                    <div className="text-xs text-gray-600 mt-1">{category.price}</div>
                  </button>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Card glass>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Upload Photo</h2>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className={`block border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 ${
                    uploadedImage
                      ? 'border-teal-400 bg-teal-50'
                      : 'border-gray-300 hover:border-teal-400 hover:bg-gray-50'
                  }`}
                >
                  {uploadedImage ? (
                    <div>
                      <img
                        src={uploadedImage}
                        alt="Uploaded"
                        className="max-h-48 mx-auto rounded-xl mb-4"
                      />
                      <p className="text-teal-600 font-medium">Photo uploaded! Click to change</p>
                    </div>
                  ) : (
                    <div>
                      <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                      <p className="text-gray-700 font-medium mb-1">Click to upload image</p>
                      <p className="text-sm text-gray-500">or drag and drop</p>
                    </div>
                  )}
                </label>
              </div>
              {selectedCategory === 'zip' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 p-4 bg-blue-50 rounded-xl flex items-start gap-3"
                >
                  <div className="text-2xl">💡</div>
                  <div>
                    <div className="font-semibold text-blue-900 mb-1">Smart Suggestion</div>
                    <div className="text-sm text-blue-700">
                      Looks like a zip repair – estimated ₹150. Typical completion time: 3-4 hours.
                    </div>
                  </div>
                </motion.div>
              )}
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <Card glass>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Describe the Issue</h2>
              <Textarea
                placeholder="Tell us more about what needs fixing..."
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <Card glass>
              <h2 className="text-xl font-bold text-gray-900 mb-4">How urgent is it?</h2>
              <div className="space-y-4">
                {urgencyOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setUrgency(option.id)}
                    className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between ${
                      urgency === option.id
                        ? 'border-teal-400 bg-teal-50 scale-105'
                        : 'border-gray-200 hover:border-teal-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center">
                        <option.icon className="text-white" size={24} />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-gray-900">{option.name}</div>
                        <div className="text-sm text-gray-600">Ready in {option.time}</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-teal-600">{option.price}</div>
                  </button>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <Card glass>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Location</h2>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Enter your address or use current location"
                  icon={MapPin}
                  defaultValue="HSR Layout, Bangalore"
                />
                <div className="mt-4 h-48 bg-gray-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="mx-auto mb-2" size={32} />
                    <div>Map preview</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button type="submit" fullWidth size="lg" icon={Scissors}>
              Find Available Tailors
            </Button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
