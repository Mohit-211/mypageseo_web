"use client";

const WhatsAppFloat = () => {
  const phoneNumber = "919811193926";
  const message = "Hi, I’d like to discuss a project with Blockcod.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-full bg-gray-100/95 px-4 py-2 shadow-lg backdrop-blur transition-all duration-300 hover:shadow-xl hover:scale-105"
    >
      {/* Icon Circle */}
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
          <path d="M20.52 3.48A11.91 11.91 0 0012.05 0C5.5 0 .13 5.37.13 11.92c0 2.1.55 4.14 1.6 5.93L0 24l6.34-1.66a11.92 11.92 0 005.71 1.45h.01c6.55 0 11.92-5.37 11.92-11.92 0-3.18-1.24-6.17-3.46-8.39zM12.06 21.7a9.77 9.77 0 01-4.99-1.37l-.36-.21-3.77.99 1-3.68-.23-.38a9.73 9.73 0 01-1.5-5.13c0-5.39 4.38-9.77 9.77-9.77 2.61 0 5.06 1.02 6.91 2.87a9.7 9.7 0 012.86 6.9c0 5.39-4.38 9.78-9.77 9.78zm5.45-7.31c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.5-.89-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.06 2.89 1.21 3.09.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
        </svg>
      </div>

      <span className="text-sm font-medium text-gray-700">WhatsApp us</span>
    </a>
  );
};

export default WhatsAppFloat;
