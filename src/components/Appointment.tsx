import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

const departments = ["Cardiology", "Dermatology", "Orthopedics", "Neurology", "Pediatrics", "Dental", "Diagnostics", "Preventive Care"];
const doctors = {
  "Cardiology": ["Dr. Ananya Rao", "Dr. Vikram Singh"],
  "Dermatology": ["Dr. Meera Nair"],
  "Orthopedics": ["Dr. Arjun Mehta", "Dr. Rahul Sharma"],
  "Neurology": ["Dr. Rohan Kapoor"],
  "Pediatrics": ["Dr. Sarah Jacob"],
  "Dental": ["Dr. Amit Patel"],
  "Diagnostics": ["Dr. Priya Desai"],
  "Preventive Care": ["Dr. Sunita Reddy"]
};
const times = ["09:00 AM", "10:30 AM", "11:00 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

export default function Appointment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => setStep(s => Math.min(s + 1, 5));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="appointment" className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-medical-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-400/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Your next step starts here.
          </h2>
          <p className="text-slate-300 text-lg">
            Request an appointment with our specialists in just a few simple steps.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
          
          {/* Progress Sidebar */}
          <div className="w-full md:w-1/3 bg-slate-50 p-8 border-r border-slate-100 hidden md:block">
            <h3 className="text-lg font-bold text-primary-900 mb-8">Booking Process</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              {[
                { s: 1, title: "Department" },
                { s: 2, title: "Doctor" },
                { s: 3, title: "Date" },
                { s: 4, title: "Time" },
                { s: 5, title: "Details" }
              ].map((item) => (
                <div key={item.s} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className={`flex items-center justify-center w-6 h-6 rounded-full border-2 bg-white z-10 font-bold text-xs shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${
                    step >= item.s ? 'border-medical-600 text-medical-600' : 'border-slate-300 text-slate-400'
                  } ${step > item.s ? 'bg-medical-600 text-white border-medical-600' : ''}`}>
                    {step > item.s ? <CheckCircle2 className="w-4 h-4" /> : item.s}
                  </div>
                  <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] text-sm font-medium ${step >= item.s ? 'text-primary-900' : 'text-slate-400'}`}>
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="w-full md:w-2/3 p-8 lg:p-12">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex-1">
                    {/* Step 1: Department */}
                    {step === 1 && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary-900 mb-6">Choose Department</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {departments.map(dept => (
                            <button
                              key={dept}
                              onClick={() => { setFormData({ ...formData, department: dept, doctor: '' }); handleNext(); }}
                              className={`p-4 rounded-xl border text-left transition-all ${
                                formData.department === dept 
                                ? 'border-medical-600 bg-medical-50 text-medical-700' 
                                : 'border-slate-200 hover:border-medical-300 hover:bg-slate-50'
                              }`}
                            >
                              <span className="font-medium">{dept}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Doctor */}
                    {step === 2 && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary-900 mb-6">Choose Doctor</h3>
                        <div className="grid grid-cols-1 gap-3">
                          {formData.department && doctors[formData.department as keyof typeof doctors]?.map(doc => (
                            <button
                              key={doc}
                              onClick={() => { setFormData({ ...formData, doctor: doc }); handleNext(); }}
                              className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                                formData.doctor === doc 
                                ? 'border-medical-600 bg-medical-50 text-medical-700' 
                                : 'border-slate-200 hover:border-medical-300 hover:bg-slate-50'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                                  <User className="w-5 h-5 text-slate-500" />
                                </div>
                                <span className="font-medium">{doc}</span>
                              </div>
                              <ChevronRight className="w-5 h-5 opacity-50" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 3: Date */}
                    {step === 3 && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary-900 mb-6">Choose Date</h3>
                        <div className="relative">
                          <input 
                            type="date" 
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full p-4 rounded-xl border border-slate-200 focus:border-medical-500 focus:ring-2 focus:ring-medical-200 outline-none transition-all text-primary-900 font-medium"
                          />
                        </div>
                        <div className="mt-8">
                          <button
                            onClick={handleNext}
                            disabled={!formData.date}
                            className="w-full py-4 rounded-xl bg-primary-900 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-800 transition-colors"
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Time */}
                    {step === 4 && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary-900 mb-6">Choose Time</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {times.map(time => (
                            <button
                              key={time}
                              onClick={() => { setFormData({ ...formData, time: time }); handleNext(); }}
                              className={`p-3 rounded-xl border text-center transition-all ${
                                formData.time === time 
                                ? 'border-medical-600 bg-medical-50 text-medical-700' 
                                : 'border-slate-200 hover:border-medical-300 hover:bg-slate-50'
                              }`}
                            >
                              <span className="font-medium text-sm">{time}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 5: Details */}
                    {step === 5 && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary-900 mb-6">Patient Details</h3>
                        <form id="appointment-form" onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                            <input 
                              type="text" 
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full p-3 rounded-xl border border-slate-200 focus:border-medical-500 focus:ring-2 focus:ring-medical-200 outline-none transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                            <input 
                              type="email" 
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full p-3 rounded-xl border border-slate-200 focus:border-medical-500 focus:ring-2 focus:ring-medical-200 outline-none transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                            <input 
                              type="tel" 
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full p-3 rounded-xl border border-slate-200 focus:border-medical-500 focus:ring-2 focus:ring-medical-200 outline-none transition-all"
                            />
                          </div>
                        </form>
                        <div className="mt-8">
                          <button
                            type="submit"
                            form="appointment-form"
                            disabled={!formData.name || !formData.email || !formData.phone}
                            className="w-full py-4 rounded-xl bg-medical-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-medical-700 transition-colors shadow-lg shadow-medical-600/30"
                          >
                            Confirm Appointment
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Navigation Footer */}
                  {step > 1 && step < 5 && (
                    <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between">
                      <button 
                        onClick={handlePrev}
                        className="text-slate-500 hover:text-primary-900 font-medium text-sm transition-colors"
                      >
                        Back
                      </button>
                      <span className="text-slate-300 text-sm">Step {step} of 5</span>
                    </div>
                  )}
                  {step === 1 && (
                     <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                       <span className="text-slate-300 text-sm">Step 1 of 5</span>
                     </div>
                  )}
                  {step === 5 && (
                     <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between">
                        <button 
                          onClick={handlePrev}
                          className="text-slate-500 hover:text-primary-900 font-medium text-sm transition-colors"
                        >
                          Back
                        </button>
                       <span className="text-slate-300 text-sm">Step 5 of 5</span>
                     </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-900 mb-4">Request Received</h3>
                  <p className="text-slate-600 mb-8 max-w-sm">
                    Thank you, {formData.name.split(' ')[0]}. Our care team will contact you shortly to confirm your appointment.
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl w-full max-w-sm text-left mb-8 border border-slate-100">
                    <h4 className="font-semibold text-primary-900 mb-4 border-b border-slate-200 pb-2">Appointment Summary</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Department</span>
                        <span className="font-medium text-primary-900">{formData.department}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Doctor</span>
                        <span className="font-medium text-primary-900">{formData.doctor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Date & Time</span>
                        <span className="font-medium text-primary-900">{formData.date} at {formData.time}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                      setFormData({department: '', doctor: '', date: '', time: '', name: '', email: '', phone: ''});
                    }}
                    className="flex items-center gap-2 text-medical-600 font-medium hover:text-medical-800 transition-colors"
                  >
                    Book Another Appointment <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
