import { motion } from 'framer-motion';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-28 bg-slate-950 overflow-hidden text-white border-t border-slate-800">
      {/* Background Gradients & Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Priority Access & Consultation</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight"
          >
            Your health deserves <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
              uncompromising clinical precision.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Schedule a consultation with our senior medical faculty or speak directly with our clinical desk today.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href="#appointment"
              className="btn-medical-primary group text-lg py-4 px-10 shadow-xl shadow-cyan-500/25 w-full sm:w-auto"
            >
              <span>Book Appointment Online</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="tel:+919345893491"
              className="btn-medical-outline text-lg py-4 px-10 text-white border-slate-700 hover:border-cyan-400 hover:text-cyan-400 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>Call Helpline: +91 93458 93491</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
