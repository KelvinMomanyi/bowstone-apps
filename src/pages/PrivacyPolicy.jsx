import React from "react";
import useScrollToHash2 from "../components/useScrollToHash2";

const PrivacyPolicy = () => {
  useScrollToHash2;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800 pt-20">
      <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>

      <p className="mb-4">
        Welcome to our suite of Shopify apps, including AOVBoost, Carousel Slider App, and other tools built by our development studio. We are committed to protecting your privacy and handling your data responsibly. This policy explains what data we collect, how we use it, and your rights as a user.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-primary">1. Information We Collect</h2>
      <p className="mb-4">
        Depending on the app, we may collect the following data from your Shopify store:
        <ul className="list-disc ml-6 mt-2">
          <li>Store domain and email</li>
          <li>Access scopes granted by the merchant</li>
          <li>Public product, order, or customer data (based on app functionality)</li>
          <li>Usage data to improve user experience</li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-primary">2. How We Use Your Data</h2>
      <p className="mb-4">
        We use collected data solely to deliver and enhance the services provided by our apps, including but not limited to:
        <ul className="list-disc ml-6 mt-2">
          <li>Displaying product carousels or upsell recommendations</li>
          <li>Analyzing store or customer behavior to personalize experiences</li>
          <li>Storing app configuration preferences</li>
        </ul>
        We do <strong>not</strong> sell, rent, or share your data with third parties.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-primary">3. Data Storage & Security</h2>
      <p className="mb-4">
        Your data is stored using secure, encrypted methods and is protected using industry-standard security protocols. We take all reasonable steps to prevent unauthorized access or disclosure.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-primary">4. Your Rights</h2>
      <p className="mb-4">
        As a merchant, you may request access to, correction of, or deletion of your data at any time. Uninstalling one of our apps triggers an automated process to remove session-related data from our systems.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-primary">5. Contact Us</h2>
      <p className="mb-4">
        For questions or concerns about this privacy policy or your data, contact our support team at:
        <a href="mailto:kelvinmata42@gmail.com" className="text-blue-600 underline ml-1">
          kelvinmata42@gmail.com
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-primary">6. Additional Resources</h2>
      <ul className="list-disc ml-6">
        <li>
          <a href="/help/#faq" className="text-blue-600 underline">
            FAQ: Frequently Asked Questions
          </a>
        </li>
        <li>
          <a href="/help/#getting-started" className="text-blue-600 underline">
            Getting Started Guide
          </a>
        </li>
        <li>
          <a href="/help/#tutorials" className="text-blue-600 underline">
            Tutorials: Customize and optimize your apps
          </a>
        </li>
      </ul>

      <p className="text-sm text-gray-500 mt-12">
        Last updated: April 16, 2025
      </p>
    </div>
  );
};

export default PrivacyPolicy;
