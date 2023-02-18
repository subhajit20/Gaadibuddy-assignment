import React from 'react'

function ServiceCard({cardimg,cardtext}) {
  return (<div className='shadow-md  py-10 sm:py-20 md:py-24 lg:py-24 xl:py-32 flex justify-center items-center border-gray-300 border-2 rounded-md'>
    <div className="flex-col justify-center">
        <img src={cardimg} alt="" className='min-w-0 w-20 object-center'/>
        <p className='max-w-screen-sm text-sm lg:text-3xl'>{cardtext}</p>
    </div>
  </div>
  )
}

export default ServiceCard