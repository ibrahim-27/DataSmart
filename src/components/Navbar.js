import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export default function Navbar() {

  const [nav, setnav] = useState(true);

  const handleMenuClick = () =>{
    setnav(!nav);
  }

  return (
    <>
    <div className='flex justify-between px-8 items-center h-16 md:justify-around md:px-0'>
        <h1 className='text-3xl font-bold text-[#00df9a]'>DataSmart</h1>
        <ul className='text-white hidden gap-4 md:flex'>
            <li className='hover:text-[#00df9a] cursor-pointer hover:underline'>Home</li>
            <li className='hover:text-[#00df9a] cursor-pointer hover:underline'>Company</li>
            <li className='hover:text-[#00df9a] cursor-pointer hover:underline'>Resources</li>
            <li className='hover:text-[#00df9a] cursor-pointer hover:underline'>About</li>
            <li className='hover:text-[#00df9a] cursor-pointer hover:underline'>Contact</li>
        </ul>
        {/*  */}
        <div onClick={handleMenuClick} className='md:hidden'>
          {!nav?<AiOutlineClose size={24} color='white'></AiOutlineClose>:<AiOutlineMenu size={24} color='white'></AiOutlineMenu>}
        </div>
    <div className={!nav?'bg-[#000300] border-r border-r-gray-600 fixed top-0 left-0 w-3/4 h-full pt-4 px-8 ease-in-out duration-500':'fixed left-[-100%]'}>
      <h1 className='text-3xl font-bold text-[#00df9a]'>REACT</h1>
      <ul className='text-white flex flex-col uppercase mt-8'>
          <li className='border-b border-b-gray-600 my-2 pb-2 hover:text-[#00df9a] cursor-pointer'>Home</li>
          <li className='border-b border-b-gray-600 my-2 pb-2 hover:text-[#00df9a] cursor-pointer'>Company</li>
          <li className='border-b border-b-gray-600 my-2 pb-2 hover:text-[#00df9a] cursor-pointer'>Resources</li>
          <li className='border-b border-b-gray-600 my-2 pb-2 hover:text-[#00df9a] cursor-pointer'>About</li>
          <li className='border-b border-b-gray-600 my-2 pb-2 hover:text-[#00df9a] cursor-pointer'>Contact</li>
      </ul>
    </div>
    </div>
    </>
  )
}
