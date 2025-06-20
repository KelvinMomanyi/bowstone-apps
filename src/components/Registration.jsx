// import React from 'react'

// const Registration = () => {
//   return (
//    <div id='registration' className='py-4'>
//     <div className='w-full h-auto lg:px-56 px-6 pt-24'>
//         <h3 className='font-primary text-lg'>Shopify Carousel App Installation & Usage Guide</h3>
//       <div className='flex lg:flex-row flex-col gap-4 font-secondary'>
//         <div className='lg:w-1/3'>
//           <h1 className='font-semibold text-primary'>Get started with your product carousel in a few simple steps.</h1>
//           {/* Optional: You can add an illustrative image here */}
//         </div>
//         <div className='lg:w-2/3 text-black'>
//           <ul className='space-y-4'>
//             <li className='space-y-2 font-secondary'>
//                <h2 className='text-2xl font-semibold text-primary'>1. Install the carousel app from the Shopify App Store</h2> 
//                <p>Just like any embedded app, you can install the carousel by clicking the "Add app" button in the Shopify App Store. Once installed, it will automatically be available within your Shopify Admin dashboard.</p>
//             </li>
//             <li className='space-y-2 font-secondary'>
//                 <h2 className='text-2xl font-semibold text-primary'>2. Default behavior: displays all products</h2>
//                 <p>Out of the box, the carousel will automatically show all products from your store. No setup is required to display the initial product list.</p>
//             </li>
//             <li className='space-y-2 font-secondary'>
//                 <h2 className='text-2xl font-semibold text-primary'>3. Select a specific collection to display</h2>
//                 <p>Using the app's settings panel, you can choose a specific product collection to display in the carousel. This allows for targeted product showcasing across different pages or campaigns.</p>
//             </li>
//             <li className='space-y-2 font-secondary'>
//                 <h2 className='text-2xl font-semibold text-primary'>4. Customize product name and add-to-cart icon</h2>
//                 <p>In the settings, you can control the font size and color of the product name as well as the color and style of the "Add to Cart" icon. This helps match the carousel to your store's branding.</p>
//             </li>
//             <li className='space-y-2 font-secondary'>
//                 <h2 className='text-2xl font-semibold text-primary'>5. Navigate products with arrow controls</h2>
//                 <p>The carousel includes intuitive left and right arrow buttons. Clicking the right arrow loads the next product, while the left arrow shows the previous one, enabling smooth browsing for your customers.</p>
//             </li>
//             <li className='space-y-2 font-secondary'>
//                 <h2 className='text-2xl font-semibold text-primary'>6. Responsive and mobile-friendly</h2>
//                 <p>The carousel is fully responsive and works beautifully on all devices, ensuring a seamless shopping experience for desktop and mobile users alike.</p>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//    </div> 
//   )
// }

// export default Registration
import React from 'react';

const Registration = () => {
  return (
    <div id="registration" className="py-4 bg-white text-gray-800">
      <div className="w-full h-auto lg:px-56 px-6 pt-24 space-y-20">

        {/* Shared Intro */}
        <div>
          <h3 className="font-primary text-lg text-gray-600 uppercase mb-2">
            App Setup Guide
          </h3>
          <h1 className="font-bold text-3xl text-primary mb-4">
            Get Started with Our Shopify Apps
          </h1>
          <p className="text-lg text-gray-700">
            Follow the steps below to install and configure the Carousel Slider and AOVBoost apps for your store. Each app is designed to enhance your storefront and increase engagement with minimal effort.
          </p>
        </div>

        {/* Carousel App Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-primary">
            🖼 Carousel Slider App Setup
          </h2>
          <ul className="space-y-6 text-gray-900 font-secondary">
            <li>
              <h3 className="text-xl font-semibold text-primary mb-1">1. Install the Carousel Slider app</h3>
              <p>Install the app from the Shopify App Store. Once added, it will appear in your Shopify admin dashboard automatically.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-primary mb-1">2. Default behavior: show all products</h3>
              <p>The app initially displays all store products in a slider. No setup required to see your carousel working.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-primary mb-1">3. Select a specific collection</h3>
              <p>From the app’s settings panel, choose a product collection to display in the carousel for more targeted merchandising.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-primary mb-1">4. Style the layout</h3>
              <p>Customize font size, colors, and the Add to Cart icon to match your theme’s design.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-primary mb-1">5. Use arrow navigation</h3>
              <p>Built-in left and right arrow controls allow customers to scroll through products easily.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-primary mb-1">6. Mobile-ready</h3>
              <p>Fully responsive and optimized for desktop and mobile shopping experiences.</p>
            </li>
          </ul>
        </section>

        {/* AOVBoost Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-primary">
            🤖 AOVBoost App Setup (AI Cross-Sell Recommendations)
          </h2>
          <ul className="space-y-6 text-gray-900 font-secondary">
            <li>
              <h3 className="text-xl font-semibold text-primary mb-1">1. Install the AOVBoost app</h3>
              <p>Visit the Shopify App Store and click “Add app.” Once installed, it connects automatically to your product catalog and cart system.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-primary mb-1">2. AI activates automatically</h3>
              <p>There’s no need for manual configuration. AOVBoost analyzes product data and cart behavior to suggest relevant upsell products instantly.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-primary mb-1">3. Customize placement</h3>
              <p>Decide where recommendations should appear: on product pages, in the cart drawer, or after add-to-cart actions.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-primary mb-1">4. Token usage tracking</h3>
              <p>The app uses tokens to make AI-based recommendations. You can monitor your monthly token usage in the app dashboard.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-primary mb-1">5. Upgrade plan (if needed)</h3>
              <p>If your usage exceeds the monthly free token quota, you’ll be prompted to upgrade to a paid plan for continued functionality.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-primary mb-1">6. Analytics & performance</h3>
              <p>Track conversion impact directly in the dashboard — see which recommendations were clicked and which products were added to cart.</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Registration;
