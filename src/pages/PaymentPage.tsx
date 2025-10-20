import { useState } from 'react';
import { motion } from 'framer-motion';
import { Scissors, CreditCard, Wallet, Building, Tag, CheckCircle, ArrowLeft, Shield } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';

interface PaymentPageProps {
  onNavigate: (page: string) => void;
}

export default function PaymentPage({ onNavigate }: PaymentPageProps) {
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
    { id: 'upi', name: 'UPI', icon: Wallet },
    { id: 'netbanking', name: 'Net Banking', icon: Building }
  ];

  const orderSummary = {
    service: 'Jeans Zip Repair',
    tailor: 'Raj Kumar',
    basePrice: 150,
    urgencyCharge: 100,
    taxes: 25,
    discount: promoApplied ? 50 : 0
  };

  const total =
    orderSummary.basePrice +
    orderSummary.urgencyCharge +
    orderSummary.taxes -
    orderSummary.discount;

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'first50') {
      setPromoApplied(true);
    }
  };

  const handlePayment = () => {
    onNavigate('tracking');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-purple-50">
      <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('tailors')}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Complete Payment</h1>
          <p className="text-gray-600">Secure checkout for your repair service</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card glass>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h2>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${
                        selectedMethod === method.id
                          ? 'border-teal-400 bg-teal-50 scale-105'
                          : 'border-gray-200 hover:border-teal-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center">
                        <method.icon className="text-white" size={24} />
                      </div>
                      <span className="font-semibold text-gray-900">{method.name}</span>
                      {selectedMethod === method.id && (
                        <CheckCircle className="ml-auto text-teal-600" size={24} />
                      )}
                    </button>
                  ))}
                </div>
              </Card>
            </motion.div>

            {selectedMethod === 'card' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <Card glass>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Card Details</h2>
                  <div className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Card Number"
                      icon={CreditCard}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input type="text" placeholder="MM/YY" />
                      <Input type="text" placeholder="CVV" />
                    </div>
                    <Input type="text" placeholder="Cardholder Name" />
                  </div>
                </Card>
              </motion.div>
            )}

            {selectedMethod === 'upi' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <Card glass>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">UPI Details</h2>
                  <Input
                    type="text"
                    placeholder="Enter UPI ID (e.g., name@upi)"
                    icon={Wallet}
                  />
                  <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">💡</div>
                      <div className="text-sm text-blue-700">
                        You'll receive a payment request on your UPI app
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {selectedMethod === 'netbanking' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <Card glass>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Select Bank</h2>
                  <select className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:border-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-400/20 transition-all">
                    <option>Select your bank</option>
                    <option>State Bank of India</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>Axis Bank</option>
                    <option>Kotak Mahindra Bank</option>
                  </select>
                </Card>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card glass>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Apply Promo Code</h2>
                <div className="flex gap-3">
                  <Input
                    type="text"
                    placeholder="Enter promo code"
                    icon={Tag}
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    disabled={promoApplied}
                  />
                  <Button
                    onClick={handleApplyPromo}
                    disabled={promoApplied}
                    variant={promoApplied ? 'outline' : 'primary'}
                  >
                    {promoApplied ? 'Applied' : 'Apply'}
                  </Button>
                </div>
                {promoApplied && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 p-4 bg-green-50 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle className="text-green-600" size={24} />
                    <div>
                      <div className="font-semibold text-green-900">Promo Applied!</div>
                      <div className="text-sm text-green-700">You saved ₹50</div>
                    </div>
                  </motion.div>
                )}
                <div className="mt-4 p-4 bg-purple-50 rounded-xl">
                  <div className="text-sm font-medium text-purple-900 mb-2">Available Offers:</div>
                  <div className="text-sm text-purple-700">
                    Use code <span className="font-bold">FIRST50</span> for ₹50 off on your first order
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card glass>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{orderSummary.service}</div>
                    <div className="text-sm text-gray-600">by {orderSummary.tailor}</div>
                  </div>

                  <div className="border-t-2 border-gray-200 pt-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Base Price</span>
                      <span className="font-medium text-gray-900">₹{orderSummary.basePrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Express Service</span>
                      <span className="font-medium text-gray-900">₹{orderSummary.urgencyCharge}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Taxes & Fees</span>
                      <span className="font-medium text-gray-900">₹{orderSummary.taxes}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-sm">
                        <span className="text-green-600">Discount</span>
                        <span className="font-medium text-green-600">-₹{orderSummary.discount}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t-2 border-gray-200 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900 text-lg">Total</span>
                      <span className="font-bold text-teal-600 text-2xl">₹{total}</span>
                    </div>
                  </div>
                </div>

                <Button
                  fullWidth
                  size="lg"
                  className="mt-6"
                  icon={CheckCircle}
                  onClick={handlePayment}
                >
                  Pay ₹{total}
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card glass className="bg-gradient-to-br from-teal-500 to-cyan-500 text-white">
                <div className="flex items-start gap-3">
                  <Shield className="flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">100% Secure Payment</h3>
                    <p className="text-sm text-white/90">
                      Your payment information is encrypted and secure. We never store your card details.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card glass>
                <h3 className="font-bold text-gray-900 mb-3">Money Back Guarantee</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Not satisfied with the repair? Get a full refund within 24 hours.
                </p>
                <div className="flex items-center gap-2 text-sm text-teal-600">
                  <CheckCircle size={16} />
                  <span className="font-medium">Protected by StitchSwift</span>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
