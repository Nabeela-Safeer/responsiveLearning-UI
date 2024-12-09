import React from 'react'
import Image from 'next/image'
import { GoStar } from "react-icons/go";
import { Button } from '@/components/ui/button';


const Courses = () => {
  return (
    <div className='mx-auto'>
        <div className='flex flex-col items-center text-center p-28 max-xs:p-10'>
            <h1 className='text-5xl font-bold mb-5 max-xs:text-3xl'>Courses</h1>
            <p className='text-lg'>Your Ultimate Guide to learning</p>

            <ul className='flex gap-5 mt-20 text-lg max-xs:mt-10'>
                <li className='hover:underline  cursor-pointer'>Popular</li>
                <li className='hover:underline cursor-pointer'>Recommended</li>
                <li className='hover:underline cursor-pointer'>Best  Price</li>
            </ul>
        
        </div>
        <div className='grid grid-cols-3 gap-24 max-xs:grid-cols-1 max-xs:gap-10'>
            <div className='bg-[#F7F7F7]'>
                <div>
                <Image
                src="/images/Image.svg"
                alt="image"
                height={300}
                width={416} />
                </div>
                <div className='flex justify-between font-bold text-sm p-2'>
                    <h1>Design</h1>
                    <ul className='flex gap-1'>
                        <li><GoStar size={20}/></li>
                        <li>5.0</li>
                    </ul>
                </div>
                <div className='p-2'>
                    <h1 className='text-2xl font-bold mb-2'>UX/UI Design 201</h1>
                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className='flex gap-5 p-2'>
                    <Button className='bg-white text-black'>Enroll Now</Button>
                    <h1 className='font-bold text-base'>$400</h1>
                </div>
            </div>

            <div className='bg-[#F7F7F7]'>
                <div>
                <Image
                src="/images/Image1.svg"
                alt="image"
                height={300}
                width={416} />
                </div>
                <div className='flex justify-between font-bold text-sm p-2'>
                    <h1>Programming</h1>
                    <ul className='flex gap-1'>
                        <li><GoStar size={20}/></li>
                        <li>5.0</li>
                    </ul>
                </div>
                <div className='p-2'>
                    <h1 className='text-2xl font-bold mb-2'>Introduction to Python</h1>
                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className='flex gap-5 p-2'>
                    <Button className='bg-white text-black'>Enroll Now</Button>
                    <h1 className='font-bold text-base'>$400</h1>
                </div>
            </div>

            <div className='bg-[#F7F7F7]'>
                <div>
                <Image
                src="/images/Image2.svg"
                alt="image"
                height={300}
                width={416} />
                </div>
                <div className='flex justify-between font-bold text-sm p-2'>
                    <h1>Business</h1>
                    <ul className='flex gap-1'>
                        <li><GoStar size={20}/></li>
                        <li>5.0</li>
                    </ul>
                </div>
                <div className='p-2'>
                    <h1 className='text-2xl font-bold mb-2'>Data Analysis for Beginners</h1>
                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className='flex gap-5 p-2'>
                    <Button className='bg-white text-black'>Enroll Now</Button>
                    <h1 className='font-bold text-base'>$400</h1>
                </div>
            </div>

            <div className='bg-[#F7F7F7]'>
                <div>
                <Image
                src="/images/Image3.svg"
                alt="image"
                height={300}
                width={416} />
                </div>
                <div className='flex justify-between font-bold text-sm p-2'>
                    <h1>Art</h1>
                    <ul className='flex gap-1'>
                        <li><GoStar size={20}/></li>
                        <li>5.0</li>
                    </ul>
                </div>
                <div className='p-2'>
                    <h1 className='text-2xl font-bold mb-2'>Art Specialization</h1>
                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className='flex gap-5 p-2'>
                    <Button className='bg-white text-black'>Enroll Now</Button>
                    <h1 className='font-bold text-base'>$400</h1>
                </div>
            </div>

            <div className='bg-[#F7F7F7]'>
                <div>
                <Image
                src="/images/Image4.svg"
                alt="image"
                height={300}
                width={416} />
                </div>
                <div className='flex justify-between font-bold text-sm p-2'>
                    <h1>Law</h1>
                    <ul className='flex gap-1'>
                        <li><GoStar size={20}/></li>
                        <li>5.0</li>
                    </ul>
                </div>
                <div className='p-2'>
                    <h1 className='text-2xl font-bold mb-2'>Rule of Law</h1>
                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className='flex gap-5 p-2'>
                    <Button className='bg-white text-black'>Enroll Now</Button>
                    <h1 className='font-bold text-base'>$400</h1>
                </div>
            </div>

            <div className='bg-[#F7F7F7]'>
                <div>
                <Image
                src="/images/Image5.svg"
                alt="image"
                height={300}
                width={416} />
                </div>
                <div className='flex justify-between font-bold text-sm p-2'>
                    <h1>Tech</h1>
                    <ul className='flex gap-1'>
                        <li><GoStar size={20}/></li>
                        <li>5.0</li>
                    </ul>
                </div>
                <div className='p-2'>
                    <h1 className='text-2xl font-bold mb-2'>Introduction to webflow</h1>
                    <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className='flex gap-5 p-2'>
                    <Button className='bg-white text-black'>Enroll Now</Button>
                    <h1 className='font-bold text-base'>$400</h1>
                </div>
            </div> 
        </div>

        <div className='flex justify-center items-center p-10'>
            <Button className='text-black bg-white border border-black'>View All Courses</Button>
        </div>
    </div>
  )
}

export default Courses