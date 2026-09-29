import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ from, to, suffix = "", duration = 2000 }: { from: number; to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeProgress * (to - from) + from));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [inView, from, to, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="text-4xl lg:text-5xl font-extrabold text-cyan-600 mb-2 block tracking-tight"
    >
      {count}{suffix}
    </motion.span>
  );
}

export default function TrustStats() {
  const stats = [
    { value: 25, suffix: "+", label: "Years of Excellence" },
    { value: 45, suffix: "+", label: "Senior Specialists" },
    { value: 120, suffix: "K+", label: "Patients Treated" },
    { value: 99, suffix: "%", label: "Diagnostic Accuracy" }
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200/80">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center p-6 rounded-2xl bg-white border border-slate-200/60 shadow-xs hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Counter from={0} to={stat.value} suffix={stat.suffix} />
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
