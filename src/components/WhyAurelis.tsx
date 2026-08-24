import { motion } from 'framer-motion';
import { Award, Users, Stethoscope, Clock } from 'lucide-react';

const stats = [
  { icon: Award, value: "25+", label: "Years of Experience", desc: "Setting the standard in private healthcare since 1999." },
  { icon: Users, value: "100K+", label: "Patients Served", desc: "Trusted by families across the region for generations." },
  { icon: Stethoscope, value: "30+", label: "Specialists", desc: "A multidisciplinary team of globally trained experts." },
  { icon: Clock, value: "24/7", label: "Care Available", desc: "Round-the-clock emergency and critical care support." }
];

export default function WhyAurelis() {
  return (
    <section className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #22d3ee 1px, transparent 1px), linear-gradient(to bottom, #22d3ee 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }} />
        <motion.div
          animate={{ x: [0, 40], y: [0, 40] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #0ea5e9 1px, transparent 1px), linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            opacity: 0.5
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-400 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Built around better outcomes.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg leading-relaxed"
          >
            We measure our success not just by the treatments we provide, but by the quality of life we help our patients regain and maintain.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-800/50 backdrop-blur-sm border border-primary-700/50 rounded-2xl p-8 hover:bg-primary-800 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-700/50 flex items-center justify-center mb-6 group-hover:bg-medical-600/20 group-hover:text-medical-400 transition-colors text-accent-400">
                <stat.icon className="w-7 h-7" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <div className="text-lg font-medium text-medical-400 mb-4">{stat.label}</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
