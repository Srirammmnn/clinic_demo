import { motion } from 'framer-motion';
import Hero3D from './Hero3D';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] pt-28 pb-16 flex items-center overflow-hidden bg-bg-light">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-0 items-center">

          {/* Left – Text Content */}
          <div className="max-w-2xl flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-primary-700/80">
                  Health Tech Park, Bangalore
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-primary-900 leading-[1.1] mb-6"
              >
                Better health <br />
                <span className="italic text-accent-400">starts</span> here.
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-xl sm:text-2xl md:text-3xl font-serif text-primary-800/70 mb-6"
              >
                Trusted care for you and your family.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-primary-800/80 mb-8 leading-relaxed max-w-lg font-sans"
              >
                Aurelis Health pairs advanced diagnostics with a physician who actually knows your history. Fewer patients per doctor, deeper attention, and a care plan built around your biology — not a waiting room average.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-10 lg:mb-16"
              >
                <a
                  href="#contact"
                  className="px-8 py-3.5 bg-primary-900 text-bg-light rounded-full font-medium transition-all hover:bg-primary-800 hover:scale-105 text-center shadow-md"
                >
                  Request a Consultation
                </a>
                
                <a
                  href="#services"
                  className="px-8 py-3.5 bg-transparent text-primary-900 border border-primary-900/30 rounded-full font-medium transition-all hover:bg-primary-900/5 text-center"
                >
                  See Our Approach
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
              background: 'radial-gradient(ellipse 75% 65% at center, transparent 30%, #f4f1ea 65%)'
            }} />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg-light to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg-light to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg-light to-transparent pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
