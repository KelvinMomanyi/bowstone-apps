import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        Welcome to the Carousel Slider App for Shopify. We are committed to protecting your privacy and handling your data responsibly. This privacy policy outlines what data we collect, how we use it, and your rights as a user.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect the following information from your store:
        <ul className="list-disc ml-6 mt-2">
          <li>Store domain and email</li>
          <li>Access scopes granted by the merchant</li>
          <li>Public product data (used for creating sliders)</li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Data</h2>
      <p className="mb-4">
        We only use your data to provide the functionality of the Carousel Slider App, including:
        <ul className="list-disc ml-6 mt-2">
          <li>Displaying product sliders on your storefront</li>
          <li>Storing preferences for slider configurations</li>
        </ul>
        We do not sell or share your data with third parties.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Data Storage & Security</h2>
      <p className="mb-4">
        All data is securely stored and encrypted. We use industry-standard practices to safeguard your information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Your Rights</h2>
      <p className="mb-4">
        You can request to view, update, or delete any of your stored data at any time. If you uninstall the app, we automatically remove all session data related to your store.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns, feel free to contact us at:  
        <a href="mailto:support@yourcarouselapp.com" className="text-blue-600 underline ml-1">support@yourcarouselapp.com</a>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Additional Resources</h2>
      <ul className="list-disc ml-6">
        <li>
          <a href="/faq" className="text-blue-600 underline">
            FAQ: Frequently Asked Questions
          </a>
        </li>
        <li>
          <a href="/help/getting-started" className="text-blue-600 underline">
            Getting Started Guide
          </a>
        </li>
        <li>
          <a href="/help/tutorials" className="text-blue-600 underline">
            Tutorials: Customize your carousel
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
