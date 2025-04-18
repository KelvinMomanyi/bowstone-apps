import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
    const phoneNumber = '+254780958065';
    const message = ''; 
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    const handleDivClick = () => {
      // Find the anchor element by its ID or another selector
      const anchorElement = document.getElementById('whatsappLink'); // Replace with your actual anchor ID
  
      // Trigger a click on the anchor element
      if (anchorElement) {
        anchorElement.click();
      }
    };

  
      
    
  return (
   <div href={whatsappLink} className=' fixed bottom-4 right-4  bg-green-500 rounded-full flex z-20 p-3 gap-4' onClick={handleDivClick} >

    <FaWhatsapp color='white' size={40}/>
    <a id="whatsappLink" href={whatsappLink} target="_blank" rel="noopener noreferrer" className='flex flex-col z-10 text-white hidden sm:block'>
      <div className='flex flex-col font-secondary'>
        <span className='text-sm font-semibold'>Online Team</span>
        <span className='text-md'>Need Help, Chat with Us</span>
      </div>
    </a>
 
   </div>
  )
}

export default Whatsapp