
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5511999999999" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25d366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
      aria-label="Falar pelo WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.547 1.441 5.548 1.442 5.457 0 9.894-4.437 9.897-9.896 0-2.644-1.029-5.128-2.898-6.997-1.87-1.868-4.353-2.897-6.996-2.897-5.463 0-9.898 4.435-9.901 9.895-.001 2.1.55 4.147 1.591 5.945l-1.042 3.805 3.899-1.022zm11.332-6.551c-.301-.151-1.781-.878-2.057-.978-.275-.1-.476-.151-.676.151-.2.301-.777.978-.951 1.179-.175.2-.351.226-.651.075-.301-.151-1.27-.468-2.42-1.493-.894-.798-1.497-1.784-1.672-2.085-.175-.301-.019-.463.132-.612.135-.134.301-.351.451-.527.151-.176.201-.301.301-.502.1-.2.05-.376-.025-.527-.075-.151-.676-1.631-.926-2.235-.243-.591-.489-.513-.676-.522-.175-.008-.376-.01-.576-.01-.2 0-.527.075-.802.376-.275.301-1.053 1.029-1.053 2.51s1.078 2.912 1.228 3.113c.151.2 2.122 3.241 5.14 4.542.718.309 1.279.494 1.717.633.721.23 1.377.198 1.896.121.579-.085 1.781-.728 2.031-1.43.25-.702.25-1.305.175-1.43-.075-.126-.275-.201-.576-.352z"></path>
      </svg>
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Como podemos ajudar?
      </span>
    </a>
  );
};

export default WhatsAppButton;
