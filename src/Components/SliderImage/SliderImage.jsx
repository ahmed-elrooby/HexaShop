"use client"
import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
const SliderImage = () => {
    const [productImage, setProductImage] = useState(null)

const fetchData =async()=>{
  try{
    const {products} = await fetch("https://dummyjson.com/products?populate=*").then((res)=>res.json())
    setProductImage(products)
  }
catch(err){
console.error(err);

}
}
useEffect(() => {

fetchData()
}, [])
  return <>
  <div className="w-[90%] py-[50px] m-auto">
        <Swiper
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
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {productImage?.map((product) => (
            <SwiperSlide key={product.id} className="rounded-lg ">
              <Image
                src={product.thumbnail}
                width={400}
                height={300}
                className="border-2 border-[--primary]  max-w-full"
                alt={product.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  </>
}

export default SliderImage
