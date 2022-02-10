import React from 'react';
import Data from '../servicesData';


function Services() {
    console.log(Data);
  return <div className='h-[98px] w-full bg-black flex items-center px-5 justify-evenly'> 


{
   Data.map((items)=>{
       return(
        <div className='text-white flex items-center gap-3 px-1 border-r'> 

        <div className='flex items-center bg-yellow-400 p-3 rounded-full '>
           {items.icon}
        </div>
        <div className='flex flex-col leading-4  text-xs font-semibold'>
            <p > {items.title}</p>
            <p> { items.describtion}</p>
            <a href='#' className='  text-xs hover:underline'>Learn more</a>
        </div>
    </div>
       )    
   })
}















  </div>;
}

export default Services;
