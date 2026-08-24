import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-32 bg-primary-900 overflow-hidden">
      {/* Background Gradients & Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/90 to-transparent" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-medical-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
          >
            Your health deserves more than <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-400 to-accent-300">ordinary care.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Connect with our specialists and take the next step toward better health.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#appointment"
              className="group relative px-10 py-5 bg-white text-primary-900 rounded-full font-bold overflow-hidden shadow-2xl transition-all hover:scale-105 w-full sm:w-auto text-lg"
            >
              <div className="absolute inset-0 bg-medical-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ease-out duration-300" />
              <span className="relative flex items-center justify-center gap-3">
                Book an Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a
              href="tel:+918045678900"
              className="group px-10 py-5 bg-primary-800/50 backdrop-blur-md text-white border border-primary-700 rounded-full font-bold flex items-center justify-center gap-3 transition-all hover:bg-primary-700 hover:border-primary-600 w-full sm:w-auto text-lg"
            >
              <Phone className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
              Call Our Care Team
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
