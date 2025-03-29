import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Container from './Container'
import { Link } from 'react-router-dom'



const Header = () => {
    let [myMenu, setmyMenu] = useState(['Home', 'Post', 'Report', 'About', 'Contact'])
  return (
    <div className="headermain bg-[#955] sticky top-0 left-0 w-full z-[998]">
        <Container>
            <div className="flex items-center py-[10px]">
                <div className="logo w-[20%]">
                    <Link to='/'>
                        <img src={logo} alt="logo" className='h-[50px]'/>
                    </Link>
                </div>
                <div className="menus w-[60%]">
                    <ul className='flex justify-center'>
                        {
                            myMenu.map((item, z)=>(
                                <li key={z}>
                                    <Link to={`/${item}`} className='w-[100px] block text-center px-[10px] text-[18px] py-[15px] hover:bg-[#fff] hover:rounded-[5px] duration-[1s]'>{item}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="user w-[20%] flex justify-end">
                    
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header