import React,{useState,useRef} from 'react'

function SmallNavbar() {
  const [bar,setBar] = useState();
  const MYBAR = useRef(null)

  function GetData(){
    if(MYBAR.current.offsetHeight > 200){
      setBar(24)
    }else{
      setBar(28)
    }
  }
  return ( <div className={`min-h-min h-${bar} bg-gradient-to-r from-gray-900 via-gray-900 to-green-800 pb-5 block sm:block md:hidden lg:hidden transition duration-150 ease-out`} ref={MYBAR}>
          <div className="grid grid-cols-2 gap-4 py-4 place-items-center " id="Navbar">
              <div className='place-self-start px-4'>
                <img src="./images/website_logo/logo asset 4.svg" alt="" className='min-w-sm w-32' />
              </div>
              <div className='justify-self-end pr-4'>
                <button onClick={GetData}><i className="fa-solid fa-bars text-white text-2xl"></i></button>
              </div>
          </div>
          <div className='grid grid-cols-1 place-items-center pt-5'>
            <div className='grid grid-cols-1 gap-x-4 text-white font-normal text-lg justify-self-center'>
                <div className='text-center pb-3 font-medium'><a href="#">Home</a></div>
                <div className='text-center pb-3 font-medium'><a href="#">Service</a></div>
                <div className='text-center pb-3 font-medium'><a href="#">Contact</a></div>
                <div className='text-center pb-3 font-medium'><a href="#">AboutUs</a></div>
              </div>
              <div className='grid grid-cols-3 mt-3 gap-x-12 min-w-sm  place-items-between lg:gap-x-10 text-white font-semibold justify-self-center'>
                <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                <a href="#"><i className="fa-sharp fa-solid fa-bell"></i></a>
                <a href="#"><i className="fa-solid fa-user"></i></a>
              </div>
          </div>
  </div>
  )
}

export default SmallNavbar