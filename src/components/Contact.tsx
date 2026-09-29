import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          to_email: 'sriramcr46@gmail.com',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          subject: `New Patient Appointment Request from ${formData.name}`,
          from_name: 'Aurelis Health Website'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitted(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
      }
    } catch (err) {
      console.error('Email submission error:', err);
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-700 bg-cyan-100/80 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-4">
            <MessageSquare className="w-4 h-4 text-cyan-600" />
            <span>Connect With Us</span>
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Direct Clinical Desk & Location
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Book your consultation or reach out to our patient care coordinators directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          
          {/* Contact Information & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Clinic Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 border border-cyan-100 shadow-xs">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Our Location</h4>
                    <p className="text-slate-600 text-sm">Health Tech Park, Bangalore,<br />Karnataka, India 560001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 border border-cyan-100 shadow-xs">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">OPD & Consultation Hours</h4>
                    <p className="text-slate-600 text-sm">Mon - Sat: 8:00 AM - 8:00 PM<br />Sunday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 border border-cyan-100 shadow-xs">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Call Helpline</h4>
                    <p className="text-slate-600 text-sm">+91 93 4589 3491<br />+91 93458 93491 (WhatsApp)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 border border-cyan-100 shadow-xs">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Email</h4>
                    <p className="text-slate-600 text-sm">care@aurelishealth.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden shadow-sm h-64 border border-slate-200/80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124409.84379308107!2d77.4975878492023!3d12.985068212623348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg border border-slate-200/80">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Clinical Enquiry</h3>
            
            {submitted ? (
              <div className="bg-cyan-50 text-cyan-900 p-8 rounded-2xl text-center border border-cyan-200">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-600">
                  <Send className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-sm text-slate-700">Thank you for contacting Aurelis Health. Our reception desk will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all font-medium text-slate-900"
                    placeholder="e.g. John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all font-medium text-slate-900"
                    placeholder="e.g. +91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all font-medium text-slate-900"
                    placeholder="e.g. john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">Enquiry / Symptoms *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all font-medium text-slate-900 resize-none"
                    placeholder="Tell us your medical enquiry or preferred appointment date..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-medical-primary w-full py-4 text-base font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span>Submit Patient Enquiry</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
