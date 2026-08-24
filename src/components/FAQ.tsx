import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Do you accept walk-in patients?',
    answer: 'Yes, we accept walk-in patients. However, we highly recommend booking an appointment to minimize your waiting time, as priority is given to scheduled visits and emergencies.'
  },
  {
    question: 'What insurance plans do you accept?',
    answer: 'We accept most major insurance plans including BlueCross, Aetna, Cigna, and Medicare. Please contact our front desk with your specific insurance details to verify coverage before your visit.'
  },
  {
    question: 'How do I get my test results?',
    answer: 'Test results are typically available within 24-48 hours. Our doctors will personally call you if there are any critical findings. You can also collect physical copies from our front desk during working hours.'
  },
  {
    question: 'Do you offer telemedicine consultations?',
    answer: 'Yes, we offer secure video consultations for follow-ups, minor ailments, and prescription refills. You can book a tele-consultation through our website or by calling us directly.'
  },
  {
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring your valid photo ID, insurance card, a list of current medications, and any relevant past medical records or test results.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our clinic, services, and policies. If you need more information, feel free to contact us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-xl overflow-hidden hover:border-medical-500 transition-colors"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-primary-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-medical-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-600 border-t border-slate-100 pt-3">
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
