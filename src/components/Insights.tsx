import { motion } from 'framer-motion';
import { Clock, ArrowUpRight, BookOpen } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "5 Cardiovascular Symptoms You Should Never Ignore",
    category: "Preventive Cardiology",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "How Annual Diagnostic Screenings Extend Healthspan",
    category: "Preventive Medicine",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Optimizing Vascular & Brain Metabolism After 30",
    category: "Neurology",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Insights() {
  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200/80">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 bg-cyan-100/80 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-4">
              <BookOpen className="w-4 h-4 text-cyan-600" />
              <span>Medical Journal & Articles</span>
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Clinical Insights & Health Guidance
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.a
              key={article.id}
              href="#appointment"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group block bg-white rounded-3xl p-4 border border-slate-200/80 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-300 transition-all duration-300"
            >
              <div className="rounded-2xl overflow-hidden mb-5 relative h-56">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-cyan-400">
                  {article.category}
                </div>
              </div>
              
              <div className="p-2">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-3">
                  <Clock className="w-4 h-4 text-cyan-600" />
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </h3>
                
                <div className="flex items-center gap-1.5 text-cyan-600 font-bold text-xs group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
