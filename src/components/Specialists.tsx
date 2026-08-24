import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const specialists = [
  {
    id: 1,
    name: "Dr. Ananya Rao",
    role: "Chief Cardiologist",
    exp: "18+ Years Experience",
    desc: "Internationally recognized for advancements in minimally invasive cardiac surgery.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Dr. Arjun Mehta",
    role: "Orthopedic Surgeon",
    exp: "15+ Years Experience",
    desc: "Specializes in joint replacement and sports medicine with a focus on rapid recovery.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Dr. Meera Nair",
    role: "Dermatologist",
    exp: "12+ Years Experience",
    desc: "Expert in clinical dermatology and advanced laser treatments for complex skin conditions.",
    image: "/4th.webp"
  },
  {
    id: 4,
    name: "Dr. Rohan Kapoor",
    role: "Neurologist",
    exp: "20+ Years Experience",
    desc: "Leading researcher and clinician in the treatment of neurodegenerative disorders.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Specialists() {
  return (
    <section id="specialists" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-medical-600 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Our Experts
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6"
          >
            Meet the people behind your care.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="group relative rounded-3xl overflow-hidden bg-slate-50 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-900">
                    {doc.exp}
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-1">{doc.name}</h3>
                  <p className="text-medical-300 font-medium text-sm mb-3">{doc.role}</p>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                      {doc.desc}
                    </p>
                    <button className="flex items-center gap-2 text-white text-sm font-medium hover:text-medical-400 transition-colors">
                      View Profile <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
