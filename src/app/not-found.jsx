import Link from 'next/link'
import React from 'react'

const Notfound = () => {
  return <>
  <div className="w-[90%] m-auto h-[480px] mt-[70px]">
  <div className="flex flex-col  items-center gap-[61px]">
        <h1 className='font-bold text-[30px]'>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Link href="/" className='py-4 font-bold text-white bg-[--primary] rounded-lg px-11'>
        Back to home page
        </Link>
    </div>
  </div>
  </>
}

export default Notfound