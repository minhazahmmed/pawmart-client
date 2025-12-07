import React from 'react';
import { FaPaw, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-linear-to-b from-pink-50 to-purple-100 text-base-content p-10 shadow-inner">
      
      {/* Logo + About */}
      <aside>
        <div className="flex items-center gap-3">
          <FaPaw className="text-4xl text-purple-600" />
          <h2 className="text-2xl font-bold text-purple-700">PetCare Hub</h2>
        </div>

        <p className="text-gray-600 leading-6 mt-2 max-w-xs">
          Your trusted partner for winter pet care, grooming, health tips and
          professional pet services. Because your pet deserves the best!
        </p>

        <div className="flex items-center gap-3 mt-4">
          <FaPhoneAlt className="text-purple-600" />
          <p className="text-gray-700 font-medium">+880 1234-567890</p>
        </div>

        <div className="flex items-center gap-3 mt-1">
          <FaEnvelope className="text-purple-600" />
          <p className="text-gray-700 font-medium">support@petcarehub.com</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 text-purple-700 text-xl">
          <FaFacebook className="hover:text-purple-900 cursor-pointer duration-200" />
          <FaInstagram className="hover:text-purple-900 cursor-pointer duration-200" />
          <FaYoutube className="hover:text-purple-900 cursor-pointer duration-200" />
        </div>
      </aside>

      {/* Services Links */}
      <nav>
        <h6 className="footer-title text-purple-700">Pet Services</h6>
        <a className="link link-hover text-gray-700">Winter Grooming</a>
        <a className="link link-hover text-gray-700">Vet Consultation</a>
        <a className="link link-hover text-gray-700">Pet Health Check</a>
        <a className="link link-hover text-gray-700">Pet Nutrition Guide</a>
      </nav>

      {/* Company Links */}
      <nav>
        <h6 className="footer-title text-purple-700">Company</h6>
        <a className="link link-hover text-gray-700">About Us</a>
        <a className="link link-hover text-gray-700">Our Team</a>
        <a className="link link-hover text-gray-700">Careers</a>
        <a className="link link-hover text-gray-700">Contact</a>
      </nav>

      {/* Legal Links */}
      <nav>
        <h6 className="footer-title text-purple-700">Legal</h6>
        <a className="link link-hover text-gray-700">Terms & Conditions</a>
        <a className="link link-hover text-gray-700">Privacy Policy</a>
        <a className="link link-hover text-gray-700">Cookie Policy</a>
        <a className="link link-hover text-gray-700">Refund Policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
