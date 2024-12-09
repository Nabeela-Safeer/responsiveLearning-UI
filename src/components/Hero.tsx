import React from 'react'
import Image from 'next/image';


const Hero = () => {
  return (
    <main className='mx-auto'>
      <div className='grid xl:grid-cols-2 gap-36 max-xs:grid-cols-1 max-xs:gap-10'>
        
        <div className='flex flex-col place-content-center text-left ml-32 gap-5 max-xs:p-10 max-xs:gap-5 max-xs:ml-0'>
          <div>
          <h1 className='text-6xl max-xs:text-4xl mb-5 font-bold'>Learn new skills online with ease</h1>
          <p className='text-base'>
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>          
          </div>

          <div className='flex gap-4'>
          <button className='border rounded-md bg-black text-white w-[179px] h-[64px]'>start learning now</button>
          <button className='border rounded-md w-[179px] h-[64px]'>Explore courses</button>
          </div>

        </div>

        {/* right side */}
        <div>
            <Image
            src="/images/Image.png"
            alt="image"
            height={800}
            width={640} />
        </div>
      </div>

      {/* bottom logo */}
      <div className='bg-[#F7F7F7] grid grid-cols-3 gap-20 h-[228px] place-content-center max-xs:grid-cols-1'>
        <div className='text-2xl font-bold'>
        <p className='max-xs:hidden'>Trusted by 2000+ companies worldwide.</p>
        <p className='xl:hidden max-xs:justify-center max-xs:text-lg'>Trusted by the worlds best companies [social proof to build credibility]</p>

        </div>
        <div className='flex gap-3 col-span-2'>
            <Image
            src="/images/Airbnb Logo.svg"
            alt="image"
            height={38.52}
            width={123.8} />
            
            <Image
            src="/images/Logo2.svg"
            alt="image"
            height={38.52}
            width={123.8} />
            
            <Image
            src="/images/Logo3.svg"
            alt="image"
            height={38.52}
            width={123.8} />
            
            <Image
            src="/images/Logo4.png"
            alt="image"
            height={38.52}
            width={123.8} className='max-xs:hidden'/>
            
            <Image
            src="/images/Logo5.svg"
            alt="image"
            height={38.52}
            width={123.8} className='max-xs:hidden'/>
            
            <Image
            src="/images/Logo6.svg"
            alt="image"
            height={38.52}
            width={123.8} className='max-xs:hidden'/>
        </div>
      </div>
    </main>
  )
}

export default Hero