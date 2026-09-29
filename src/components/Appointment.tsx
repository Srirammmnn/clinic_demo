import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ChevronRight, CheckCircle2, ArrowRight, Calendar, Clock, Stethoscope, UserCheck, ShieldCheck } from 'lucide-react';

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
    <section id="appointment" className="py-24 bg-slate-900 relative overflow-hidden text-white">
      {/* Background cyan glow elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Instant Online Booking</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Schedule Your Visit
          </h2>
          <p className="text-slate-300 text-lg">
            Request an appointment with our specialist physicians in 5 easy steps.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[520px]">
          
          {/* Progress Sidebar */}
          <div className="w-full md:w-1/3 bg-slate-900 p-8 border-r border-slate-800 hidden md:block text-white">
            <h3 className="text-lg font-extrabold text-white mb-8 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-400" />
              <span>Booking Progress</span>
            </h3>
            <div className="space-y-7 relative">
              {[
                { s: 1, title: "Department", icon: Stethoscope },
                { s: 2, title: "Doctor", icon: UserCheck },
                { s: 3, title: "Date", icon: Calendar },
                { s: 4, title: "Time", icon: Clock },
                { s: 5, title: "Details", icon: User }
              ].map((item) => (
                <div key={item.s} className="relative flex items-center gap-4 group">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-xs shadow-md shrink-0 transition-all ${
                    step > item.s 
                      ? 'bg-cyan-500 text-white' 
                      : step === item.s 
                      ? 'bg-blue-600 text-white ring-4 ring-cyan-500/30' 
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}>
                    {step > item.s ? <CheckCircle2 className="w-4 h-4" /> : item.s}
                  </div>
                  <div className={`text-sm font-semibold transition-colors ${step >= item.s ? 'text-white' : 'text-slate-400'}`}>
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="w-full md:w-2/3 p-8 lg:p-12 bg-white">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col justify-between"
                >
                  <div className="flex-1">
                    {/* Step 1: Department */}
                    {step === 1 && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Select Department</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {departments.map(dept => (
                            <button
                              key={dept}
                              onClick={() => { setFormData({ ...formData, department: dept, doctor: '' }); handleNext(); }}
                              className={`p-4 rounded-2xl border text-left transition-all font-semibold text-sm flex items-center justify-between group ${
                                formData.department === dept 
                                ? 'border-cyan-500 bg-cyan-50 text-cyan-900 shadow-sm' 
                                : 'border-slate-200 hover:border-cyan-400 hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <span>{dept}</span>
                              <ChevronRight className="w-4 h-4 text-cyan-600 group-hover:translate-x-1 transition-transform" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Doctor */}
                    {step === 2 && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Select Specialist</h3>
                        <div className="grid grid-cols-1 gap-3">
                          {formData.department && doctors[formData.department as keyof typeof doctors]?.map(doc => (
                            <button
                              key={doc}
                              onClick={() => { setFormData({ ...formData, doctor: doc }); handleNext(); }}
                              className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                                formData.doctor === doc 
                                ? 'border-cyan-500 bg-cyan-50 text-cyan-900 shadow-sm' 
                                : 'border-slate-200 hover:border-cyan-400 hover:bg-slate-50 text-slate-800'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
                                  <User className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-base">{doc}</span>
                              </div>
                              <ChevronRight className="w-5 h-5 text-cyan-600 group-hover:translate-x-1 transition-transform" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 3: Date */}
                    {step === 3 && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Preferred Date</h3>
                        <div className="relative">
                          <input 
                            type="date" 
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full p-4 rounded-2xl border border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all text-slate-900 font-semibold"
                          />
                        </div>
                        <div className="mt-8">
                          <button
                            onClick={handleNext}
                            disabled={!formData.date}
                            className="btn-medical-primary w-full py-4 text-base font-bold disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            <span>Continue to Time Slot</span>
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Time */}
                    {step === 4 && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Select Available Time</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {times.map(time => (
                            <button
                              key={time}
                              onClick={() => { setFormData({ ...formData, time: time }); handleNext(); }}
                              className={`p-3.5 rounded-2xl border text-center transition-all font-semibold ${
                                formData.time === time 
                                ? 'border-cyan-500 bg-cyan-50 text-cyan-900 shadow-sm' 
                                : 'border-slate-200 hover:border-cyan-400 hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <span className="text-sm">{time}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 5: Details */}
                    {step === 5 && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Patient Information</h3>
                        <form id="appointment-form" onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                            <input 
                              type="text" 
                              required
                              placeholder="e.g. John Doe"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full p-3.5 rounded-xl border border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all font-medium text-slate-900"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                            <input 
                              type="email" 
                              required
                              placeholder="e.g. john@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full p-3.5 rounded-xl border border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all font-medium text-slate-900"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                            <input 
                              type="tel" 
                              required
                              placeholder="e.g. +91 98765 43210"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full p-3.5 rounded-xl border border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all font-medium text-slate-900"
                            />
                          </div>
                        </form>
                        <div className="mt-6">
                          <button
                            type="submit"
                            form="appointment-form"
                            disabled={!formData.name || !formData.email || !formData.phone}
                            className="btn-medical-primary w-full py-4 text-base font-bold disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            <span>Confirm Booking Request</span>
                            <CheckCircle2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Navigation Footer */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center text-sm font-semibold text-slate-500">
                    {step > 1 ? (
                      <button 
                        onClick={handlePrev}
                        className="text-slate-600 hover:text-cyan-600 font-bold transition-colors py-1 px-3 rounded-lg hover:bg-slate-100"
                      >
                        ← Back
                      </button>
                    ) : (
                      <span />
                    )}
                    <span>Step {step} of 5</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <CheckCircle2 className="w-10 h-10 text-cyan-600" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Request Confirmed!</h3>
                  <p className="text-slate-600 mb-8 max-w-sm">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our medical reception will contact you shortly to finalize your slot.
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl w-full max-w-sm text-left mb-8 border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Department</span>
                        <span className="font-semibold text-slate-900">{formData.department}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Specialist</span>
                        <span className="font-semibold text-slate-900">{formData.doctor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Date & Time</span>
                        <span className="font-semibold text-cyan-700">{formData.date} @ {formData.time}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                      setFormData({department: '', doctor: '', date: '', time: '', name: '', email: '', phone: ''});
                    }}
                    className="btn-medical-outline text-sm"
                  >
                    <span>Book Another Appointment</span>
                    <ArrowRight className="w-4 h-4" />
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
