import { motion } from 'framer-motion';
import { Award, Users, Stethoscope, Clock, CheckCircle } from 'lucide-react';

const stats = [
  { icon: Award, value: "25+", label: "Years of Excellence", desc: "Setting global clinical benchmarks in specialized healthcare since 1999." },
  { icon: Users, value: "120K+", label: "Patients Served", desc: "Trusted by families across South Asia for multi-generational medical care." },
  { icon: Stethoscope, value: "45+", label: "Senior Specialists", desc: "A collaborative panel of board-certified, fellowship-trained physicians." },
  { icon: Clock, value: "24/7", label: "Emergency Response", desc: "Round-the-clock intensive trauma, cardiac, and stroke emergency care." }
];

export default function WhyAurelis() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden text-white">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #0284c7 1px, transparent 1px), linear-gradient(to bottom, #0284c7 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)'
        }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/80 border border-cyan-800/80 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-4"
          >
            <CheckCircle className="w-4 h-4 text-cyan-400" />
            <span>Why Patient Choose Aurelis</span>
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            Engineered Around Superior Health Outcomes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg leading-relaxed"
          >
            We measure clinical success not merely by hospital stays, but by early diagnosis accuracy and long-term patient recovery rates.
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
              className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl p-8 hover:bg-slate-900 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-950 text-cyan-400 border border-cyan-800/60 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:text-white transition-all shadow-sm">
                <stat.icon className="w-7 h-7" />
              </div>
              <h3 className="text-4xl font-extrabold text-white mb-1 tracking-tight">{stat.value}</h3>
              <div className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3">{stat.label}</div>
              <p className="text-slate-400 text-xs leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
