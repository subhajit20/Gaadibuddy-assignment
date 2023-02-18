import React from 'react'

function index() {
  return (
    <footer className="px-0 divide-y dark:bg-gray-800 dark:text-gray-100 mb-9 mt-3 bg-gradient-to-r from-gray-900 via-gray-900 to-teal-800 py-4">
		
		{/* <div className='border-t-4 border-t-[#00745B]'></div> */}

		<div className="grid grid-cols-1 lg:grid-cols-5 gap-2 justify-items-center p-0 lg:p-2">
			<div className="grid grid-cols-1 gap-y-5 justify-items-center pl-4">
				<div className='grid grid-cols-1 place-content-center'>
					<img src="./images/website_logo/logo asset 4.svg" className='object-scale-down object-center' alt="" />
				</div>
				<div className='text-white place-self-center lg:place-self-start '>
					<p className='min-w-xs text-base font-semibold text-[0.8rem] place-self-center text-center lg:text-left'>BLOCK-3 7th Block <br/> Karamangala, Bangaluru! <br/> Karnataka-606000</p>
                </div>
				<div className='place-self-center lg:place-self-start grid grid-cols-4'>
                    <div className='min-w-0 w-8 h-8 bg-white rounded-full mx-2'></div>
                    <div className='min-w-0 w-8 h-8 bg-white rounded-full mx-2'></div>
                    <div className='min-w-0 w-8 h-8 bg-white rounded-full mx-2'></div>
                    <div className='min-w-0 w-8 h-8 bg-white rounded-full mx-2'></div>
                </div>
			</div>
			<div className="grid grid-cols-1 gap-y-0 justify-items-center lg:justify-items-start mt-3 text-white">
				<div>
					<p className='font-bold'>Home</p>
				</div>
				<div className='mt-2 lg:mt-0'>
					<a href='#AboutUs'>AboutUs</a>
				</div>
				<div className='mt-2 lg:mt-0'>
					<a href=''>ContactUs</a>
				</div>
				<div className='mt-2 lg:mt-0 hidden lg:block'>
					<a href=''>Privacy Policy</a>
				</div>
				<div className='mt-2 lg:mt-0 hidden lg:block'>
					<a href=''>Terms & Conditions</a>
				</div>
			</div>
			<div className="grid grid-cols-1 gap-y-0 justify-items-center lg:justify-items-start mt-3 text-white">
				<div>
					<p className='font-bold'>Policy</p>
				</div>
				<div className='mt-2 lg:mt-0'>
					<a href='#AboutUs'>FAQ'S</a>
				</div>
				<div className='mt-2 lg:mt-0'>
					<a href=''>Terms and Conditions</a>
				</div>
				<div className='mt-2 lg:mt-0 hidden lg:block'>
					<a href=''>Disclaimer</a>
				</div>
			</div>
			<div className="grid grid-cols-1 gap-y-0 justify-items-center lg:justify-items-start mt-3 text-white">
				<div>
					<p className='font-bold'>ContactUs</p>
				</div>
				<div className='mb-3 mt-2 lg:mt-0 lg:mb-0'>
					<span><i className="fa-solid fa-phone-volume text-[#00745B]"></i>  (+91)XXXXXX4844</span>
				</div>
				<div>
					<a href="admin@foodifyycom"><i className="fa-regular fa-envelope text-[#00745B]"></i> admin@foodifyycom</a>
				</div>
			</div>
			<div className="grid grid-cols-1 gap-y-0 justify-items-center mt-3">
				<div>
					<p className='font-bold lg:text-2xl'>Whatsapp Feature</p>
				</div>
				<div className='grid grid-cols-2 gap-7 justify-items-center mb-3 mt-2 lg:mt-0 lg:mb-0'>
					<a href="https://linktr.ee/foodifyy" target="_blank">
						<img src="./Images/SocialMediaLogo/icons8-linktree.svg" alt="logo1" className='w-6 sm:w-10 md:w-10 lg:w-10 rounded-full cursor-pointer'/>
					</a>
					<a target="_blank" href="https://www.linkedin.com/company/foodifyy/" className='py-0'><i className="fa-brands fa-linkedin-in text-2xl py-1"></i></a>
				</div>

				<div className='grid grid-cols-2 gap-0 justify-items-center lg:hidden'>
					<a href=""><p>Privacy Policy</p></a>
					<a href=""><p>Terms & Conditions</p></a>
				</div>
			</div>
		</div>
	</footer>
  )
}

export default index