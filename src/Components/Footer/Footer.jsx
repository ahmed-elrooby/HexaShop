import { Github } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaFacebook,FaTwitter,FaInstagram, FaTelegramPlane} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" h-[30px] mt-[50px] mb-5   mx-auto w-[90%]">
<div className='w-full m-auto block mb-[20px] md:w-[500px] bg-[--primary] h-[2px]'></div>
<div className='flex items-center justify-between py-3'>
<div className='items-center'>
      <p>&copy; {new Date().getFullYear()} Ahmed. All rights reserved.</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link href="https://www.facebook.com/profile.php?id=100012194289790&mibextid=ZbWKwL" >
        <FaFacebook className="cursor-pointer opacity-[0.6] transition-all hover:opacity-[1] " color="#4267B2" size={24} />
        </Link>
        <Link href="">
        <FaInstagram className="cursor-pointer opacity-[0.6] transition-all hover:opacity-[1] " color="#C13584" size={24} />

        </Link>
<Link href="https://x.com/AhmedElRooby2?s=08 ">
<FaTwitter className="cursor-pointer opacity-[0.6] transition-all hover:opacity-[1] " color="#1DA1F2" size={24} />

</Link>
<Link href="https://web.telegram.org/a/">
        <FaTelegramPlane className="cursor-pointer opacity-[0.6] transition-all hover:opacity-[1] " color="#0088CC" size={24} />

</Link>

        <Link href="https://github.com/ahmed-elrooby">
  <Github 
    className="cursor-pointer opacity-[0.6] transition-all hover:opacity-[1]" 
    size={24} 
  />
</Link>

        
      </div>
</div> 
    </footer>
  );
};

export default Footer;
