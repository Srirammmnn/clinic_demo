import { Phone, MessageCircle } from 'lucide-react';

export default function StickyMobileButtons() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col gap-4 z-50">
      <a
        href="https://wa.me/919345893491"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
        {/* Tooltip */}
        <span className="absolute right-14 md:right-16 bg-white text-primary-900 text-sm font-medium py-1 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>

      <a
        href="tel:+919345893491"
        className="w-12 h-12 md:w-14 md:h-14 bg-primary-900 text-bg-light rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all group relative border border-primary-800"
        aria-label="Call Clinic"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" />
        {/* Tooltip */}
        <span className="absolute right-14 md:right-16 bg-white text-primary-900 text-sm font-medium py-1 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Call Clinic
        </span>
      </a>
    </div>
  );
}
