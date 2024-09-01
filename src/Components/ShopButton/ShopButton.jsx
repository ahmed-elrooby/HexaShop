import { useRouter } from 'next/navigation'
import React from 'react'

const ShopButton = () => {
    const route = useRouter()
  return <>
<button onClick={()=> route.push("/Blogs")} className='px-4 py-2 font-bold text-white rounded-lg bg-[--primary] w-fit transition-all hover:bg-[#00bfa69c]'>SHOPE NOW!</button>
</>
}

export default ShopButton