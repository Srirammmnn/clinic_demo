import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Do you accept walk-in patients?',
    answer: 'Yes, we accept emergency walk-in patients. However, for specialized diagnostic consultations, we highly recommend booking an appointment online to minimize wait times.'
  },
  {
    question: 'What health insurance and cashless plans do you accept?',
    answer: 'We collaborate with major health insurance providers and TPA desks. Our desk handles cashless pre-authorizations seamlessly.'
  },
  {
    question: 'How quickly are diagnostic laboratory test results delivered?',
    answer: 'Routine diagnostic blood panels and imaging results are available within 4 to 12 hours. Critical diagnostic alerts are notified immediately by our team.'
  },
  {
    question: 'Do you offer online video consultations?',
    answer: 'Yes, our senior doctors conduct secure video consultations for follow-up visits, second opinions, and prescription renewals.'
  },
  {
    question: 'What documents should I bring to my first appointment?',
    answer: 'Please bring your valid photo ID, active insurance card, previous medical history summaries, and current medication lists.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 bg-cyan-50 border border-cyan-200/80 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-4">
            <HelpCircle className="w-4 h-4 text-cyan-600" />
            <span>Help & Answers</span>
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Clear information regarding appointment scheduling, diagnostics, insurance, and medical care.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'border-cyan-500 bg-cyan-50/20 shadow-md' 
                  : 'border-slate-200 hover:border-cyan-300 bg-white'
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-slate-900 text-lg group-hover:text-cyan-700 transition-colors">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === index ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-cyan-100 group-hover:text-cyan-700'
                }`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 shrink-0" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 border-t border-slate-200/50 pt-4 text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
