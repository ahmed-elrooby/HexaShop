"use client"
import Image from 'next/image'
import React from 'react'
import ShopButton from '../ShopButton/ShopButton'

const Home = () => {
  return <>
<div className='w-[90%] m-auto mt-[50px]'>
<div className="grid items-center justify-center grid-cols-1 gap-5 md:grid-cols-2">
<div>
        <h1 className='text-[60px]  font-bold bg-gradient-to-b text-transparent from-[#53c28b] bg-clip-text to-[#bbb]'>Your one-stop e-commerce destination!</h1>
        <p className='my-4 leading-[2] text-[20px] '>Discover a world of endless shopping possibilities at our online, Browse, Choose,and order your favourite products from the comfort of your home </p>
<ShopButton />
    </div>
    <div>
        <Image src={require("../../images/hero.svg")} alt='hero' className='max-w-full' />
    </div>
</div>
</div>
  </>
}

export default Home