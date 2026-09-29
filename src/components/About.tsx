import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const features = [
    { num: "01", title: "Precision Patient-Centered Care", desc: "Customized diagnostic pathways tailored to your individual genetic and biological profile." },
    { num: "02", title: "Advanced Imaging & Diagnostics", desc: "Next-generation MRI, AI-assisted diagnostics, and molecular laboratory testing." },
    { num: "03", title: "Integrated Medical Board", desc: "Multi-disciplinary consultations among senior specialists for comprehensive clinical answers." }
  ];

  return (
    <section id="about" ref={containerRef} className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Images with Parallax */}
          <div className="relative h-[580px] w-full rounded-3xl mt-10 lg:mt-0">
            {/* Main Image */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 left-0 w-4/5 h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80"
            >
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80" 
                alt="Modern Medical Center Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-0 right-0 w-3/5 h-[340px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10"
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
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 bg-cyan-50 border border-cyan-200/80 px-3.5 py-1.5 rounded-full inline-block mb-4">
                The Aurelis Philosophy
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                High-Precision Medicine That Sees the Whole Person
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                We believe that modern healthcare demands absolute accuracy paired with genuine human connection. At Aurelis Health, we eliminate rushed consultations and deliver deep diagnostic focus.
              </p>
            </motion.div>

            <div className="space-y-8 mb-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-start group"
                >
                  <div className="text-cyan-500 font-serif font-bold text-3xl mr-6 mt-0.5 transition-colors group-hover:text-cyan-600">
                    {feature.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                      <span>{feature.title}</span>
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a href="#appointment" className="btn-medical-primary">
              <span>Schedule Your Health Evaluation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
