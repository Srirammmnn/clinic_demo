import { Phone, MessageCircle } from 'lucide-react';

export default function StickyMobileButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3.5 z-50">
      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/919345893491"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-110 hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 group relative"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <MessageCircle className="w-6 h-6 z-10" />
        {/* Tooltip */}
        <span className="absolute right-16 bg-slate-900/90 text-white text-xs font-bold py-1.5 px-3 rounded-xl backdrop-blur-md shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap border border-slate-700/50">
          WhatsApp Reception
        </span>
      </a>

      {/* Direct Call FAB */}
      <a
        href="tel:+919345893491"
        className="w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 group relative border border-cyan-400/40"
        aria-label="Call Clinic"
      >
        <Phone className="w-6 h-6 z-10" />
        {/* Tooltip */}
        <span className="absolute right-16 bg-slate-900/90 text-white text-xs font-bold py-1.5 px-3 rounded-xl backdrop-blur-md shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap border border-slate-700/50">
          Call Emergency / Helpline
        </span>
      </a>
    </div>
  );
}
