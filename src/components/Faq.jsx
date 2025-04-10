import React, { useState } from 'react';

const FaqDropdown = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        className="flex items-center justify-between bg-gray-200 p-4 cursor-pointer"
        onClick={toggleDropdown}
      >
        <h3 className="text-lg font-semibold font-secondary">{question}</h3>
        <svg
          className={`w-6 h-6 transition-transform transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="bg-white p-4 border-t border-gray-300">
          <p className="text-gray-700 font-secondary">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: 'How do I install the carousel slider from the Shopify App Store?',
      answer: 'Simply visit the Shopify App Store, search for our Carousel Slider app, and click "Add App". Follow the prompts to install and configure it for your store.',
    },
    {
      question: 'Can I select specific collections to display in the carousel?',
      answer: 'Yes, the app allows you to choose which collection you want to display in the carousel. By default, it will show all products, but you can customize it to show specific collections.',
    },
    {
      question: 'How can I change the product name size and color in the carousel?',
      answer: 'You can easily adjust the size and color of the product name and "Add to Cart" icon through the app settings. No coding required—just use the provided options in the customization panel.',
    },
    {
      question: 'How do I navigate between products in the carousel?',
      answer: 'The carousel includes intuitive navigation arrows—use the right arrow to view the next product and the left arrow to view the previous product.',
    },
    {
      question: 'Is there any customization for the carousel’s appearance?',
      answer: 'Yes! The app provides several customization options for size, layout, colors, and more to match your store’s design. You can personalize the carousel to fit seamlessly with your theme.',
    }
    // Add more FAQ items as needed
  ];

  return (
    <div className='text-primary lg:px-72 px-4 py-8'>
        <div className='flex flex-col justify-center items-center text-center py-8'>
            <span className='font-primary'>FAQ</span>
            <h1 className='text-4xl font-semibold font-secondary'>Common Questions</h1>
        </div>
      {faqData.map((faq, index) => (
        <FaqDropdown key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Faq;
