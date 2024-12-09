import { Button } from '@/components/ui/button'
import React from 'react'
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <main className='mx-auto'>
        <div className='lg:h-[524px] max-xs:h-[261]'>
            <div className='flex justify-between p-10 h-[82px] mt-20 max-xs:flex-col max-xs:mt-0 max-xs:text-center max-xs:p-20'>
                <div className=''>
                    <h1 className='text-lg font-bold max-xs:mb-5'>Subscribe to our newsletter</h1>
                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                <div className='flex gap-5 mb-5 max-xs:flex-col max-xs:mt-10'>
                    <Input type="email" placeholder="Email" className='border-black'/>
                    <Button className='text-black bg-white border border-black'>Subscribe</Button>
                </div>
                <div className='text-xs'>
                    By subscribing you agree to with our Privacy Policy
                </div>
                </div>
            </div>

            <div className='p-20 max-xs:mt-24 max-xs:p-10'>
                <div className='grid grid-cols-4 gap-10 max-xs:grid-cols-1 max-xs:gap-3 max-xs:text-center'>
                    <div className='max-xs:ml-20 max-xs:mt-20 max-xs:mb-5'>
                    <Image
                    src="/images/Ddsgnr Library.svg"
                    alt="image"
                    width={130.6}
                    height={41} className='max-xs:h-[30px]'/>
                    </div>
                    <div>
                        <div className='text-base font-bold mb-10'>Courses</div>
                        <div className='text-sm flex flex-col gap-5'>
                        <h1>Business</h1>
                        <h1>Development</h1>
                        <h1>Technology</h1>
                        <h1>Design</h1>
                        <h1>Programming</h1>
                        </div>
                    </div>
                    <div>
                    <div className='text-base font-bold mb-10'>Resources</div>
                        <div className='text-sm flex flex-col gap-5'>
                        <h1>Career</h1>
                        <h1>Resume</h1>
                        <h1>Learning</h1>
                        <h1>Interview Preparation</h1>
                        <h1>Jobs</h1>
                        </div>
                    </div>
                    <div>
                    <div className='text-base font-bold mb-10'>About Us</div>
                        <div className='text-sm flex flex-col gap-5'>
                        <h1>Contact</h1>
                        <h1>Help/Support</h1>
                        <h1>FAQ</h1>
                        <h1>Terms and Conditions</h1>
                        <h1>Partners</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='border-t border-t-black h-[57px] flex justify-between max-xs:flex-col max-xs:items-center max-xs:gap-5'>
                <div>
                    <p>2023 Ddsgnr. All right reserved.</p>
                </div>
                <div>
                <ul className='flex gap-3'>
                        <li className='underline'>Privacy Policy</li>
                        <li className='underline'>Terms of Service</li>
                        <li className='underline'>Cookies Settings</li>
                    </ul>
                </div>
                <div className='flex gap-3'>
                <FaFacebookF size="20"/>
                <GrInstagram size="20" />
                <FaTwitter size="20" />
                <FaLinkedin size="20" />
                </div>
            </div>
        </div>
    </main>
  )
}

export default Footer

