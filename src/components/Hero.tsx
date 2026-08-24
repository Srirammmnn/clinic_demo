import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, Star } from 'lucide-react';
import Hero3D from './Hero3D';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 right-0 lg:left-1/3 z-0">
        <Hero3D />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-medical-500/10 text-medical-600 px-4 py-2 rounded-full mb-6 border border-medical-500/20"
            >
              <div className="w-2 h-2 rounded-full bg-medical-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase">
                Advanced Healthcare • Bangalore
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-900 leading-[1.1] mb-6"
            >
              Healthcare <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-600 to-accent-400">
                Designed Around You.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
            >
              Experience intelligent, compassionate healthcare powered by advanced diagnostics, experienced specialists, and a patient-first approach.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#appointment"
                className="group relative px-8 py-4 bg-primary-900 text-white rounded-full font-medium overflow-hidden shadow-xl shadow-primary-900/20 transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-medical-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ease-out duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Book an Appointment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a
                href="#services"
                className="px-8 py-4 bg-white text-primary-900 border border-slate-200 rounded-full font-medium flex items-center justify-center gap-2 transition-all hover:bg-slate-50 hover:border-slate-300"
              >
                Explore Services
              </a>
            </motion.div>
          </div>

          {/* Right Floating Cards (visible mostly on desktop) */}
          <div className="hidden lg:block relative h-[600px] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-20 right-10 glass p-4 rounded-2xl shadow-lg border-white/40 max-w-[200px]"
            >
              <div className="w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center mb-3">
                <Activity className="w-5 h-5 text-medical-600" />
              </div>
              <h3 className="font-semibold text-primary-900 text-sm">24/7 Emergency Care</h3>
              <p className="text-xs text-slate-500 mt-1">Always here when you need us.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-40 left-0 glass p-4 rounded-2xl shadow-lg border-white/40 max-w-[200px]"
            >
              <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5 text-accent-500" />
              </div>
              <h3 className="font-semibold text-primary-900 text-sm">30+ Specialists</h3>
              <p className="text-xs text-slate-500 mt-1">Top experts in their fields.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute top-1/2 right-0 glass p-4 rounded-2xl shadow-lg border-white/40 max-w-[200px]"
            >
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h3 className="font-semibold text-primary-900 text-sm">98% Satisfaction</h3>
              <p className="text-xs text-slate-500 mt-1">Based on patient reviews.</p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center hidden md:flex"
      >
        <span className="text-xs text-slate-400 font-medium tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-slate-200 overflow-hidden relative">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-medical-500 absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
