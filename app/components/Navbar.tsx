import Image from 'next/image'
import React, { useState } from 'react'
import Arrow from '../../public/assets/icons/arrow.svg';
import DropDown from '../../public/assets/icons/drop-down-icon.svg';
import { AiOutlineClose  } from "react-icons/ai";
import Link from "next/link";


const navLinks = [
    {name: "About"},
    {name: "News"},
    {name: "Services"},
    {name: "Our Team"},
    {name: "Make Enquiry"},
];

const Navbar = () => {

  const [nav, setNav] = useState(false);
    

    const handleNav = ()=>{
        setNav(!nav)
    }

  return (
    <nav >
       <div className='flex items-center justify-between px-10 z-10  bg-white fixed inset-x-0 top-0 mx-auto  py-5 lg:top-6 lg:mx-10 lg:px-14 lg:py-7'>
        <div className="hidden links lg:flex gap-x-[40px] ">
              {navLinks.map((item,index)=>(
                  <p className='text-[#36485c]  cursor-pointer ' key={index}>{item.name}</p>
              ))}

        </div>
        <div className='cursor-pointer flex items-center gap-x-4 border-r-2 border-2 border-black bg-[#FFFCFA] px-4 py-2'>
          <p className='semi-links'>Contact us</p>
          <Image src={Arrow} alt='Arrow_Icon' />
        </div>

        <div onClick={handleNav} className='lg:hidden'>
          <Image src={DropDown} alt='dropdown'/>
        </div>

      </div>

{/* dropdown menu */}
      <div className={nav ? `md:hidden fixed left-0  top-0  w-full  h-screen bg-black/70 z-50` : ""}>
        <div className={nav ? `fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10  ease-in duration-500` : `fixed left-[-100%] top-0 p-10  ease-in duration-500`}>
            <div>
              <div className="flex justify-between w-full items-center ">
              
              <div className='cursor-pointer flex items-center gap-x-4 border-r-2 border-2 border-black bg-[#FFFCFA] px-4 py-2'>
          <p className='semi-links cursor-pointer'>Contact us</p>
          <Image src={Arrow} alt='Arrow_Icon' />
        </div>
                
                <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4 h2-heading">
                  TenTwenty
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="links cursor-pointer">

                <Link href="">
                  <li onClick={()=>  setNav(false)} className="py-4 text-sm">About</li>
                </Link>
                <Link href="">
                  <li onClick={()=>  setNav(false)} className="py-4 text-sm">News</li>
                </Link>
                <Link href="">
                  <li onClick={()=>  setNav(false)} className="py-4 text-sm">Services</li>
                </Link>
                <Link href="">
                  <li onClick={()=>  setNav(false)} className="py-4 text-sm">Our Team</li>
                </Link>
                <Link href="">
                  <li onClick={()=>  setNav(false)} className="py-4 text-sm">Make Enquiry</li>
                </Link>
              </ul>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
