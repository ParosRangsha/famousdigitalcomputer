import React, { useContext } from 'react'
import Header from '../components/Header'
import { studentApi } from '../MyData/Students'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import thumbOne from '../photos/class.jpeg'
import Slider from 'react-slick'

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="home">
        <h1>This is home page</h1>
    </div>
  )
}

export default Home