import React from 'react'
import Typed from 'react-typed'

export default function Hero() {
  return (
    <div className='text-white h-screen w-full flex items-center justify-center mt-[-96px]'>
        <div className='text-center flex flex-col'>
            <p className='text-[#00df9a] uppercase text-base md:text-lg'>Growing with data analytics</p>
            <h1 className='text-5xl font-bold pb-2 sm:text-5xl md:text-6xl'>Grow with data</h1>
            <div className='flex gap-1 items-center justify-center text-base md:text-xl'>
                <p className=''>Fast, flexible financing for</p>
                <Typed className='text-[#00df9a]' strings={['BTC', 'BTB', 'SaaS']} typeSpeed={80} backSpeed={90} loop/>
            </div>
            <p className='text-gray-500 text-md px-4 py-2 md:px-1 md:text-lg'>Monitor your data analytics to increase revenue for BTC, BTB, & SASS platforms.</p>
            <button className='text-black text-xl bg-[#00df9a] mt-2 py-1 rounded-sm w-[120px] mx-auto hover:border hover:border-[#00fd9a] hover:text-[#00df9a] hover:bg-black'>Join Us</button>
        </div>
    </div>
  )
}
