import React from "react";

const Footer = () => {
  return (
    <footer class="bg-[#1e1f26] text-gray-300 py-10 px-6 md:px-20 border-t border-gray-700">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="flex flex-col items-center md:items-start space-y-2">
          <h2 class="text-xl font-bold tracking-tight text-white">
            DUNG<span class="text-[#ff4d4d]">.DEV</span>
          </h2>
          <p class="text-sm text-gray-500">© 2026 Dung. All rights reserved.</p>
        </div>

        <div class="flex flex-col items-center md:items-start space-y-3">
          <div class="flex items-center space-x-3 group">
            <span class="text-[#ff4d4d]">
              <i class="fas fa-envelope"></i>
            </span>
            <a
              href="mailto:nadung.hutech@gmail.com"
              class="hover:text-white transition-colors"
            >
              nadung.hutech@gmail.com
            </a>
          </div>
          <div class="flex items-center space-x-3 group">
            <span class="text-[#ff4d4d]">
              <i class="fas fa-phone-alt"></i>
            </span>
            <a
              href="tel:+84394468285"
              class="hover:text-white transition-colors"
            >
              +84 394 468 285
            </a>
          </div>
        </div>

        <div class="flex flex-col items-center md:items-end space-y-4">
          <div class="flex items-center space-x-6">
            <a
              href="https://github.com/nguyendung113-cyber"
              target="_blank"
              class="text-3xl text-gray-300 hover:text-[#ff4d4d] transition-all transform hover:-translate-y-1"
            >
              <i class="fab fa-github"></i>
            </a>

            <a
              href="https://www.facebook.com/nguyen.dung.710310/"
              target="_blank"
              class="text-3xl text-[#ff4d4d] hover:text-white transition-all transform hover:-translate-y-1"
            >
              <i class="fab fa-facebook"></i>
            </a>

            <a
              href="#"
              class="text-3xl text-gray-300 hover:text-[#ff4d4d] transition-all transform hover:-translate-y-1"
            >
              <i class="fas fa-cube"></i>
            </a>
          </div>

          <p class="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-bold">
            GitHub | Facebook
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
