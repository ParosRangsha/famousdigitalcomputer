import React, { useContext } from 'react'
import Banner from '../components/Banner'
import { studentApi } from '../MyData/Students'
import Container from '../components/Container'
import { PiMicrosoftWordLogo } from "react-icons/pi";
import Courses from '../components/Courses';


const Home = () => {
  return (
    <div className="home">
      <Banner/>
      <Courses/>
    </div>
  )
}

export default Home