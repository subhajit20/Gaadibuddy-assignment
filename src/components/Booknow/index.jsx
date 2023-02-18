import React from 'react'

function index() {
  return (
    <div className='relative'>
        <div className='relative'>
            <img src="./images/booknow_images/AdobeStock_198465715.svg" alt="" className='w-full h-full object-fill' />
        </div>
        <div className='absolute top-0 bottom-0 left-0 right-0 grid grid-cols-1 items-center'>
            <div className='px-3 lg:px-6'>
                <h3 className='text-base lg:text-5xl text-white '>Washing</h3>
                <p className='object-scale-down max-w-sm lg:max-w-5xl text-white text-xs lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam dolore maxime ut possimus, </p>
                <p className='object-scale-down max-w-sm lg:max-w-5xl text-white text-xs lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                <button className='bg-orange-600 text-white text-sm lg:text-4xl px-3 lg:px-16 rounded-3xl mt-3'>Book Now</button>
            </div>
        </div>

    </div>
  )
}

export default index