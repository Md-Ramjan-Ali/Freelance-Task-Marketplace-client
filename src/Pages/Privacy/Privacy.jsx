import React from 'react';

const Privacy = () => {
  return (
    <div>
     
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-pink-500 mb-4">
          Privacy Policy
        </h2>
        <p className="text-lg mb-6">
          At Event Explore, we respect your privacy. This policy outlines what
          data we collect and how we use it.
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            We collect basic information such as name, email, and profile
            picture during registration.
          </li>
          <li>Your data is stored securely using Firebase Authentication.</li>
          <li>
            We do not sell or share your personal information with third
            parties.
          </li>
          <li>We use cookies to enhance your user experience and analytics.</li>
          <li>
            You have the right to request deletion of your account and data at
            any time.
          </li>
        </ul>
        <p className="mt-6 text-base">
          For any privacy-related concerns, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default Privacy;