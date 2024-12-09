import React from 'react'
import { GoStarFill } from "react-icons/go";
import Image from 'next/image';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";
import { RxDot } from "react-icons/rx";


const Customer = () => {
  return (
    <div className='p-20 bg-[#F7F7F7] mx-auto'>
        <div className='flex flex-col gap-10'>
            <h1 className='text-5xl font-bold max-xs:hidden'>Customer testimonials</h1>
            <h1 className='max-xs:text-3xl max-xs:'>What Our Student Say</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className='grid grid-cols-3 gap-10 mt-20 max-xs:grid-cols-1'>
            <div className='border border-black p-5'>
                <div className='flex mb-5'>
                    <GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill />
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</div>
                <div className='flex gap-5 mt-5'>
                    <div>
                        <Image
                        src="/images/team3.svg"
                        alt="image"
                        height={56}
                        width={56}  className='rounded-full'/>
                    </div>
                    <div>
                        <h1 className='font-bold text-base'>James Nduku</h1>
                        <p>Marketing Coordinator</p>
                    </div>
                </div>
            </div>

            <div className='border border-black p-5 max-xs:hidden'>
                <div className='flex mb-5'>
                    <GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill />
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</div>
                <div className='flex gap-5 mt-5'>
                    <div>
                        <Image
                        src="/images/team1.svg"
                        alt="image"
                        height={56}
                        width={56}  className='rounded-full'/>
                    </div>
                    <div>
                        <h1 className='font-bold text-base'>Erick Kipkemboi</h1>
                        <p>Scrum Master</p>
                    </div>
                </div>
            </div>

            <div className='border border-black p-5 max-xs:hidden'>
                <div className='flex mb-5'>
                    <GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill />
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</div>
                <div className='flex mt-5 gap-5'>
                    <div>
                        <Image
                        src="/images/team2.svg"
                        alt="image"
                        height={56}
                        width={56}  className='rounded-full'/>
                    </div>
                    <div>
                        <h1>Stephen Kerubo</h1>
                        <p>UI/UX Designer</p>
                    </div>
                </div>
            </div>
           
        </div>
        <div className='flex justify-between mt-10'>
        <div className='flex'><RxDotFilled size={12} /><RxDot size={12} /><RxDot size={12} /><RxDot size={12} /><RxDot size={12} /><RxDot size={12} /></div>
        <div className='flex'>
            <IoArrowForwardCircleOutline size={50} />
            <IoArrowBackCircleOutline size={50} />
        </div>
        </div>
    </div>
  )
}

export default Customer