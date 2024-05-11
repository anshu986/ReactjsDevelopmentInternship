import React, { useState } from 'react'
import { AiOutlineBulb } from "react-icons/ai";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { TbReload } from "react-icons/tb";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RiFullscreenFill } from "react-icons/ri";
import Logo_icon from '../images/logo_icon.png';
import Logo_name from '../images/logo_name.png';
import { FaCirclePlus } from "react-icons/fa6";


const Flashcard = () => {
    const [card,setcard]=useState(false);
    const changeText =()=>{
        setcard(!card)
    }
  return (
   <>

    <div className='mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-28 mt-16'>
        <div className='gradient-text font-bold text-[32px] sm:text-2xl md:text-3xl'>Relations and Functions ( Mathematics )</div>
        <div>
            <div className='flex gap-[40px] text-[20px] font-[500]  mt-14 mb-9 text-[#696671] flex-wrap sm:gap-4 md:gap-6 lg:gap-8 justify-center sm:mt-12 md:mt-16 sm:mb-12 md:mb-16  '>
            <p className='text-[#06286E] '>Study <hr  className='h-[3px] bg-[#06286E]'/></p>
            <p>Quiz</p>
            <p>Test</p>
            <p>Game</p>
            <p>Others</p>
                </div>
            <div   className={` ${card === true ? 'bg-gradient-to-bl from-[#0D2956]  via-[#1B5280] to-[#2C85B4] text-white w-[712px] h-[394px] rounded-[42.51px] mx-auto' : 'bg-gradient-to-bl from-[#051A91]  via-[#2284F1] to-[#1F80EB] text-white w-[712px] h-[394px] rounded-[42.51px] mx-auto' } w-full sm:w-[712px] `}   onClick={changeText}>
                <div className='card_header flex justify-between p-8' > <AiOutlineBulb className='' size={32}/> <HiMiniSpeakerWave size={32}/> </div>
                <div className='pt-[90.28px]  font-bold text-[38.26px] text-center sm:pt-24 md:pt-32  sm:text-3xl md:text-4xl '>{card===true?'5x + 12':'9 + 6 + 7x - 2x - 3'}</div>
            </div>
            <div className='flex items-center justify-between mx-auto gap-4 sm:gap-6 lg:gap-8 w-full sm:w-[612px] mt-6'>
    <TbReload size={40} className='text-[#051A91]'/>
    <div className='flex items-center justify-between gap-4 sm:gap-6 lg:gap-8'>
        <IoIosArrowDropleftCircle className='text-[#051A91]' size={40}/> 
        <span className='text-[24px] sm:text-xl md:text-2xl lg:text-3xl '>01/10</span>  
        <IoIosArrowDroprightCircle className='text-[#051A91]' size={40}/>
    </div>
    <RiFullscreenFill size={40} className='text-[#051A91]'/>
</div>
        </div>
        <div className='flex justify-between mt-[70px] sm:mt-14 md:mt-20 lg:mt-24 xl:mt-28'>
          <div className='flex gap-2 items-center'>
            <div className='flex gap-[21.26px] items-center'> 
            <div className='rounded-[50%] bg-[white] w-[80.6px] h-[80.6px] flex justify-center items-center shadow-[0_0_31px_0px_#08389966]'>
              <img src={Logo_icon} alt="" className='w-[44.69px] h-[34.54px]'/>
            </div>
            <div className='flex flex-col items-center '> 
            
            <p>Published by</p>
            <img src={Logo_name} alt="" /></div>
          </div>
            </div>
            
          <div className='flex items-center  gap-[8px] '>
            <div><FaCirclePlus size={40} className='text-[#051A91]'/></div>
            <div className='text-lg sm:text-xl md:text-2xl lg:text-3xl  gradient-text  flex items-center text-[28px] font-[600] gradient-text'>Create Flashcard</div>
          </div>
        </div>
    </div>
   </>
  
  )
}

export default Flashcard

