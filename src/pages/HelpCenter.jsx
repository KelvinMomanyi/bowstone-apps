import React from "react";

const HelpCenter = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800 pt-20">
      <h1 id="faq" className="text-3xl font-bold mb-8 text-primary">Help Center</h1>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Q: What types of apps does your studio provide?</h3>
            <p>A: We build Shopify apps designed to enhance store functionality — including tools for cross-selling (like AOVBoost) and visual merchandising (like Carousel Slider).</p>
          </div>
          <div>
            <h3 className="font-semibold">Q: Are your apps beginner-friendly?</h3>
            <p>A: Yes! All our apps are no-code and designed for ease of use, with intuitive interfaces and drag-and-drop setup where applicable.</p>
          </div>
          <div>
            <h3 className="font-semibold">Q: Do your apps work on mobile?</h3>
            <p>A: Absolutely. All storefront features we provide are responsive and optimized for both desktop and mobile devices.</p>
          </div>
          <div>
            <h3 className="font-semibold">Q: Is customer data safe?</h3>
            <p>A: Yes. We follow industry-standard data protection and security practices. You can read more in our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.</p>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Getting Started Guide</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Install your chosen app (e.g., AOVBoost or Carousel Slider) from the Shopify App Store.</li>
          <li>Follow the in-app onboarding to configure settings based on your store needs.</li>
          <li>For Carousel Slider: add the app section via the theme editor and choose products or collections.</li>
          <li>For AOVBoost: enable smart recommendations from the dashboard, and adjust targeting preferences if needed.</li>
          <li>Save your changes and view live updates directly on your store.</li>
        </ol>
        <p className="mt-4 text-sm text-gray-500">
          Need help? Contact us at 
          <a href="mailto:kelvinmata42@gmail.com" className="underline text-blue-600 ml-1">kelvinmata42@gmail.com</a>
        </p>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Tutorials: Customize and Optimize</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Carousel Slider:</strong> Change displayed collections via the app settings or theme editor panel.</li>
          <li><strong>AOVBoost:</strong> Tweak AI recommendation rules, product filters, and display placement (cart, product page, etc.).</li>
          <li><strong>Styling:</strong> Adjust fonts, colors, and layout within each app’s design settings tab.</li>
          <li><strong>Multi-page use:</strong> Insert app blocks in multiple templates via Shopify theme editor.</li>
        </ul>
      </section>

      <p className="text-sm text-gray-500 mt-16">
        Last updated: April 16, 2025
      </p>
    </div>
  );
};

export default HelpCenter;
