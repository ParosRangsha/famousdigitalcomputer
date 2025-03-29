import React from 'react'
import { PiMicrosoftWordLogo } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { RiUserVoiceLine } from "react-icons/ri";
import { SiAdobephotoshop } from "react-icons/si";
import { FaLongArrowAltRight } from "react-icons/fa";
import Container from './Container';
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <div className="bg-[#ddd] py-[50px]">
      <Container>
        <div className="heading flex justify-between items-center bg-[#fff] mb-[5px]">
          <h1 className='font-bold text-[25px] pl-[20px] relative after:absolute after:content-[""] after:h-full after:w-[10px] after:bg-[#f00] after:left-0 after:top-0'>Our Courses</h1>
          <Link to='/course' className='flex items-center pr-[20px]'>Show all <FaLongArrowAltRight/> </Link>
        </div>
        <div className='flex justify-between'>
          <div className="items w-[24%] p-[30px] bg-[#eee] flex flex-col justify-center items-center rounded-[15px] hover:bg-[#f00] duration-[0.5s] cursor-pointer">
            <PiMicrosoftWordLogo className='text-[70px]'/>
            <h1>Microsoft Office Appliaction</h1>
          </div>
          <div className="items w-[24%] p-[30px] bg-[#eee] flex flex-col justify-center items-center rounded-[15px] hover:bg-[#f00] duration-[0.5s] cursor-pointer">
            <FaTools className='text-[70px]'/>
            <h1>Hardware & Networking</h1>
          </div>
          <div className="items w-[24%] p-[30px] bg-[#eee] flex flex-col justify-center items-center rounded-[15px] hover:bg-[#f00] duration-[0.5s] cursor-pointer">
            <RiUserVoiceLine className='text-[70px]'/>
            <h1>Spoken English</h1>
          </div>
          <div className="items w-[24%] p-[30px] bg-[#eee] flex flex-col justify-center items-center rounded-[15px] hover:bg-[#f00] duration-[0.5s] cursor-pointer">
            <SiAdobephotoshop className='text-[70px]'/>
            <h1>Graphics Design</h1>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Courses
