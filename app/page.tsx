'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Image from 'next/image';

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dob: string;
  state: string;
};

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    // TODO: Send to Google Sheets via Zapier webhook
    console.log('Form data:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-8xl mb-8"
          >
            🎰
          </motion.div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
            You're In!
          </h1>
          <p className="text-2xl text-white mb-4">
            We'll text you in <span className="text-[#FF1493] font-bold">10 minutes</span>
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Your account is being created right now. You'll receive your Member ID and temporary password via text message.
          </p>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-[#D4AF37] rounded-lg p-8">
            <p className="text-white text-lg mb-4">What happens next:</p>
            <ol className="text-left text-gray-200 space-y-3">
              <li className="flex items-start">
                <span className="text-[#D4AF37] font-bold mr-3">1.</span>
                <span>Our team creates your account (takes less than 10 minutes)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] font-bold mr-3">2.</span>
                <span>You receive your credentials + payment link via SMS</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] font-bold mr-3">3.</span>
                <span>Fund your account (Cash App, PayPal, or Venmo)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] font-bold mr-3">4.</span>
                <span>Start playing immediately! 🎉</span>
              </li>
            </ol>
          </div>
          <p className="text-gray-400 mt-8 text-sm">
            Check your phone for a text from us. See you at the tables! 🃏
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/luxor-logo-main.jpg" alt="Luxor Arcade" width={150} height={50} className="object-contain" />
          </div>
          <motion.a
            href="#join"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold rounded-lg text-sm"
          >
            Join Now
          </motion.a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.3) 0%, rgba(138, 43, 226, 0.2) 30%, transparent 70%)',
                'radial-gradient(circle at 80% 50%, rgba(255, 20, 147, 0.3) 0%, rgba(75, 0, 130, 0.2) 30%, transparent 70%)',
                'radial-gradient(circle at 50% 80%, rgba(212, 175, 55, 0.3) 0%, rgba(138, 43, 226, 0.2) 30%, transparent 70%)',
                'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.3) 0%, rgba(138, 43, 226, 0.2) 30%, transparent 70%)',
              ],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute inset-0"
          />
          
          {/* Additional gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/10 to-transparent" />
          
          {/* Floating Coins */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              initial={{
                x: Math.random() * 1200,
                y: Math.random() * 800,
                opacity: 0.3,
              }}
              animate={{
                y: [
                  Math.random() * 800,
                  Math.random() * 800 - 100,
                  Math.random() * 800,
                ],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 5,
              }}
            >
              🪙
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Branding */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-7xl md:text-8xl font-black mb-6"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              LUXOR
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">VIRTUAL</span>{' '}
                <span className="text-[#FF1493]">ARCADE</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Your Local Getaway. Come Play Your Favorite Games.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 mb-8"
            >
              {[
                { icon: '🎰', text: 'Royal Reels, Diamond Lotto, Keno' },
                { icon: '🐉', text: 'Fish Tables & Dragon Slots' },
                { icon: '🔞', text: 'Adults 18+ Only' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-lg text-gray-200">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Deposit Bonuses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-[#D4AF37] rounded-lg p-6 mb-8"
            >
              <p className="text-[#FFD700] font-bold text-lg mb-4 text-center">💰 Deposit Bonuses</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white">Deposit $20</span>
                  <span className="text-[#FF1493] font-bold">→ Get $5 FREE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Deposit $50</span>
                  <span className="text-[#FF1493] font-bold">→ Get $10 FREE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Deposit $100</span>
                  <span className="text-[#FF1493] font-bold">→ Get $20 FREE</span>
                </div>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 text-sm text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Skill-Based Entertainment</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Exclusive Members Community</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Lead Form */}
          <motion.div
            id="join"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 30px rgba(212, 175, 55, 0.3)',
                  '0 0 50px rgba(255, 20, 147, 0.3)',
                  '0 0 30px rgba(212, 175, 55, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-br from-purple-900/90 to-black border-2 border-[#D4AF37] rounded-2xl p-8 backdrop-blur-sm"
            >
              <h3 className="text-3xl font-bold mb-2 text-center">
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                  Join Now
                </span>
              </h3>
              <p className="text-center text-gray-300 mb-6">
                Start playing in 60 seconds
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      {...register('firstName', { required: 'First name required' })}
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white placeholder-gray-500"
                    />
                    {errors.firstName && (
                      <span className="text-red-400 text-sm">{errors.firstName.message}</span>
                    )}
                  </div>
                  <div>
                    <input
                      {...register('lastName', { required: 'Last name required' })}
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white placeholder-gray-500"
                    />
                    {errors.lastName && (
                      <span className="text-red-400 text-sm">{errors.lastName.message}</span>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    {...register('phone', {
                      required: 'Phone required',
                      pattern: { value: /^\d{10}$/, message: '10-digit phone number' },
                    })}
                    placeholder="Phone (10 digits)"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white placeholder-gray-500"
                  />
                  {errors.phone && (
                    <span className="text-red-400 text-sm">{errors.phone.message}</span>
                  )}
                </div>

                <div>
                  <input
                    {...register('email', {
                      required: 'Email required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                    })}
                    placeholder="Email"
                    type="email"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white placeholder-gray-500"
                  />
                  {errors.email && (
                    <span className="text-red-400 text-sm">{errors.email.message}</span>
                  )}
                </div>

                <div>
                  <input
                    {...register('dob', { required: 'Date of birth required' })}
                    placeholder="Date of Birth"
                    type="date"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white placeholder-gray-500"
                  />
                  {errors.dob && (
                    <span className="text-red-400 text-sm">{errors.dob.message}</span>
                  )}
                </div>

                <div>
                  <select
                    {...register('state', { required: 'State required' })}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white"
                  >
                    <option value="">Select State</option>
                    {['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'].map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  {errors.state && (
                    <span className="text-red-400 text-sm">{errors.state.message}</span>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                  className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold text-lg rounded-lg hover:from-[#FFD700] hover:to-[#D4AF37] transition-all duration-300 disabled:opacity-50"
                >
                  {isLoading ? 'Creating Your Account...' : 'Start Playing Now'}
                </motion.button>

                <p className="text-xs text-gray-400 text-center">
                  By signing up, you confirm you are 18+ and agree to our terms.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Games Showcase */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              Your Favorite Games
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: '/royal-reels-promo-new.jpg', name: 'Royal Reels', desc: 'One of Our Most Popular Games' },
              { img: '/diamond-lotto-promo.jpg', name: 'Diamond Lotto', desc: 'Win Big Jackpots' },
              { img: '/slot-machine-dragon.jpg', name: 'Dragon Slots', desc: 'High-Stakes Asian-Themed Slots' },
            ].map((game, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-xl border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={game.img}
                    alt={game.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-[#D4AF37] mb-2">{game.name}</h3>
                  <p className="text-gray-300">{game.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-8">🎉</div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                Join 500+ Active Players
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Located in South Dade, Miami - Now expanding nationwide
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: '🎁', title: 'Daily Bonuses', desc: 'New rewards every day' },
                { icon: '🎟️', title: 'Weekly Raffles', desc: 'Win big prizes' },
                { icon: '☕', title: 'Free Perks', desc: 'Coffee & more' },
              ].map((perk, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-purple-900/50 to-black border border-[#D4AF37]/30 rounded-lg p-6"
                >
                  <div className="text-4xl mb-3">{perk.icon}</div>
                  <h3 className="text-xl font-bold text-[#D4AF37] mb-2">{perk.title}</h3>
                  <p className="text-gray-300">{perk.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p className="mb-2">© 2026 Luxor Virtual Arcade. All rights reserved.</p>
          <p>Adults 18+ only. Skill-based entertainment. Please play responsibly.</p>
        </div>
      </footer>
    </div>
  );
}
