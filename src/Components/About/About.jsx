"use client"
import { ChevronsLeft, ChevronsRight, CircleCheckBig, DiamondPercent, ShoppingCart, Trophy } from 'lucide-react'
import { FaStar } from 'react-icons/fa';

import React from 'react'
import ShopButton from '../ShopButton/ShopButton'
import SliderImage from '../SliderImage/SliderImage'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
const About = () => {
  return <>
  <div className='w-[90%]  m-auto mb-[50px] pt-[50px]'>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
    <div className='flex items-start gap-2 border border-[--primary] p-4 rounded-lg'>
    <div><ShoppingCart color='#00BFA6' size={32} />
      </div>
  <div className='flex flex-col gap-4 '>
    <h1 className="uppercase text-[20px] text-[--primary]">free delivery

</h1>
    <p>Consectetur adipi elit lorem ipsum dolor sit amet.

</p>
  </div>
</div>
<div className='flex items-start gap-2 border border-[--primary] p-4 rounded-lg'>
<div>
  <Trophy color='#00BFA6' size={32} />

  </div>
  <div className='flex flex-col gap-4 '>
    <h1 className="uppercase text-[20px] text-[--primary]">quality guarantee



</h1>
    <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.

</p>
  </div>
</div>
<div className='flex items-start gap-2 border border-[--primary] p-4 rounded-lg'>
<div><DiamondPercent color='#00BFA6' size={32} />
  </div>
  <div className='flex flex-col gap-4 '>
    <h1 className="uppercase text-[20px] text-[--primary]">daily offers



</h1>
    <p>Amet consectetur adipi elit loreme ipsum dolor sit.

</p>
  </div>
</div>
<div className='flex items-start gap-2 border border-[--primary] p-4 rounded-lg'>
<div><CircleCheckBig  color='#00BFA6' size={32} />
  </div>
  <div className='flex flex-col gap-4 '>
    <h1 className="uppercase text-[20px] text-[--primary]">100% secure payment



</h1>
    <p>Rem Lopsum dolor sit amet, consectetur adipi elit.

</p>
  </div>
</div>
    </div>
  </div>

  <div className="w-[90%] py-[50px] m-auto">
        <Swiper
        className='relative myswiper'
          spaceBetween={4}
          slidesPerView={4}
          speed={1000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
            <div onClick={()=> document.querySelector(".myswiper").swiper.slideNext()}  className='absolute cursor-pointer translate-y-[-50%] top-[126px] left-0 border bg-white z-[100]  border-[--primary] rounded-lg p-2'>
            <ChevronsLeft size={36} color='#00BFA6' />
         </div>
         <SwiperSlide className="rounded-lg group ">
              <div className="flex flex-col gap-3 p-3 border border-[--primary] rounded-lg transition-all hover:bg-[--primary] hover:text-white ">
                <p> This tech store is my go‐to for all things tech! Wheather it's a new smartphone, accessories, or even troubleshooting advice, they've always got me covered. The staff is friendly, and their expertise is unmatched. Trust me; you won't regret shopping here!
                </p>
                <div className='flex gap-1'>
                <FaStar className="text-[--primary] group-hover:text-yellow-500 text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />

                </div>
                <h1 className="text-[25px] text-[--primary] group-hover:text-white font-bold capitalize">thomas john

                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-lg group ">
              <div className="flex flex-col gap-3 p-3 border border-[--primary] rounded-lg transition-all hover:bg-[--primary] hover:text-white ">
                <p> I stumbled upon this tech store while searching for a new laptop, and I couldn't be happier with my expeience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended! </p>
                <div className='flex gap-1'>
                <FaStar className="text-[--primary] group-hover:text-yellow-500 text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />

                </div>
                <h1 className="text-[25px] text-[--primary] group-hover:text-white font-bold capitalize">emma chamberlin
                </h1>
              </div>
            </SwiperSlide>
  








            <SwiperSlide className="rounded-lg group ">
              <div className="flex flex-col gap-3 p-3 border border-[--primary] rounded-lg transition-all hover:bg-[--primary] hover:text-white ">
                <p>  I recently purchased a smartwatch from this tech store, and I'm absolutely thrilled with my purchase! Not only did they have an extensive selection to choose from, but their team helped me find the perfect fit for my lifestyle. 
                </p>
                <div className='flex gap-1'>
                <FaStar className="text-[--primary] group-hover:text-yellow-500 text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />

                </div>
                <h1 className="text-[25px] text-[--primary] group-hover:text-white font-bold capitalize">kevin bryan

                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-lg group ">
              <div className="flex flex-col gap-3 p-3 border border-[--primary] rounded-lg transition-all hover:bg-[--primary] hover:text-white ">
                <p> I stumbled upon this tech store while searching for a new laptop, and I couldn't be happier with my expeience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended! </p>
                <div className='flex gap-1'>
                <FaStar className="text-[--primary] group-hover:text-yellow-500 text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />

                </div>
                <h1 className="text-[25px] text-[--primary] group-hover:text-white font-bold capitalize">emma chamberlin
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-lg group ">
              <div className="flex flex-col gap-3 p-3 border border-[--primary] rounded-lg transition-all hover:bg-[--primary] hover:text-white ">
                <p> This tech store is my go‐to for all things tech! Wheather it's a new smartphone, accessories, or even troubleshooting advice, they've always got me covered. The staff is friendly, and their expertise is unmatched. Trust me; you won't regret shopping here!
                </p>
                <div className='flex gap-1'>
                <FaStar className="text-[--primary] group-hover:text-yellow-500 text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />

                </div>
                <h1 className="text-[25px] text-[--primary] group-hover:text-white font-bold capitalize">thomas john

                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-lg group ">
              <div className="flex flex-col gap-3 p-3 border border-[--primary] rounded-lg transition-all hover:bg-[--primary] hover:text-white ">
                <p> I stumbled upon this tech store while searching for a new laptop, and I couldn't be happier with my expeience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended! </p>
                <div className='flex gap-1'>
                <FaStar className="text-[--primary] group-hover:text-yellow-500 text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />

                </div>
                <h1 className="text-[25px] text-[--primary] group-hover:text-white font-bold capitalize">emma chamberlin
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-lg group ">
              <div className="flex flex-col gap-3 p-3 border border-[--primary] rounded-lg transition-all hover:bg-[--primary] hover:text-white ">
                <p> I stumbled upon this tech store while searching for a new laptop, and I couldn't be happier with my expeience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended! </p>
                <div className='flex gap-1'>
                <FaStar className="text-[--primary] group-hover:text-yellow-500 text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />
                <FaStar className="text-[--primary] group-hover:text-yellow-500  text-[25px]" />

                </div>
                <h1 className="text-[25px] text-[--primary] group-hover:text-white font-bold capitalize">emma chamberlin
                </h1>
              </div>
            </SwiperSlide>
            <div onClick={()=> document.querySelector(".myswiper").swiper.slidePrev()}  className='absolute cursor-pointer translate-y-[-50%] top-[126px] right-0 border bg-white z-[100]  border-[--primary] rounded-lg p-2'>
            <ChevronsRight size={36} color='#00BFA6' />
            </div>
        </Swiper>
      </div>

  <div className='w-[90%] mb-[50px] pt-[40px] m-auto'>
    <div className='grid items-start grid-cols-1 gap-[20px] md:grid-cols-2'>
    <div>
    <video src="/inroduction.mp4" className="max-w-full h-auto md:h-[358px] rounded-lg" width="100%" controls></video>
    </div>
          <div className='flex flex-col items-start gap-5'>
            <h1 className="text-[25px] text-[--primary] font-bold capitalize">best digital store basicstore
            </h1>
            <p className="leading-[2] text-[17px] capitalize">Risus augue curabitur diam senectus congue velit et. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing pharetra eros at. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Quam libero etiam et in ac at quis. Risus augue curabitur diam senectus congue velit et.

</p>
<ShopButton />
          </div>
    </div>
  </div>
  <SliderImage />
  </>
}

export default About