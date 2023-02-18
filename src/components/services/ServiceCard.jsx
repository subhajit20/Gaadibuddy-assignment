import React from 'react'

function ServiceCard({cardimg,cardtext}) {
  return (<div className='shadow-md  py-10 sm:py-20 md:py-24 lg:py-24 xl:py-32 flex justify-center items-center border-gray-300 border-2 rounded-md'>
    <div className="flex-col">
        <img src={cardimg} alt="" className='min-w-full w-1/2 object-center'/>
        <p className='max-w-screen-sm text-xl lg:text-3xl'>{cardtext}</p>
    </div>
  </div>
  )
}

export default ServiceCard