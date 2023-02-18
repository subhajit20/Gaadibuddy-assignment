import React from 'react'

function Component1() {
  return (
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-2 place-content-center'>
            <div className='place-self-center lg:place-self-end'>
                <img src="./images/message_images/Rectangle 11.svg" alt="" className='min-w-xs object-scale-down  object-center ' />
            </div>
            <div className='place-self-center grid grid-cols-1 lg:justify-self-start p-2'>
                <h1 className='font-semibold text-2xl'>Car Care</h1>
                <div className='max-w-screen-sm text-xl lg:text-3xl text-left leading-tight font-medium tracking-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo magni, temporibus expedita et ab quia illum ullam at consequuntur deserunt pariatur reprehenderit odit totam neque accusamus ipsam dignissimos vero! Corrupti!</div>
            </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 place-content-center'>
            <div className='place-self-center grid grid-cols-1 lg:justify-self-end p-2'>
                <h1 className='font-semibold text-2xl'>Car Care</h1>
                <div className='max-w-screen-sm text-xl lg:text-3xl text-left leading-tight font-medium tracking-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo magni, temporibus expedita et ab quia illum ullam at consequuntur deserunt pariatur reprehenderit odit totam neque accusamus ipsam dignissimos vero! Corrupti!</div>
            </div>
            <div className='place-self-center lg:place-self-start'>
                <img src="./images/message_images/Rectangle 12.svg" alt="" className='min-w-xs object-scale-down  object-center ' />
            </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 place-content-center'>
            <div className='place-self-center lg:place-self-end'>
                <img src="./images/message_images/Rectangle 13.svg" alt="" className='min-w-xs object-scale-down  object-center ' />
            </div>
            <div className='place-self-center grid grid-cols-1 lg:justify-self-start p-2'>
                <h1 className='font-semibold text-2xl'>Car Care</h1>
                <div className='max-w-screen-sm text-xl lg:text-3xl text-left leading-tight font-medium tracking-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo magni, temporibus expedita et ab quia illum ullam at consequuntur deserunt pariatur reprehenderit odit totam neque accusamus ipsam dignissimos vero! Corrupti!</div>
            </div>
        </div>
    </div>
  )
}

export default Component1