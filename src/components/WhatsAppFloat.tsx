import { siteConfig } from "@/lib/siteConfig";

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.contact.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Focus Studio on WhatsApp"
      className="fixed bottom-6 right-5 z-50 rounded-full border border-white/40 bg-[#25D366] p-4 text-white shadow-2xl transition hover:scale-105 active:scale-100"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M19.11 4.93A9.84 9.84 0 0 0 12.09 2a9.92 9.92 0 0 0-8.6 14.88L2 22l5.3-1.39a9.91 9.91 0 0 0 4.78 1.22h.01a9.92 9.92 0 0 0 7.02-16.9ZM12.08 20.1a8.2 8.2 0 0 1-4.19-1.14l-.3-.18-3.15.83.84-3.07-.2-.31a8.2 8.2 0 1 1 7 3.87Zm4.5-6.16c-.25-.13-1.49-.73-1.72-.81-.23-.09-.4-.13-.56.13-.17.25-.65.8-.8.96-.15.17-.3.19-.56.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.38.11-.51.12-.12.25-.3.38-.45.13-.15.17-.26.25-.43.08-.17.04-.32-.02-.45-.06-.13-.56-1.34-.77-1.84-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.45.06-.69.32-.24.25-.9.88-.9 2.14 0 1.27.93 2.5 1.06 2.67.13.17 1.83 2.8 4.43 3.92.62.27 1.1.43 1.48.55.62.2 1.18.17 1.62.11.5-.08 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.15-.48-.28Z" />
      </svg>
    </a>
  );
}
