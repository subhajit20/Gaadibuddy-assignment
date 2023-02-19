import React from 'react'

function CustomarCard() {
  return (
    <div className='flex overflow-x-auto flex-no-wrap gap-x-10 snap-x snap-mandetory justify-center'>
      <div className="flex-none grid grid-cols-1  p-5 bg-white shadow-md rounded-md w-[350px] h-full snap-always snap-center">
        <div className='grid grid-cols-2 place-content-center '>
          <div className='justify-self-start'>
            <img src="https://i.pravatar.cc/100?img=1" alt="" className='rounded-full'/>
          </div>
          <div className='justify-self-start'>
            <h4 className='text-xl font-medium'>John Doe</h4>
            <h4><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h4>
          </div>
        </div>

        <div className='min-w-sm pt-3 text-xl font-normal' style={{width:"23rem"}}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil exercitationem, consequatur commodi ut voluptas, rem fugiat molestiae est dignissimos veritatis temporibus hic quisquam earum! Soluta sit modi dignissimos consequuntur iste.</p>
        </div>
      </div>
      <div className="flex-none grid grid-cols-1  p-5 bg-white shadow-md rounded-md w-[350px] h-full snap-always snap-center">
        <div className='grid grid-cols-2 place-content-center '>
          <div className='justify-self-start'>
            <img src="https://i.pravatar.cc/100?img=1" alt="" className='rounded-full'/>
          </div>
          <div className='justify-self-start'>
            <h4 className='text-xl font-medium'>John Doe</h4>
            <h4><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h4>
          </div>
        </div>

        <div className='min-w-sm pt-3 text-xl font-normal' style={{width:"23rem"}}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil exercitationem, consequatur commodi ut voluptas, rem fugiat molestiae est dignissimos veritatis temporibus hic quisquam earum! Soluta sit modi dignissimos consequuntur iste.</p>
        </div>
      </div>
      <div className="flex-none grid grid-cols-1 p-5 bg-white shadow-md rounded-md w-[350px] h-full snap-always snap-center">
        <div className='grid grid-cols-2 place-content-center '>
          <div className='justify-self-start'>
            <img src="https://i.pravatar.cc/100?img=1" alt="" className='rounded-full'/>
          </div>
          <div className='justify-self-start'>
            <h4 className='text-xl font-medium'>John Doe</h4>
            <h4><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h4>
          </div>
        </div>

        <div className=' pt-3 text-xl font-normal' style={{width:"23rem"}}>
          <p className='max-w-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil exercitationem, consequatur commodi ut voluptas, rem fugiat molestiae est dignissimos veritatis temporibus hic quisquam earum! Soluta sit modi dignissimos consequuntur iste.</p>
        </div>
      </div>
      
        {/* <div className="w-1/5 container mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 shadow-md">
              <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=1" alt=""/>
                  </div>
                  <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                  </div>
              </div>
              <div className="w-full">
                  <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
              </div>
        </div> */}
    </div>
  )
}

export default CustomarCard