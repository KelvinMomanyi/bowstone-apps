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
      question: 'How much does it cost to set up a company in Kenya?',
      answer: 'Currently, the government charge $1,720 incorporation fee and $250 business registration fee.',
    },
    {
      question: 'Which business structure is the best to start in Kenya?',
      answer: 'Private limited company is the most common form of business in Hong Kong. It provides a separate legal entity and limited shareholder’s liability to his subscribed capital.',
    },
    {
        question: 'Can a foreigner own a business in Kenya?',
        answer: 'Yes, there is no resident requirement for shareholder of a Kenyan limited company.',
      },
      {
        question: 'How do I get a Business Registration Certificate?',
        answer: 'Companies Registry provide one-stop company and business registration service. Upon the approval of the application in paper form, the Registry will issue a Certificate of Incorporation together with a Business Registration Certificate both in A4 size white paper to the applicant.',
      },
      {
        question: "Can foreigners open a bank account in Kenya?",
        answer:"There is no legal restriction on foreigners to open (individual) bank account in Kenya. Yet, banks will ask for the purpose of the account, and why an account is required in Kenya. It is relatively easier for a Kenyan limited company (owned by foreigner) to open a bank account in Kenya. The banks will ask for the business background of the owner, planned activities of the limited company, and business proof of existing company (overseas company) operated by the same owner."
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
export default Faq