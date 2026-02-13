'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

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
    console.log('Form data:', data);
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
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-8xl mb-8"
          >
            🎰
          </motion.div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
            Welcome to Luxor!
          </h1>
          <p className="text-2xl text-white mb-4">
            We'll text you in <span className="text-[#FF1493] font-bold">10 minutes</span>
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Your account is being created. You'll receive your credentials via SMS shortly.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(255, 20, 147, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute inset-0"
        />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#D4AF37] rounded-full"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
              opacity: 0.1,
            }}
            animate={{
              y: [
                Math.random() * 800,
                Math.random() * 800 - 200,
                Math.random() * 800,
              ],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              LUXOR
            </div>
          </motion.div>
          <motion.a
            href="#join"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold rounded-lg text-sm shadow-lg shadow-[#D4AF37]/50"
          >
            Join Now
          </motion.a>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Branding */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-7xl md:text-8xl font-black mb-6 relative">
                <motion.span
                  className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  LUXOR
                </motion.span>
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">ONLINE</span>{' '}
                <span className="text-[#FF1493]">CASINO</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-300 mb-8"
            >
              Play your favorite casino games online. Slots, table games, and more - all from the comfort of home.
            </motion.p>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="space-y-4 mb-8"
            >
              {[
                { icon: '🎰', text: '100+ Premium Casino Games' },
                { icon: '💰', text: 'Generous Welcome Bonuses' },
                { icon: '⚡', text: 'Instant Deposits & Withdrawals' },
                { icon: '🔒', text: 'Secure & Licensed Platform' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="text-3xl"
                  >
                    {item.icon}
                  </motion.span>
                  <span className="text-lg text-gray-200">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Bonus tiers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-[#D4AF37] rounded-2xl p-6 backdrop-blur-sm"
            >
              <p className="text-[#FFD700] font-bold text-lg mb-4 text-center">💰 Deposit Bonuses</p>
              <div className="space-y-3">
                {[
                  { deposit: '$20', bonus: '$5' },
                  { deposit: '$50', bonus: '$10' },
                  { deposit: '$100', bonus: '$20' },
                ].map((tier, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 + i * 0.1 }}
                    whileHover={{ x: 5, backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                    className="flex justify-between items-center p-3 rounded-lg transition-all"
                  >
                    <span className="text-white font-medium">Deposit {tier.deposit}</span>
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className="text-[#FF1493] font-bold"
                    >
                      → Get {tier.bonus} FREE
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Lead Form */}
          <motion.div
            id="join"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 40px rgba(212, 175, 55, 0.3)',
                  '0 0 60px rgba(255, 20, 147, 0.4)',
                  '0 0 40px rgba(212, 175, 55, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-br from-purple-900/90 via-black to-pink-900/90 border-2 border-[#D4AF37] rounded-3xl p-8 backdrop-blur-lg"
            >
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl font-bold mb-3 text-center"
              >
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                  Join Today
                </span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-gray-300 mb-8"
              >
                Start playing in 60 seconds • 18+ only
              </motion.p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input
                      {...register('firstName', { required: 'Required' })}
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 text-white placeholder-gray-500 transition-all"
                    />
                    {errors.firstName && (
                      <span className="text-red-400 text-sm">{errors.firstName.message}</span>
                    )}
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input
                      {...register('lastName', { required: 'Required' })}
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 text-white placeholder-gray-500 transition-all"
                    />
                    {errors.lastName && (
                      <span className="text-red-400 text-sm">{errors.lastName.message}</span>
                    )}
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    {...register('phone', {
                      required: 'Required',
                      pattern: { value: /^\d{10}$/, message: '10 digits' },
                    })}
                    placeholder="Phone (10 digits)"
                    className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 text-white placeholder-gray-500 transition-all"
                  />
                  {errors.phone && (
                    <span className="text-red-400 text-sm">{errors.phone.message}</span>
                  )}
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    {...register('email', {
                      required: 'Required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                    })}
                    placeholder="Email"
                    type="email"
                    className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 text-white placeholder-gray-500 transition-all"
                  />
                  {errors.email && (
                    <span className="text-red-400 text-sm">{errors.email.message}</span>
                  )}
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    {...register('dob', { required: 'Required' })}
                    placeholder="Date of Birth"
                    type="date"
                    className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 text-white placeholder-gray-500 transition-all"
                  />
                  {errors.dob && (
                    <span className="text-red-400 text-sm">{errors.dob.message}</span>
                  )}
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <select
                    {...register('state', { required: 'Required' })}
                    className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 text-white"
                  >
                    <option value="">Select State</option>
                    {['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'].map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  {errors.state && (
                    <span className="text-red-400 text-sm">{errors.state.message}</span>
                  )}
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)' }}
                  whileTap={{ scale: 0.97 }}
                  disabled={isLoading}
                  className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] text-black font-bold text-lg rounded-xl shadow-xl disabled:opacity-50 transition-all"
                  style={{ backgroundSize: '200% 100%' }}
                >
                  {isLoading ? 'Creating Account...' : 'Start Playing Now 🎰'}
                </motion.button>

                <p className="text-xs text-gray-400 text-center">
                  By signing up, you confirm you are 18+ and agree to our terms.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-gradient-to-b from-black via-purple-900/10 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-400">Get started in 3 simple steps</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '1', icon: '📝', title: 'Sign Up', desc: 'Create your account in 60 seconds' },
              { num: '2', icon: '💳', title: 'Deposit', desc: 'Add funds and claim your bonus' },
              { num: '3', icon: '🎮', title: 'Play', desc: 'Start winning at your favorite games' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-900/40 to-black border border-[#D4AF37]/30 rounded-2xl p-8 text-center h-full">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className="text-6xl mb-4 inline-block"
                  >
                    {step.icon}
                  </motion.div>
                  <div className="text-[#D4AF37] text-6xl font-black mb-4">{step.num}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-24 px-4 bg-gradient-to-b from-black via-pink-900/10 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                Featured Games
              </span>
            </h2>
            <p className="text-xl text-gray-400">Over 100 premium games to choose from</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎰', name: 'Slot Machines', desc: 'Classic & Video Slots', color: 'from-red-500/20 to-orange-500/20' },
              { icon: '🃏', name: 'Table Games', desc: 'Blackjack, Roulette, Poker', color: 'from-green-500/20 to-emerald-500/20' },
              { icon: '🎲', name: 'Live Dealer', desc: 'Real-time Casino Action', color: 'from-blue-500/20 to-purple-500/20' },
              { icon: '🐉', name: 'Dragon Games', desc: 'Asian-themed High Stakes', color: 'from-yellow-500/20 to-red-500/20' },
              { icon: '💎', name: 'Jackpot Games', desc: 'Progressive Mega Wins', color: 'from-cyan-500/20 to-blue-500/20' },
              { icon: '🎯', name: 'Arcade Games', desc: 'Fish Tables & More', color: 'from-pink-500/20 to-purple-500/20' },
            ].map((game, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${game.color} border-2 border-[#D4AF37]/30 group-hover:border-[#D4AF37] rounded-2xl p-8 text-center transition-all duration-300`}>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="text-6xl mb-4"
                  >
                    {game.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-2">{game.name}</h3>
                  <p className="text-gray-300">{game.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-4 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-6 inline-block"
            >
              🎉
            </motion.div>
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                Join Thousands of Winners
              </span>
            </h2>
            <p className="text-xl text-gray-400">Playing online 24/7 from anywhere</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎁', title: 'Daily Rewards', desc: 'Login bonuses every day' },
              { icon: '🏆', title: 'Tournaments', desc: 'Compete for big prizes' },
              { icon: '⚡', title: 'Fast Payouts', desc: 'Withdraw in minutes' },
            ].map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-gradient-to-br from-purple-900/40 to-black border border-[#D4AF37]/30 rounded-2xl p-6 text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="text-5xl mb-3 inline-block"
                >
                  {perk.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-[#FFD700] mb-2">{perk.title}</h3>
                <p className="text-gray-300">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black via-pink-900/20 to-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FF1493] bg-clip-text text-transparent">
              Ready to Win?
            </span>
          </motion.h2>
          <p className="text-2xl text-gray-300 mb-10">
            Join now and claim your welcome bonus
          </p>
          <motion.a
            href="#join"
            whileHover={{ scale: 1.1, boxShadow: '0 0 50px rgba(255, 215, 0, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] text-black text-xl font-bold rounded-2xl shadow-2xl"
            style={{ backgroundSize: '200% 100%' }}
          >
            Start Playing Now 🎰
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent mb-4">
              LUXOR ONLINE CASINO
            </div>
            <p className="text-gray-400">Play Responsibly • 18+ Only</p>
          </div>
          <div className="text-center text-gray-500 text-sm space-y-2">
            <p>© 2026 Luxor Online Casino. All rights reserved.</p>
            <p>Licensed and regulated online gaming platform.</p>
            <p className="text-xs">
              Gambling can be addictive. Play responsibly. Must be 18 years or older to play.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
