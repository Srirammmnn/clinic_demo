import { motion } from 'framer-motion';
import { Clock, ArrowUpRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "5 signs you shouldn't ignore",
    category: "Preventive Health",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "How preventive health checks can change your future",
    category: "Wellness",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Understanding heart health after 30",
    category: "Cardiology",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Insights() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-medical-600 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
              Health Insights
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-4">
              Better health starts with better information.
            </h2>
          </motion.div>
          <motion.a 
            href="#all-articles"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:inline-flex items-center gap-2 text-medical-600 font-medium hover:text-medical-800 transition-colors"
          >
            View All Articles <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.a
              key={article.id}
              href={`#article-${article.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group block"
            >
              <div className="rounded-2xl overflow-hidden mb-6 relative h-64">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-900">
                  {article.category}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-medical-600 transition-colors line-clamp-2">
                {article.title}
              </h3>
              
              <div className="flex items-center gap-2 text-medical-600 font-medium group-hover:translate-x-2 transition-transform">
                Read Article <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#all-articles" className="inline-flex items-center gap-2 text-medical-600 font-medium">
            View All Articles <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
