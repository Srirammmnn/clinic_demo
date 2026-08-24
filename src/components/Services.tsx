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
  { id: 1, name: "Cardiology", desc: "Advanced heart care, diagnostics, and interventional procedures.", icon: HeartPulse },
  { id: 2, name: "Dermatology", desc: "Comprehensive skin care, from medical treatments to aesthetics.", icon: ScanLine },
  { id: 3, name: "Orthopedics", desc: "Expert care for bones, joints, ligaments, tendons, and muscles.", icon: Bone },
  { id: 4, name: "Neurology", desc: "Specialized treatment for disorders of the brain and nervous system.", icon: Brain },
  { id: 5, name: "Pediatrics", desc: "Compassionate healthcare for infants, children, and adolescents.", icon: Baby },
  { id: 6, name: "Dental", desc: "Complete dental care including preventive, restorative, and cosmetic.", icon: Smile },
  { id: 7, name: "Diagnostics", desc: "State-of-the-art imaging and laboratory services for precise answers.", icon: Microscope },
  { id: 8, name: "Preventive Care", desc: "Proactive health screenings and personalized wellness plans.", icon: ActivitySquare },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg-light">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-4">
              Care for every stage of life.
            </h2>
            <p className="text-slate-600 text-lg">
              Explore our comprehensive range of medical specialties, each staffed by leading experts and equipped with advanced technology.
            </p>
          </motion.div>
          <motion.a 
            href="#all-services"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:inline-flex items-center gap-2 text-medical-600 font-medium hover:text-medical-800 transition-colors"
          >
            View All Services <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={`#service-${service.id}`} className="group block h-full">
                <div className="relative h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-medical-200 overflow-hidden">
                  
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-medical-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-medical-50 text-medical-600 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-medical-600 group-hover:text-white">
                      <service.icon className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-medical-600 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-8">
                      {service.desc}
                    </p>

                    <div className="absolute bottom-8 right-8 text-slate-300 group-hover:text-medical-600 transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#all-services" className="inline-flex items-center gap-2 text-medical-600 font-medium">
            View All Services <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
