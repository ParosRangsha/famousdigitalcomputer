import React from 'react'
import { Link } from 'react-router-dom'

const Mybtn = ({ink, cap}) => {
  return (
    <Link to={ink} className='py-[10px] px-[20px] bg-[#f00] text-[#fff] block rounded-[5px] hover:bg-[#955] font-bold hover:text-[#0f0]'>{cap}</Link>
  )
}

export default Mybtn