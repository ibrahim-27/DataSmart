import React from 'react'
import Laptop from '../assets/laptop.jpg'

export default function Analytics() {
  return (
    <div className='w-full py-4 bg-white'>
        <div className='grid md:grid-cols-2'>
            <img className='w-3/4 m-auto md:h-[85%]' src={Laptop} alt='Laptop'></img>
            <div className='my-auto mx-4'>
                <p className='text-[#00df9a] uppercase text-sm md:text-lg'>data analytics dashboard</p>
                <h1 className='text-xl font-bold pb-2 md:text-2xl lg:text-3xl'>Manage Data Analytics Centrally</h1>
                <p className='text-sm md:text-base'>Our cutting-edge system empowers businesses to streamline their data analytics processes by providing a unified and centralized hub for all data-related activities. With our user-friendly interface, you can easily access, analyze, and visualize data from various sources, enabling smarter decision-making and strategic planning.</p>
                <button className='bg-[#000300] text-[#00df9a] w-[120px] py-2 mt-2 rounded-sm mx-auto hover:border hover:border-black hover:text-black hover:bg-[#00df9a]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}
