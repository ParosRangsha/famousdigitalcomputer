import React from 'react'
import { Link } from 'react-router-dom'

const Mybtn = ({ink, cap}) => {
  return (
    <Link to={ink} className='block text-center px-[10px] text-[18px] py-[10px] bg-[#fff] text-[#000] hover:text-[#fff] hover:bg-[#955] rounded-[5px] duration-[1s]'>{cap}</Link>
  )
}

export default Mybtn