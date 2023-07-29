import React from 'react'
import{
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
    FaGithubSquare,
    FaDribbble,

} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='text-white grid lg:grid-cols-3 py-6'>
      <div className='mx-4 flex flex-col gap-2 w-full items-center lg:items-start'>
        <h1 className='text-[#00df9a] font-bold text-2xl'>DataSmart</h1>
        <p className='text-sm text-center lg:text-left'>Streamline data analytics with our cutting-edge system. Access, analyze, and visualize data from multiple sources for smarter decision-making.</p>
        <div className='flex justify-around gap-4 lg:justify-between items-center'>
            <FaFacebookSquare size={24} className='hover:text-[#00df9a] cursor-pointer'/>
            <FaInstagram size={24} className='hover:text-[#00df9a] cursor-pointer'/>
            <FaTwitterSquare size={24} className='hover:text-[#00df9a] cursor-pointer'/>
            <FaGithubSquare size={24} className='hover:text-[#00df9a] cursor-pointer'/>
            <FaDribbble size={24} className='hover:text-[#00df9a] cursor-pointer'/>
        </div>
      </div>
      <div className='col-span-2 flex justify-around mt-6 lg:mt-2 mx-2'>
        <div className='flex flex-col gap-4'>
            <h1>Solutions</h1>
            <ul className='text-gray-400'>
                <li className='hover:text-[#00df9a] cursor-pointer'>Analytics</li>
                <li className='hover:text-[#00df9a] cursor-pointer'>Marketing</li>
                <li className='hover:text-[#00df9a] cursor-pointer'>Commerce</li>
                <li className='hover:text-[#00df9a] cursor-pointer'>Insights</li>
            </ul>
        </div>
        <div className='flex flex-col gap-4'>
            <h1>Support</h1>
            <ul className='text-gray-400'>
                <li className='hover:text-[#00df9a] cursor-pointer'>Pricing</li>
                <li className='hover:text-[#00df9a] cursor-pointer'>Documentation</li>
                <li className='hover:text-[#00df9a] cursor-pointer'>Guides</li>
                <li className='hover:text-[#00df9a] cursor-pointer'>API Status</li>
            </ul>
        </div>
        <div className='flex flex-col gap-4'>
            <h1>Company</h1>
            <ul className='text-gray-400'>
                <li className='hover:text-[#00df9a] cursor-pointer'>About</li>
                <li className='hover:text-[#00df9a] cursor-pointer'>Blog</li>
                <li className='hover:text-[#00df9a] cursor-pointer'>Jobs</li>
                <li className='hover:text-[#00df9a] cursor-pointer'>Press</li>
                <li className='hover:text-[#00df9a] cursor-pointer'>Careers</li>
            </ul>
        </div>
        <div className='flex flex-col gap-4'>
            <h1>Legal</h1>
            <ul className='text-gray-400'>
                <li className='hover:text-[#00df9a] cursor-pointer'>Claim</li>
                <li className='hover:text-[#00df9a] cursor-pointer'>Policy</li>
                <li className='hover:text-[#00df9a] cursor-pointer'>Terms</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
