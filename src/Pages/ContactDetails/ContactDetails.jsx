import React from 'react';
import { FaEnvelope, FaHome, FaPhoneAlt } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-10 p-5">
       
        {/* message field */}
        <div className="">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
            GET IN TOUCH WITH US
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name *"
                className="border border-gray-300 p-3 w-full rounded outline-none focus:ring-2"
                required
              />
              <input
                type="email"
                placeholder="E-mail *"
                className="border border-gray-300 p-3 w-full rounded outline-none focus:ring-2"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 p-3 w-full rounded outline-none focus:ring-2"
              />
              <input
                type="text"
                placeholder="Subject *"
                className="border border-gray-300 p-3 w-full rounded outline-none focus:ring-2"
                required
              />
            </div>

            <textarea
              placeholder="Message"
              rows="5"
              className="border border-gray-300 p-3 w-full rounded outline-none focus:ring-2"
              required
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="btn px-8 py-3 rounded font-semibold bg-green-500 hover:bg-green-700 text-white"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;