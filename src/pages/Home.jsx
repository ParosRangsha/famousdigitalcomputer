import React, { useContext } from 'react'
import Banner from '../components/Banner'
import { studentApi } from '../MyData/Students'
import Container from '../components/Container'
import { PiMicrosoftWordLogo } from "react-icons/pi";


const Home = () => {
  return (
    <div className="home">
      <Banner/>
      <Container>
        <div className="py-[50px] flex justify-between gap-2">
          <div className="items p-[30px] bg-[#eee] flex flex-col justify-center items-center rounded-[15px]">
            <PiMicrosoftWordLogo className='text-[70px]'/>
            <h1>Microsoft Office Appliaction</h1>
          </div>
          <div className="items p-[30px] bg-[#eee] flex flex-col justify-center items-center rounded-[15px]">
            <PiMicrosoftWordLogo className='text-[70px]'/>
            <h1>Hardware & Networking</h1>
          </div>
          <div className="items p-[30px] bg-[#eee] flex flex-col justify-center items-center rounded-[15px]">
            <PiMicrosoftWordLogo className='text-[70px]'/>
            <h1>Spoken English</h1>
          </div>
          <div className="items p-[30px] bg-[#eee] flex flex-col justify-center items-center rounded-[15px]">
            <PiMicrosoftWordLogo className='text-[70px]'/>
            <h1>Graphics Design</h1>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home