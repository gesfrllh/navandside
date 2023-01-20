import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import logo from '../image/logo_darma_henwa.png'
import {BsSearch} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='h-12 bg-gray-200 flex items-center '>
        <div className='border-2 border-gray-400 flex items-center justify-center w-12 h-full'>
            <GiHamburgerMenu size="20"/>
        </div>
        <div className='px-5 border-r-2 border-y-2 border-gray-400 h-full flex items-center justify-center'>
            <img src={logo} alt=""/>
        </div>
        <div className='px-6 border-r-2 border-y-2 border-gray-400 h-full flex items-center justify-center'>
            <div className='flex items-center bg-white border-2 border-gray-300 h-8 px-2'>
                <BsSearch className='h-full w-5 text-gray-500'/>
                <input type="text" className='border-none focus:outline-none px-2' placeholder='Search'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar