import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-lg">© {new Date().getFullYear()} M.G. Kiruthika</p>
        <p className="mt-2">Email: <a href="mailto:tkiruthika33@gmail.com" className="underline">tkiruthika33@gmail.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
