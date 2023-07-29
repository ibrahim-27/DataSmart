import React from 'react'
import SubscriptionCard from './SubscriptionCard'
import single from '../assets/single.png';
import partnership from '../assets/partnership.png';
import group from '../assets/group.png'; 

export default function Subscriptions() {
  return (
    <div className='bg-white px-4 md:px-6 lg:px-12 py-8 grid md:grid-cols-3 gap-6'>
        <div>
            <SubscriptionCard 
            img={single} 
            heading='Single User'
            price='149'
            storage='500 GB'
            users='1'
            send='2 GB'
            />
        </div>
        <div>
            <SubscriptionCard 
            img={partnership} 
            heading='Partnership'
            price='199'
            storage='1 TB'
            users='3'
            send='10 GB'
            />
        </div>
        <div>
            <SubscriptionCard 
            img={group} 
            heading='Group Account'
            price='299'
            storage='5 TB'
            users='10'
            send='20 GB'
            />
        </div>
    </div>
  )
}
