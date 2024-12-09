import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';






const Actions = () => {
  return (
    <main className='mx-auto'>
        <section className='max-xs:hidden'>
        <div className=' bg-[#F7F7F7] flex justify-between h-[54px] place-items-center'>
        <div className='flex gap-5 ml-10'>
        Phone Number: 956 742 455 678 <span className="border border-[#676767]"></span> Email:info@ddsgnr.com
        </div>

        <div className='flex gap-5 mr-24'>
            <FaFacebookF size="20"/>
            <GrInstagram size="20" />
            <FaTwitter size="20" />
            <FaLinkedin size="20" />
        </div>
        </div>
        </section>

        <section>
            <div className='bg-[#F7F7F7] mt-5 flex justify-between place-items-center p-3'>
                <div className='ml-12'>
                    <Image
                    src="/images/Ddsgnr Library.svg"
                    alt="image"
                    width={130.6}
                    height={41} />
                </div>
               
                <div className='flex gap-5 bg-white mr-[90px] items-center h-[44px] max-xs:hidden'>
                    <div>
                        <ul className='flex gap-10 ml-3'>
                        <li><Link href="/"></Link>Home</li>
                        <li><Link href="/"></Link>Course</li>
                        <li><Link href="/"></Link>Services</li>
                        <li><Link href="/"></Link>Achievement</li>
                        <li><Link href="/"></Link>About Us</li>
                        <li><Link href="/"></Link>Testimonial</li>
                        </ul>
                    </div>

                    <div className='flex gap-3'>
                    <button className='border h-11 w-24 rounded-lg'>Login</button>
                    <button className='border h-11 w-24 rounded-lg bg-black text-white'>Sign Up</button>
                    </div>
               </div>
               <div className='lg:hidden inline-flex'>
                <FiMenu/>
                </div>
            </div> 
        </section>
        
    </main>
    
  )
}

export default Actions