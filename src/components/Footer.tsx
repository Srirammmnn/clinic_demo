import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo2.jpg" 
                alt="Aurelis Healthcare Logo" 
                className="w-10 h-10 rounded-xl object-cover border border-cyan-500/30 shadow-md"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-wider leading-none text-white">
                  AURELIS
                </span>
                <span className="text-xs font-semibold tracking-[0.25em] leading-none mt-1 text-cyan-400">
                  HEALTHCARE
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Precision Diagnostics. Dedicated Care. We deliver high-precision medical excellence with patient-first empathy.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">About Aurelis</a></li>
              <li><a href="#specialists" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">Specialist Physicians</a></li>
              <li><a href="#facilities" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">Medical Infrastructure</a></li>
              <li><a href="#appointment" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">Book Appointment</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white mb-6">Medical Specialties</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">Cardiology & Vascular</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">Dermatology & Lasers</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">Orthopedics & Joint Care</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">Diagnostics & Imaging</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white mb-6">Clinical Desk</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Health Tech Park, Bangalore,<br />Karnataka, India 560001</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>+91 93 4589 3491</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <a href="mailto:care@aurelishealth.com" className="hover:text-cyan-400 transition-colors">care@aurelishealth.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Aurelis Health. All rights reserved. High-Precision Clinical Platform.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <span className="text-cyan-400 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 pulse-medical" />
              24/7 Helpline: +91 93458 93491
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
