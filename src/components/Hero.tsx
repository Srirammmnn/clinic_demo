import { motion } from 'framer-motion';
import Hero3D from './Hero3D';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] pt-32 pb-20 flex items-center overflow-hidden bg-bg-light">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="max-w-2xl flex flex-col justify-between min-h-[60vh] md:min-h-0">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-primary-700/80">
                  Health Tech Park, Bangalore
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary-900 leading-[1.1] mb-8"
              >
                Better health . <br />
                <span className="italic text-accent-400">Trusted care</span> for you and your family.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-primary-800/80 mb-10 leading-relaxed max-w-lg font-sans"
              >
                Aurelis Health pairs advanced diagnostics with a physician who actually knows your history. Fewer patients per doctor, deeper attention, and a care plan built around your biology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-16 lg:mb-24"
              >
                <a
                  href="#contact"
                  className="px-8 py-3.5 bg-primary-900 text-bg-light rounded-full font-medium transition-all hover:bg-primary-800 hover:scale-105 text-center"
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

            {/* Stats Section at bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-900/10"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-900 mb-1">18 min</h3>
                <p className="text-xs text-primary-700/70 font-medium">Avg. time to physician</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-900 mb-1">1:120</h3>
                <p className="text-xs text-primary-700/70 font-medium">Physician-to-patient ratio</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-900 mb-1">24/7</h3>
                <p className="text-xs text-primary-700/70 font-medium">Direct physician line</p>
              </div>
            </motion.div>
          </div>

          {/* Right 3D Element (Desktop/Tablet Only) */}
          <div className="hidden md:block relative w-full h-[500px] lg:h-[600px] z-10">
            <Hero3D />
          </div>

        </div>
      </div>
    </section>
  );
}
