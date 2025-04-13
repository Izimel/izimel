import React from 'react';
import { Mail } from 'lucide-react';
import { IconBrandWhatsapp, IconBrandTelegram } from '@tabler/icons-react';

function App() {
  const handleContactClick = (platform: 'whatsapp' | 'telegram') => {
    const message = encodeURIComponent("Hi! I'm interested in getting my personal email address with Izimel.");
    const links = {
      whatsapp: `https://wa.me/1234567890?text=${message}`,
      telegram: `https://t.me/izimel_bot?start=email`
    };
    window.open(links[platform], '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          {/* Logo */}
          <div className="flex items-center justify-center mb-12">
            <Mail className="w-12 h-12 text-black" />
            <span className="ml-3 text-3xl font-semibold text-black">
              Izimel
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl font-bold text-center mb-8 text-black leading-tight">
            Your name is Your email
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-center text-gray-600 mb-16">
            Get <span className="font-mono text-black">firstname@lastname.*</span> in seconds
            <br />
            <span className="text-gray-500">Manage everything through chat</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <button
              onClick={() => handleContactClick('whatsapp')}
              className="group w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-lg font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <IconBrandWhatsapp className="w-6 h-6" />
              Start with WhatsApp
            </button>
            <button
              onClick={() => handleContactClick('telegram')}
              className="group w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-lg font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <IconBrandTelegram className="w-6 h-6" />
              Start with Telegram
            </button>
          </div>

          {/* Features */}
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">⚡️</div>
                <h3 className="font-semibold text-black mb-2">Quick Setup</h3>
                <p className="text-gray-500 text-sm">Ready in 2 minutes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="font-semibold text-black mb-2">Chat Control</h3>
                <p className="text-gray-500 text-sm">Manage via messages</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="font-semibold text-black mb-2">Secure Access</h3>
                <p className="text-gray-500 text-sm">Simple password changes</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Izimel. All rights reserved.
      </footer>
    </div>
  );
}

export default App;