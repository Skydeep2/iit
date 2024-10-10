import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="bg-customGray flex flex-wrap justify-center  items-center p-5 md:p-10">
        <a href="#">
          <img src="images/gmail.png" alt="Gmail" className="w-12 md:w-16 mb-4 md:mb-0 mr-10" />
        </a>
        <a href="#">
          <FaYoutube className="text-red-600 text-4xl md:text-5xl mb-4 md:mb-0 mr-10" />
        </a>
        <a href="#">
          <BsLinkedin className="text-blue-700 text-3xl md:text-4xl mb-4 md:mb-0 mr-10" />
        </a>
        <a href="#">
          <img src="images/instagram.png" alt="Instagram" className="w-8 md:w-10 mb-4 md:mb-0 " />
        </a>
      </div>
    </>
  );
};

export default Footer;
