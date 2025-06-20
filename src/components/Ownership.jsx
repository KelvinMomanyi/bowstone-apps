import React from 'react'
import official from '../assets/Slider.png'
import View1 from '../assets/View1.jpeg' // replace with actual AOV image

const Ownership = () => {
  return (
    <div className="w-full h-auto bg-primary text-white">
      {/* Carousel Ownership */}
      <div className="w-full flex flex-col lg:flex-row lg:px-48 py-12">
        <div className="flex flex-col lg:w-1/2 p-8">
          <h3 className="text-lg font-primary">Full control over your product display.</h3>
          <h1 className="font-semibold font-secondary lg:text-6xl text-3xl">
            Customize and control your Shopify carousel exactly how you want.
          </h1>
          <p className="py-4 font-secondary">
            Our carousel slider app gives you complete flexibility in how your products are shown.
            From selecting specific collections to customizing the product name styling and cart
            icon colors, you’re in full control. With no coding required, merchants can easily
            configure how many products show at once and enable smooth left/right navigation to
            create a seamless user experience.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={official} alt="Carousel preview" className="w-full h-full object-cover px-2" />
        </div>
      </div>

      {/* AOV Boost Ownership */}
      <div className="w-full flex flex-col-reverse lg:flex-row lg:px-48 py-12">
        <div className="lg:w-1/2">
          <img src={View1} alt="AOV Boost preview" className="w-full h-full object-cover px-2" />
        </div>
        <div className="flex flex-col lg:w-1/2 p-8">
          <h3 className="text-lg font-primary">AI-powered upsells made easy.</h3>
          <h1 className="font-semibold font-secondary lg:text-6xl text-3xl">
            Smart recommendations tailored to every shopper.
          </h1>
          <p className="py-4 font-secondary">
            AOV Boost uses real-time customer data and AI to recommend the most relevant add-on
            products in the cart or on product pages—no configuration needed. Control where and how
            suggestions appear, monitor performance, and let your store automatically drive larger
            orders with every click.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ownership
