import { motion } from 'framer-motion';
import { ArrowRight, Award } from 'lucide-react';

const specialists = [
  {
    id: 1,
    name: "Dr. Ananya Rao",
    role: "Chief Cardiologist",
    exp: "18+ Yrs Exp",
    desc: "Internationally recognized for advancements in minimally invasive cardiac surgery.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Dr. Arjun Mehta",
    role: "Orthopedic Surgeon",
    exp: "15+ Yrs Exp",
    desc: "Specializes in joint replacement and sports medicine with rapid rehabilitation techniques.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Dr. Meera Nair",
    role: "Dermatologist",
    exp: "12+ Yrs Exp",
    desc: "Expert in clinical dermatology and advanced laser treatments for complex skin conditions.",
    image: "/4th.webp"
  },
  {
    id: 4,
    name: "Dr. Rohan Kapoor",
    role: "Chief Neurologist",
    exp: "20+ Yrs Exp",
    desc: "Leading clinician in the treatment of stroke, epilepsy, and neurodegenerative disorders.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Specialists() {
  return (
    <section id="specialists" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 bg-cyan-50 border border-cyan-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-4"
          >
            <Award className="w-4 h-4 text-cyan-600" />
            <span>World-Class Physicians</span>
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            Meet Our Senior Medical Faculty
          </motion.h2>
          <p className="text-slate-600 text-lg">
            Dedicated clinicians bringing empathetic care and pioneering diagnostic solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative rounded-3xl overflow-hidden bg-slate-900 cursor-pointer shadow-md hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 flex flex-col justify-end h-[420px]">
                {/* Image Container */}
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-cyan-400 z-10 shadow-sm">
                  {doc.exp}
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                    {doc.role}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {doc.name}
                  </h3>
                  
                  <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-2 opacity-90">
                    {doc.desc}
                  </p>

                  <a 
                    href="#appointment"
                    className="w-full py-2.5 px-4 rounded-xl bg-cyan-600/30 hover:bg-cyan-500 border border-cyan-500/40 text-white font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-md group-hover:shadow-cyan-500/30"
                  >
                    <span>Book Specialist Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
