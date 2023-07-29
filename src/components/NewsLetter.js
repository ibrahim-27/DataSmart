import React from 'react'

export default function NewsLetter() {
  return (
    <div className='text-white w-full py-4'>
      <div className='grid mx-auto p-8 align-middle justify-center lg:grid-cols-3 md:px-12 lg:px-24'>
        <div className='p-4 lg:col-span-2'>
            <h1 className='text-2xl font-bold'>Want tips & tricks to optimize your flow?</h1>
            <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='px-4 lg:p-4'>
            <input className='py-1 px-2' type='email' placeholder='Enter your email'></input>
            <button className='bg-[#00df9a] rounded-sm py-1 px-2 my-2 lg:ml-2 lg:mt-0 hover:border hover:border-[#00fd9a] hover:text-[#00df9a] hover:bg-black'>Notify Me</button>
            <p>We care about the protection of your data. Read our <span className='text-[#00df9a] underline hover:no-underline cursor-pointer'>Privacy Policy.</span></p>
        </div>
      </div>
    </div>
  )
}
