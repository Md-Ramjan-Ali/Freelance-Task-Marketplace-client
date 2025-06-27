import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";
import FooterLogo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1f2937] text-white pt-10 pb-5">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5 lg:px-0">
          {/* Left: Text and Image */}
          <div>
            <div className="text-center md:text-left space-y-6 mb-10">
              <Link to="/" className="flex gap-1 items-center cursor-pointer">
                <img className="w-16" src={FooterLogo} alt="" />
                <h2 className=" text-2xl font-bold ">
                  <span className="text-green-500">Job</span>Pond
                </h2>
              </Link>
              <p className="mt-2 text-gray-300 max-w-sm">
                A freelancer marketplace is an online platform where clients can
                post tasks or projects and hire skilled freelancers to complete
                them.
              </p>
            </div>
          </div>
          <div className="space-y-10">
            <div className="">
              <h3 className="text-xl font-semibold text-white mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/browsetask" className="hover:text-white">
                    Browse Tasks
                  </Link>
                </li>
                <li>
                  <Link to="/dash/dashboard" className="hover:text-white">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
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
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div className="space-y-5 text-gray-300">
              <div className="flex items-start gap-3">
                <FaHome className="text-xl mt-1" />
                <p>
                  Freelance marketplace website, House 57, <br />
                  Road 7B, Block H, Banani, 1213, Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-xl" />
                <p>jobpond100@gmail.com</p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-xl" />
                <p>+88 01928-294516</p>
              </div>
            </div>
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
      </footer>
    </div>
  );
};

export default Footer;
