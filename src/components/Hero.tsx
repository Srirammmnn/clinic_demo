import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Hero3D from './Hero3D';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] pt-32 pb-20 flex items-center overflow-hidden bg-slate-50">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-0 items-center">

          {/* Left – Text Content */}
          <div className="max-w-2xl flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200/80 shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-500 pulse-medical" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-800">
                  Health Tech Park, Bangalore
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 leading-[1.1] mb-6 tracking-tight"
              >
                Better health <br />
                <span className="italic font-serif bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  starts
                </span> here.
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-xl sm:text-2xl md:text-3xl font-sans font-medium text-slate-700 mb-6"
              >
                Trusted, precision care for you and your family.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-lg font-sans"
              >
                Aurelis Health pairs advanced diagnostics with specialists who know your medical history inside out. Fewer patients per doctor, deeper attention, and a care plan built around your biology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-10 lg:mb-16"
              >
                <a
                  href="#appointment"
                  className="btn-medical-primary group text-base py-4 px-8"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="#services"
                  className="btn-medical-outline text-base py-4 px-8"
                >
                  <span>See Our Services</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right – 3D DNA blended into the page */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden xl:flex items-center justify-center relative w-full h-[780px] -my-20"
          >
            <Hero3D />
            {/* Edge fade gradients to blend 3D into bg */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(ellipse 75% 65% at center, transparent 30%, #f8fafc 65%)'
            }} />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
