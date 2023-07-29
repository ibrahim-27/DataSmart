import React from 'react'

export default function SubscriptionCard(props) {
  return (
    <div className='py-4 border border-gray-200 mx-6 rounded-md shadow-2xl flex flex-col gap-4 items-center ease-in-out duration-300 hover:-translate-y-4'>
      <img className='w-16' src={props.img} alt='icon'></img>
      <h1 className='text-2xl font-bold'>{props.heading}</h1>
      <h1 className='text-3xl font-bold'>${props.price}</h1>
      <ul className='flex flex-col text-center'>
        <li className='border-y py-1'>{props.storage} Storage</li>
        <li className='border-b py-1'>{props.users} User Allowed</li>
        <li className='border-b py-1'>Send up to {props.send}</li>
      </ul>
      <button className='bg-[#00df9a] py-1 px-2 w-[100px] hover:border hover:border-[#00fd9a] hover:text-[#00df9a] hover:bg-black'>Start Trial</button>
    </div>
  )
}
