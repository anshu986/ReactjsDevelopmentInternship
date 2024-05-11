import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa6";
import { Data } from '../Data';
const Faq = () => {
    const [show,setShow]=useState(false)
    const toggle=(index)=>{
        setShow((prevIndex) => (prevIndex === index ? null : index));
    }
  return (
    <>
        <div className='my-[130px] mx-28 xl:w-[848px] mb-[230px]     sm:mx-8 md:mx-16 lg:mx-24 sm:mb-16 md:mb-24 lg:mb-32 '>
        <p className='text-[48px]  font-[700] mb-5 gradient-text   sm:text-4xl md:text-5xl  '>FAQ</p>
            <div className='flex gap-5 flex-col'>
            {Data.map((item,ind)=>(
                <div className='rounded-[12px] border-[1px] border-[#217EEC] p-6 ' onClick={()=>toggle(ind)}>
                    <div className='flex text-[16px] font-[600] text-[#28262C] items-center justify-between   ' >
                    {item.question} <FaChevronDown />
                    </div>
                    <div className={` ${
              show === ind ? '' : 'hidden'
            }`}>{item.answer}</div>
                </div>
            ))}
                
            </div>
        </div>
    </>
  )
}

export default Faq
