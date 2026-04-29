import React from "react";
import { contactInfo, socialLinks } from "../../data";

/**
 * Footer - Component chân trang
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e1f26] text-gray-300 py-10 px-6 md:px-20 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h2 className="text-xl font-bold tracking-tight text-white">
            DUNG<span className="text-[#ff4d4d]">.DEV</span>
          </h2>
          <p className="text-sm text-gray-500">
            © {currentYear} Dung. All rights reserved.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <div className="flex items-center space-x-3 group">
            <span className="text-[#ff4d4d]">
              <i className="fas fa-envelope"></i>
            </span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-white transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>
          <div className="flex items-center space-x-3 group">
            <span className="text-[#ff4d4d]">
              <i className="fas fa-phone-alt"></i>
            </span>
            <a
              href={`tel:${contactInfo.phoneRaw}`}
              className="hover:text-white transition-colors"
            >
              {contactInfo.phone}
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-300 hover:text-[#ff4d4d] transition-all transform hover:-translate-y-1"
                aria-label={social.name}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-bold">
            GitHub | Facebook
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
