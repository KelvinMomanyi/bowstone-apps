import React from 'react'
import Breaker from './Breaker'

const Benefits = () => {
  return (
    <div id="pricing" className="w-full h-auto bg-white/70">
      {/* Header */}
      <div id="features" className="w-full flex flex-col justify-center items-center py-8 space-y-4">
        <h2 className="text-lg text-black font-primary">Pricing Plans</h2>
        <h1 className="text-3xl text-primary px-2 font-secondary text-center">
          Flexible Plans for Every Shopify Store
        </h1>
        <p className="text-center lg:px-96 px-12 text-black font-secondary">
          Whether you're just starting out or scaling your store, our pricing plans are built to support your journey—with no hidden fees and zero coding required.
        </p>
      </div>

      {/* Plans Section */}
      <div className="flex flex-col space-y-20 py-12">

        {/* Carousel Slider App Pricing */}
        <div className="w-full">
          <h2 className="text-2xl font-primary text-center text-primary mb-8">🖼 Carousel Slider App</h2>
          <div className="flex w-full items-center justify-center sm:flex-row flex-col gap-4 lg:px-48 px-4">

            <div className="lg:w-1/3 h-[600px] flex flex-col p-4 bg-primary border-b border-4 border-b-blue-400 rounded-xl text-white">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold p-2 font-primary">Full Access Plan</h2>
                <p className="text-center font-secondary">
                  Unlock full control with real-time syncing, unlimited carousels, and enhanced design features.
                </p>
              </div>
              <ul className="list-disc p-6 font-secondary flex flex-col justify-center items-center">
                <li>Unlimited Carousels</li>
                <li>Sync New Collections</li>
                <li>Advanced Layouts</li>
                <li>Full Customization</li>
                <li>Customer Support</li>
              </ul>
              <div className="w-full flex flex-col justify-center items-center text-center py-4">
                <h3 className="text-3xl font-secondary font-semibold">$6.99</h3>
                <span className="text-lg opacity-40 text-black">per month</span>
              </div>
              <div className="p-4 flex flex-col items-center">
                <a href="/apps/carousel" className="bg-white text-primary font-secondary p-3 rounded-full">
                  Start Free Trial
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* AOVBoost Pricing */}
        <div className="w-full">
          <h2 className="text-2xl font-primary text-center text-primary mb-8">🤖 AOVBoost (AI Cross-Sell)</h2>
          <div className="flex w-full items-center justify-center sm:flex-row flex-col gap-4 lg:px-48 px-4">

            {/* Starter Plan */}
            <div className="lg:w-1/3 h-[600px] flex flex-col p-4 bg-white border border-gray-300 rounded-xl text-black">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold p-2 font-primary">Starter Plan</h2>
                <p className="text-center font-secondary">
                  Great for new stores. AI-powered recommendations with limited monthly usage.
                </p>
              </div>
              <ul className="list-disc p-6 font-secondary flex flex-col justify-center items-center">
                <li>500 AI Tokens/month</li>
                <li>Smart Cart Suggestions</li>
                <li>Basic Placement Control</li>
                <li>Performance Reports</li>
              </ul>
              <div className="w-full flex flex-col justify-center items-center text-center py-4">
                <h3 className="text-3xl font-secondary font-semibold">$19.99</h3>
                <span className="text-lg opacity-40">per month</span>
              </div>
              <div className="p-4 flex flex-col items-center">
                <a href="/apps/aovboost" className="bg-primary text-white font-secondary p-3 rounded-full">
                  Start Free Trial
                </a>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="lg:w-1/3 h-[600px] flex flex-col p-4 bg-primary border-b border-4 border-b-blue-400 rounded-xl text-white">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold p-2 font-primary">Pro Plan</h2>
                <p className="text-center font-secondary">
                  Ideal for growing stores with more traffic and customizable logic.
                </p>
              </div>
              <ul className="list-disc p-6 font-secondary flex flex-col justify-center items-center">
                <li>2,000 AI Tokens/month</li>
                <li>Cart & Product Page Suggestions</li>
                <li>Custom Rules & Filters</li>
                <li>Insights Dashboard</li>
              </ul>
              <div className="w-full flex flex-col justify-center items-center text-center py-4">
                <h3 className="text-3xl font-secondary font-semibold">$99.99</h3>
                <span className="text-lg opacity-40 text-black">per month</span>
              </div>
              <div className="p-4 flex flex-col items-center">
                <a href="/apps/aovboost" className="bg-white text-primary font-secondary p-3 rounded-full">
                  Start Free Trial
                </a>
              </div>
            </div>

            {/* Grower Plan */}
            <div className="lg:w-1/3 h-[600px] flex flex-col p-4 bg-white border border-gray-300 rounded-xl text-black">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold p-2 font-primary">Grower Plan</h2>
                <p className="text-center font-secondary">
                  Designed for high-volume stores needing unlimited flexibility and AI usage.
                </p>
              </div>
              <ul className="list-disc p-6 font-secondary flex flex-col justify-center items-center">
                <li>10,000+ AI Tokens/month</li>
                <li>All Placement Options</li>
                <li>Priority Support</li>
                <li>Exportable Analytics</li>
              </ul>
              <div className="w-full flex flex-col justify-center items-center text-center py-4">
                <h3 className="text-3xl font-secondary font-semibold">$49.99</h3>
                <span className="text-lg opacity-40">per month</span>
              </div>
              <div className="p-4 flex flex-col items-center">
                <a href="/apps/aovboost" className="bg-primary text-white font-secondary p-3 rounded-full">
                  Start Free Trial
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Support CTA */}
      <div className="flex flex-col justify-center items-center lg:px-8 py-20 space-y-4 font-secondary">
        <h1 className="text-center text-2xl font-bold text-primary">Need help choosing a plan?</h1>
        <p className="text-center lg:px-48 px-8 text-black">
          Book a free call with our team. We’ll help you pick the best plan for your store’s needs and walk you through setup in minutes.
        </p>
        <div>
          <a href="/contact" className="rounded-full border-2 border-primary bg-primary hover:bg-white text-white hover:text-primary p-3 rounded-full">
            Talk to Sales
          </a>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

