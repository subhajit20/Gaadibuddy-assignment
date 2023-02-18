import React from 'react'

function SmallNavbar() {
  return ( <div class="grid-cols-3 gap-4 py-4 place-items-center hidden sm:hidden md:grid lg:grid bg-gradient-to-r from-gray-900 via-gray-900 to-green-800 relative" id="Navbar">
  <div className='place-self-start px-4'>
    <img src="./images/website_logo/logo asset 4.svg" alt="" className='min-w-sm w-32' />
  </div>
  <div className='grid grid-cols-4 gap-x-20 text-white font-normal text-lg justify-self-start'>
    <div><a href="#">Home</a></div>
    <div><a href="#">Service</a></div>
    <div><a href="#">Contact</a></div>
    <div><a href="#">AboutUs</a></div>
  </div>
  <div className='grid grid-cols-4 gap-x-4 text-white font-semibold justify-self-end'>
    <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
    <a href="#"><i class="fa-sharp fa-solid fa-bell"></i></a>
    <a href="#"><i class="fa-solid fa-user"></i></a>
  </div>
</div>
  )
}

export default SmallNavbar