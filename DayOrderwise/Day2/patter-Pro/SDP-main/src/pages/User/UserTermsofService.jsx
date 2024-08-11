import React from 'react';
import { useLocation } from 'react-router-dom';

const TermsOfService = () => {
  // Use location to potentially handle routing or other dynamic elements
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-4xl w-full p-6 bg-white shadow-lg rounded-lg transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold text-center mb-6">
          Terms of Service
        </h1>
        <div className="prose lg:prose-xl">
          <p>Welcome to our Terms of Service page. Please read the following terms carefully before using our services.</p>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using our services, you agree to comply with and be bound by these terms. If you do not agree with these terms, please do not use our services.</p>
          <h2>2. Changes to Terms</h2>
          <p>We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page. You are advised to review these terms periodically for any changes.</p>
          <h2>3. Use of Services</h2>
          <p>You are responsible for your use of the services and must comply with all applicable laws and regulations.</p>
          <h2>4. Limitation of Liability</h2>
          <p>Our liability is limited to the maximum extent permitted by law. We are not liable for any indirect, incidental, or consequential damages arising out of your use of the services.</p>
          <h2>5. Contact Us</h2>
          <p>If you have any questions about these terms, please contact us at [your contact information].</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
