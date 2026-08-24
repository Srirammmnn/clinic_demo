import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const features = [
    { num: "01", title: "Personalized Care", desc: "Treatment plans tailored specifically to your unique health profile and lifestyle." },
    { num: "02", title: "Advanced Diagnostics", desc: "State-of-the-art technology for precise, early, and accurate detection." },
    { num: "03", title: "Specialist Expertise", desc: "A collaborative team of leading medical professionals across all disciplines." }
  ];

  return (
    <section id="about" ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Images with Parallax */}
          <div className="relative h-[600px] w-full rounded-3xl mt-10 lg:mt-0">
            {/* Main Image */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 left-0 w-4/5 h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80" 
                alt="Modern Clinic Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/10 mix-blend-overlay"></div>
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-0 right-0 w-3/5 h-[350px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                alt="Doctor Consultation" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-medical-600 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
                The Aurelis Difference
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6 leading-tight">
                Medicine that sees the whole person.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                We believe that true healthcare goes beyond treating symptoms. At Aurelis Health, we combine cutting-edge medical technology with deep human empathy to understand and treat the complete you.
              </p>
            </motion.div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-start group"
                >
                  <div className="text-medical-300 font-light text-4xl mr-6 mt-1 transition-colors group-hover:text-medical-600">
                    {feature.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
