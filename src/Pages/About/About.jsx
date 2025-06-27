import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 px-6 md:px-16 py-12 text-gray-800 dark:bg-gray-900 dark:text-white space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
          Who We Are & What Drives Us
        </h2>
        <p className="text-lg leading-relaxed font-medium text-gray-700 dark:text-gray-300">
          <strong>JobPond</strong> is a freelancer marketplace that connects
          skilled professionals with clients from around the world. Whether
          you're a designer, developer, writer, marketer, or beyond — JobPond
          empowers you to find projects, grow your career, and work with
          freedom.
        </p>

        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400 mt-4">
          Our mission is to build a secure, supportive, and interactive platform
          where freelancers can showcase their talent and clients can hire with
          confidence. JobPond makes it easy to discover freelance opportunities,
          communicate with clients, and deliver results that matter.
        </p>

        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400 mt-4">
          We believe in the power of remote work, global talent, and meaningful
          collaboration. At JobPond, every freelancer — from beginner to expert
          — deserves to feel valued, trusted, and inspired to contribute their
          best work.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-green-500 mb-3">
          Why JobPond?
        </h3>
        <ul className="space-y-2 pl-5 text-base list-disc text-gray-700 dark:text-gray-300">
          <li>🌍 Access freelance jobs from global clients</li>
          <li>👥 Join a trusted and secure freelancer network</li>
          <li>📈 Grow your skills with real-world projects</li>
          <li>🛡️ Safe payments and dispute resolution support</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
