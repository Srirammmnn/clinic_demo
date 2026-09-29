import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Building2 } from 'lucide-react';

const facilities = [
  {
    id: 1,
    title: "Modern Medical Reception",
    desc: "A calm, sterile, yet comforting environment engineered to eliminate healthcare stress.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    title: "3D Imaging Suite",
    desc: "Equipped with ultra-low radiation MRI and CT scanning suites.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    title: "Robotic Surgical Operating Theaters",
    desc: "Precision laminar flow surgical suites for optimal patient outcomes.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 4,
    title: "Consultation Suites",
    desc: "Private soundproof consultation rooms for patient-physician trust.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 5,
    title: "Executive Recovery Wards",
    desc: "Luxury patient suites with round-the-clock intensive nursing monitoring.",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 6,
    title: "Molecular Diagnostic Lab",
    desc: "In-house pathology offering fast-turnaround diagnostic result reporting.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    className: "md:col-span-1 md:row-span-1"
  }
];

export default function Facilities() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % facilities.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + facilities.length) % facilities.length);
    }
  };

  return (
    <section id="facilities" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 bg-cyan-100/80 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-4">
              <Building2 className="w-4 h-4 text-cyan-600" />
              <span>Infrastructure & Tech</span>
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Hospital Infrastructure Built for Healing
            </h2>
            <p className="text-slate-600 text-lg">
              Explore our state-of-the-art medical center where advanced clinical technology meets patient comfort.
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[250px] gap-4">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer border border-slate-200/60 shadow-xs ${facility.className}`}
              onClick={() => openLightbox(index)}
            >
              <img 
                src={facility.image} 
                alt={facility.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="absolute top-4 right-4 bg-cyan-500/80 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-white shadow-md">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{facility.title}</h3>
                <p className="text-slate-200 text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-2">{facility.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 z-[110] bg-white/10 hover:bg-cyan-500 p-3 rounded-full text-white transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button 
              className="absolute left-4 md:left-12 z-[110] bg-white/10 hover:bg-cyan-500 p-4 rounded-full text-white transition-colors hidden md:block"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              className="absolute right-4 md:right-12 z-[110] bg-white/10 hover:bg-cyan-500 p-4 rounded-full text-white transition-colors hidden md:block"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Main Content */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={facilities[selectedImage].image} 
                alt={facilities[selectedImage].title} 
                className="w-full h-auto max-h-[70vh] object-contain rounded-2xl shadow-2xl mb-6"
              />
              <div className="text-center max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{facilities[selectedImage].title}</h3>
                <p className="text-slate-300 text-sm">{facilities[selectedImage].desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
