import { Phone, MessageCircle } from 'lucide-react';

export default function StickyMobileButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href="https://wa.me/919345893491"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        {/* Tooltip */}
        <span className="absolute right-16 bg-white text-primary-900 text-sm font-medium py-1 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>

      <a
        href="tel:+919345893491"
        className="w-14 h-14 bg-primary-900 text-bg-light rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all group relative border border-primary-800"
        aria-label="Call Clinic"
      >
        <Phone className="w-6 h-6" />
        {/* Tooltip */}
        <span className="absolute right-16 bg-white text-primary-900 text-sm font-medium py-1 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Call Clinic
        </span>
      </a>
    </div>
  );
}
