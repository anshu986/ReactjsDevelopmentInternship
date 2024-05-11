import React from 'react';
import Logo from '../images/Logo.png';
import { GoHome } from "react-icons/go";
import { FaGreaterThan } from "react-icons/fa6";

const Header = () => {
  return (
   <>
    <div>
        <div className='sm:flex sm:justify-between sm:mt-5 sm:mx-24 sm:mb-16'>
          <img src={Logo} alt="" className='w-[191px] h-[39px] flex'/>
          <div className='flex gap-10 items-center text-[18px] text-[#3A3740] font-[400]'>
            <div className='font-normal'>Home</div>
            <div className='font-normal'>Flashcard</div>
            <div className='font-normal'>Contact</div>
            <div className='font-normal'>FAQ</div>
            <button className='bg-gradient-to-b from-blue-900 to-blue-500 px-10 py-3.5 rounded-3xl text-white font-medium'>Login</button>
          </div>
        </div>

        <div className='flex items-center text-[18px] gap-2 xl:ml-28 font-semibold text-[#696671] '>
          <GoHome className='w-5 h-5 text-[#696671] font-semibold'/> <span className='text-[#06286E]'><FaGreaterThan className='w-2 h-2'/></span>Flashcard <span className='text-[#06286E]'><FaGreaterThan className='w-2 h-2' /></span> Mathematics <span className='text-[#06286E]'><FaGreaterThan className='w-2 h-2' /></span> <span className='text-[#06286E]'>Relation and Function</span>
        </div>
    </div>
   </>
  )
}

export default Header;
