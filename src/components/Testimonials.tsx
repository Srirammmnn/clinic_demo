import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Bangalore",
    rating: 5,
    quote: "I've never experienced healthcare this organized and personal. The entire team at Aurelis made me feel like I was their only patient."
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Mumbai",
    rating: 5,
    quote: "The doctors took the time to actually understand my concerns rather than rushing through the consultation. Truly a premium experience."
  },
  {
    id: 3,
    name: "Anita Desai",
    location: "Chennai",
    rating: 5,
    quote: "From diagnostics to consultation, everything felt seamless. The facility is world-class and the staff is incredibly empathetic."
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="py-24 bg-medical-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-medical-200 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-medical-600 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Patient Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6"
          >
            Hear from our patients.
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 md:-translate-x-12 z-10">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-900 hover:text-medical-600 hover:scale-110 transition-all border border-slate-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 md:translate-x-12 z-10">
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-900 hover:text-medical-600 hover:scale-110 transition-all border border-slate-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-medical-900/5 relative overflow-hidden">
            <Quote className="absolute top-8 right-8 w-24 h-24 text-medical-50 opacity-50 rotate-180 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="flex items-center gap-1 mb-8">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-medical-500 text-medical-500" />
                  ))}
                </div>
                
                <p className="text-2xl md:text-3xl text-primary-900 font-medium leading-relaxed mb-8">
                  "{testimonials[current].quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-900 flex items-center justify-center font-bold text-xl">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900">{testimonials[current].name}</h4>
                    <p className="text-slate-500 text-sm">{testimonials[current].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => { setAutoplay(false); setCurrent(index); }}
                className={`h-2 rounded-full transition-all duration-300 ${current === index ? 'w-8 bg-medical-600' : 'w-2 bg-slate-300 hover:bg-medical-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
