import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2c2416] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Savor Catering</h3>
            <p className="text-amber-200">
              Elegant Flavors. Exceptional Service.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">contact@savorcatering.com</p>
            <p className="mb-2">(555) 123-4567</p>
            <p>123 Culinary Avenue, Foodie City</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-amber-200 hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-800 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Savor Catering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
