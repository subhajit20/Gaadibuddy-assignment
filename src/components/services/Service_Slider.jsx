import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import ServiceCard from './ServiceCard';

const Service_List = [
  {
    id:2,
    cardimg:"./images/service_images/washing 1 (1).svg",
    cardtext:"Washing"
  },
  {
    id:1,
    cardimg:"./images/service_images/waxing 1.svg",
    cardtext:"Washing"
  },
  {
    id:3,
    cardimg:"./images/service_images/sanitization 1.svg",
    cardtext:"Washing"
  }
]

function Service_Slider() {
  return (
    <div className='px-5'>
      <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={3}
    navigation
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >

        {
          Service_List.map((list)=>{
            return (<SwiperSlide ><ServiceCard cardimg={list.cardimg} cardtext={list.cardtext} /></SwiperSlide>)
          })
        }
    </Swiper>
    </div>
  )
}

export default Service_Slider