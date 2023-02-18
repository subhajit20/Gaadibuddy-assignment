import React from 'react'

function TestimonialCard() {
  return (
    <div className='grid grid-cols-1  lg:grid-cols-3 place-content-center'>
        <div className='grid lg:grid-cols-1 place-content-evenly'>
            <div className='place-self-center transform scale-100 mb-2 mt-2 lg:mt-0'>
                <img src="./images/testimonial_images/Rectangle 16.svg" alt="" className='min-w-0 w-5/6 object-scale-down  object-center shadow-lg mx-2' />
            </div>
            <p className='place-self-center text-2xl lg:text-3xl text-orange-600'>Save Time</p>
            <p className='max-w-sm place-self-center text-center text-sm px-3 lg:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptatum eos id </p>
        </div>
        <div className='grid grid-cols-1 place-content-center transform scale-100 mt-10 lg:mt-0'>
            <div className='place-self-center '>
                <img src="./images/testimonial_images/Rectangle 124.svg" alt="" className='min-w-0 w-5/6 object-scale-down  object-center shadow-lg mx-2' />
            </div>
            <p className='place-self-center text-2xl lg:text-3xl text-orange-600'>Save Money</p>
            <p className='max-w-sm place-self-center text-center text-sm px-3 lg:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptatum eos id </p>

        </div>
        <div className='grid grid-cols-1 place-content-center transform scale-100 mt-10 lg:mt-0'>
            <div className='place-self-center '>
                <img src="./images/testimonial_images/Rectangle 125.svg" alt="" className='min-w-0 w-5/6 object-scale-down  object-center shadow-lg mx-2' />
            </div>
            <p className='place-self-center text-2xl lg:text-3xl text-orange-600'>Save Water</p>
            <p className='max-w-sm place-self-center text-center text-sm px-3 lg:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptatum eos id </p>

        </div>
    </div>
  )
}

export default TestimonialCard