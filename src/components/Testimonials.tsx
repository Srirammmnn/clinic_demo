import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, HeartHandshake } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Bangalore",
    rating: 5,
    quote: "I've never experienced healthcare this organized and attentive. The cardiac team at Aurelis made me feel completely safe and valued throughout my recovery."
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Mumbai",
    rating: 5,
    quote: "The specialists took the time to explain my diagnostic reports in detail rather than rushing through the consultation. Truly a world-class experience."
  },
  {
    id: 3,
    name: "Anita Desai",
    location: "Chennai",
    rating: 5,
    quote: "From state-of-the-art MRI diagnostics to specialist consultation, everything was seamless. The facility is immaculate and the staff is deeply empathetic."
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
    <section id="reviews" className="py-24 bg-cyan-50/40 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 bg-cyan-100/80 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-4"
          >
            <HeartHandshake className="w-4 h-4 text-cyan-600" />
            <span>Verified Patient Experiences</span>
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            Real Stories, Genuine Healing
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Nav Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 md:-translate-x-12 z-10">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:text-cyan-600 hover:scale-110 transition-all border border-slate-200"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 md:translate-x-12 z-10">
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:text-cyan-600 hover:scale-110 transition-all border border-slate-200"
              aria-label="Next story"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-cyan-900/5 border border-slate-200/80 relative overflow-hidden">
            <Quote className="absolute top-8 right-8 w-24 h-24 text-cyan-100/60 rotate-180 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed mb-8">
                  "{testimonials[current].quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{testimonials[current].name}</h4>
                    <p className="text-cyan-700 text-xs font-semibold">{testimonials[current].location}</p>
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
                className={`h-2.5 rounded-full transition-all duration-300 ${current === index ? 'w-8 bg-cyan-600' : 'w-2.5 bg-slate-300 hover:bg-cyan-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
