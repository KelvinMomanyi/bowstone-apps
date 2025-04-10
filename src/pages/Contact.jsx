import React, { useState } from 'react';
import Breaker from '../components/Breaker';
import { SlLock } from "react-icons/sl";
import { PiPhoneCallThin } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Contact = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleDropdown1 = () => setIsDropdownOpen1(!isDropdownOpen1);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };
  const handleOptionClick2 = (option) => {
    setSelectedOption1(option);
    setIsDropdownOpen1(false);
  };

  return (
    <div className='sm:pt-40 pt-36 lg:px-36 px-6 w-full h-auto flex flex-col'>
      <div className='w-full flex flex-col space-y-3'>
        <h3 className='text-primary font-primary text-xl'>Contact Us</h3>
        <h1 className='font-secondary text-5xl text-black lg:text-start text-center'>Need Help With Our Carousel App?</h1>
        <p className='lg:text-start text-center lg:w-3/5 pr-4 font-secondary text-black'>
          Have questions about setup, features, or pricing? Our support team is here to guide you. Drop us a message, and we’ll get back to you within one business day.
        </p>
      </div>

      <div className='flex lg:flex-row flex-col w-full space-y-4'>
        <div className='lg:w-2/3'>
          <div className='flex flex-col space-y-4 py-4 pr-4'>
            <input type="text" className='border border-primary py-2 px-4' placeholder='What do you need help with?' />
            <input type="text" className='border border-primary py-2 px-4' placeholder='Store Name or Company' />

            <span className='text-black'>Tell us more</span>
            <textarea className='border border-primary py-8 px-4' rows="4" cols="20" placeholder='Briefly describe your issue or request...' />

  

            <h3 className='text-xl font-secondary text-black'>Your Contact Details</h3>
            <div className='flex flex-col gap-4'>
              <div className='flex lg:flex-row flex-col gap-4'>
                <input type="text" className='border border-primary py-1 px-4' placeholder='First Name' />
                <input type="text" className='border border-primary py-1 px-4' placeholder='Last Name' />
              </div>
              <div className='flex lg:flex-row flex-col gap-4'>
                <input type="email" className='border border-primary py-1 px-4' placeholder='Business Email' />
                <input type="text" className='border border-primary py-1 px-4' placeholder='Phone (Optional)' />
              </div>
            </div>
          </div>

          <div className='py-4'>
            <button className='rounded-full bg-primary text-white px-6 py-2'>Submit Inquiry</button>
          </div>
        </div>

        <div className='lg:w-1/3'>
          <div className='w-3/4 space-y-4'>
            <h2 className='text-4xl text-black'>Other Ways to Reach Us</h2>
            <div className='flex gap-2 text-primary'>
              <PiPhoneCallThin size={30} /> +254 11 017 2437
            </div>
            <div className='flex gap-2 text-primary'>
              <GoMail size={30} /> bowstonestudios@gmail.com
            </div>
          </div>

          <h2 className='text-2xl font-secondary text-black py-2'>Privacy First</h2>
          <div className='flex gap-2 py-2'>
            <SlLock className='text-primary' size={40} />
            <p className='font-secondary text-primary'>
              We respect your privacy.<br />
              Your data will never be shared with third-parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
