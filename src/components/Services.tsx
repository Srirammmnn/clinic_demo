import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  ScanLine, 
  Bone, 
  Brain, 
  Baby, 
  Smile, 
  Microscope, 
  ActivitySquare,
  ArrowUpRight
} from 'lucide-react';

const services = [
  { id: 1, name: "Cardiology", desc: "Advanced heart care, 3D cardiac diagnostics, and interventional procedures.", icon: HeartPulse },
  { id: 2, name: "Dermatology", desc: "Comprehensive skin health, medical therapeutics, and lasers.", icon: ScanLine },
  { id: 3, name: "Orthopedics", desc: "Expert care for joint replacements, spine wellness, and sports medicine.", icon: Bone },
  { id: 4, name: "Neurology", desc: "Specialized treatment for neuro-degenerative, brain, and nerve conditions.", icon: Brain },
  { id: 5, name: "Pediatrics", desc: "Compassionate healthcare for infants, toddlers, and young adolescents.", icon: Baby },
  { id: 6, name: "Dental", desc: "Complete oral care including preventive, implants, and cosmetics.", icon: Smile },
  { id: 7, name: "Diagnostics", desc: "High-resolution MRI, CT, and molecular lab analytics for exact precision.", icon: Microscope },
  { id: 8, name: "Preventive Care", desc: "Proactive annual health checkups and personalized longevity plans.", icon: ActivitySquare },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 bg-cyan-100/80 px-3 py-1 rounded-full mb-4 inline-block">
              Clinical Excellence
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Specialized Care for Every Need
            </h2>
            <p className="text-slate-600 text-lg">
              Explore our comprehensive range of medical departments, led by board-certified specialists using state-of-the-art diagnostic technology.
            </p>
          </motion.div>
          <motion.a 
            href="#appointment"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="btn-medical-outline hidden md:inline-flex text-sm"
          >
            <span>Book Department Visit</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <a href="#appointment" className="group block h-full">
                <div className="relative h-full bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 hover:border-cyan-300 overflow-hidden flex flex-col justify-between">
                  
                  {/* Hover gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:text-white shadow-sm">
                      <service.icon className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold text-cyan-600 group-hover:text-cyan-700">
                    <span>Explore Department</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#appointment" className="btn-medical-primary w-full py-3">
            <span>Book Department Visit</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
