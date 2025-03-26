import React, { useContext } from 'react'
import Header from '../components/Header'
import { studentApi } from '../MyData/Students'

const Home = () => {
    let [info, setinfo]= useContext(studentApi)
  return (
    <div className="home">
        <h1>This is home page</h1>
    </div>
  )
}

export default Home