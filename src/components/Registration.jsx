import React from 'react'

const Registration = () => {
  return (
   <div id='registration' className='py-4'>
    <div className='w-full h-auto lg:px-56 px-6 pt-24'>
        <h3 className='font-primary text-lg'>Shopify Carousel App Installation & Usage Guide</h3>
      <div className='flex lg:flex-row flex-col gap-4 font-secondary'>
        <div className='lg:w-1/3'>
          <h1 className='font-semibold text-primary'>Get started with your product carousel in a few simple steps.</h1>
          {/* Optional: You can add an illustrative image here */}
        </div>
        <div className='lg:w-2/3 text-black'>
          <ul className='space-y-4'>
            <li className='space-y-2 font-secondary'>
               <h2 className='text-2xl font-semibold text-primary'>1. Install the carousel app from the Shopify App Store</h2> 
               <p>Just like any embedded app, you can install the carousel by clicking the "Add app" button in the Shopify App Store. Once installed, it will automatically be available within your Shopify Admin dashboard.</p>
            </li>
            <li className='space-y-2 font-secondary'>
                <h2 className='text-2xl font-semibold text-primary'>2. Default behavior: displays all products</h2>
                <p>Out of the box, the carousel will automatically show all products from your store. No setup is required to display the initial product list.</p>
            </li>
            <li className='space-y-2 font-secondary'>
                <h2 className='text-2xl font-semibold text-primary'>3. Select a specific collection to display</h2>
                <p>Using the app's settings panel, you can choose a specific product collection to display in the carousel. This allows for targeted product showcasing across different pages or campaigns.</p>
            </li>
            <li className='space-y-2 font-secondary'>
                <h2 className='text-2xl font-semibold text-primary'>4. Customize product name and add-to-cart icon</h2>
                <p>In the settings, you can control the font size and color of the product name as well as the color and style of the "Add to Cart" icon. This helps match the carousel to your store's branding.</p>
            </li>
            <li className='space-y-2 font-secondary'>
                <h2 className='text-2xl font-semibold text-primary'>5. Navigate products with arrow controls</h2>
                <p>The carousel includes intuitive left and right arrow buttons. Clicking the right arrow loads the next product, while the left arrow shows the previous one, enabling smooth browsing for your customers.</p>
            </li>
            <li className='space-y-2 font-secondary'>
                <h2 className='text-2xl font-semibold text-primary'>6. Responsive and mobile-friendly</h2>
                <p>The carousel is fully responsive and works beautifully on all devices, ensuring a seamless shopping experience for desktop and mobile users alike.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
   </div> 
  )
}

export default Registration
