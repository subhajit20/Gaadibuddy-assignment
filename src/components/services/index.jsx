import React from 'react'
import Heading from './Heading'
import Service_Slider from './Service_Slider'
import ViewAllButton from './ViewAllButton'

function index() {
  return (
    <div className='mb-5'>
        <Heading/>
        <Service_Slider/>
        <ViewAllButton/>
    </div>
  )
}

export default index