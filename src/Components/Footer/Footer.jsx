import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';
import FooterLogo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="bg-gray-900 text-gray-100 py-10 px-5 mt-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column: Logo + Description */}
            <div>
              <Link to="/" className="flex gap-1 items-center cursor-pointer">
                <img className="w-16 " src={FooterLogo} alt="" />
                <h2 className=" text-2xl font-bold ">JobPond</h2>
              </Link>
              <p className="mt-2 text-gray-400">
                Discover and reserve seats at the most exciting local events.
                Stay connected with your community.
              </p>
            </div>

            {/* Middle Column: Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Important Info
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link to="/terms" className="hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Column: Social */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Follow Us
              </h3>
              <div className="flex gap-4 text-gray-300 text-lg">
                <a
                  href="https://www.facebook.com/share/15NASC5RNv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://x.com/saiful2829"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/ra_mjan8549/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <FaInstagram />
                </a>
                <a
                  href="www.linkedin.com/in/md-ramjan-ali-1bb369324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="text-center text-gray-500 text-sm mt-8 border-t pt-4 border-gray-700">
            © {new Date().getFullYear()} Event Explorer. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;