export default function StickyMobileButtons() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex bg-white border-t border-slate-200 z-50">
      <a
        href="tel:+919345893491"
        className="flex-1 p-4 text-center font-bold text-primary-900 hover:bg-slate-50 transition-colors border-r border-slate-200 flex items-center justify-center gap-2"
      >
        📞 Call
      </a>

      <a
        href="https://wa.me/919345893491"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 p-4 text-center font-bold text-[#25D366] hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
