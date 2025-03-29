import React, { useContext } from 'react'
import Banner from '../components/Banner'
import { studentApi } from '../MyData/Students'

const Home = () => {
  return (
    <div className="home">
      <Banner/>
    </div>
  )
}

export default Home