import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import Craftify_Logo from "../assets/Craftify_logo_dark.png";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="bg-gray-900 text-white px-4 py-5 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand */}
        <img
          src={Craftify_Logo}
          alt="Craftify Interiors and Constructions Logo"
          className="h-[50px] md:h-[70px] w-auto object-contain"
        />

        {/* Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/sumu9897"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-colors duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://linkedin.com/in/md-sumon9897"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="mailto:mohammad.sumon9897@gmail.com"
            className="hover:text-yellow-500 transition-colors duration-300"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Craftify Interiors. All rights
          reserved.
        </p>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
