import React from 'react'
import Image from 'next/image'

const ExploreCourses = () => {
  return (
    <div className='mx-auto'>
        <div className='p-20 flex flex-col gap-10 text-center max-xs:p-10'>
            <h1 className='text-5xl font-bold max-xs:text-3xl'>Explore Courses By Category</h1>
            <p>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>

        <div className='grid grid-cols-3 max-xs:grid-cols-1 gap-10'>
            <div className='flex gap-4 bg-[#F7F7F7] h-[132px] items-center p-4'>
                <Image
                src="/images/Frame 292.svg"
                alt="image"
                height={100}
                width={100} />
                <div>
                    <h1 className='text-xl font-bold'>Design & Development</h1>
                    <p className='text-lg'>50+ Courses Available</p>
                </div>
            </div>

            <div className='flex gap-4 bg-[#F7F7F7] h-[132px] items-center p-4'>
                <Image
                src="/images/Frame 292.svg"
                alt="image"
                height={100}
                width={100} />
                <div>
                    <h1 className='text-xl font-bold'>Design & Development</h1>
                    <p className='text-lg'>50+ Courses Available</p>
                </div>
            </div>

            <div className='flex gap-4 bg-[#F7F7F7] h-[132px] items-center p-4'>
                <Image
                src="/images/Frame 292.svg"
                alt="image"
                height={100}
                width={100} />
                <div>
                    <h1 className='text-xl font-bold'>Design & Development</h1>
                    <p className='text-lg'>50+ Courses Available</p>
                </div>
            </div>

            <div className='flex gap-4 bg-[#F7F7F7] h-[132px] items-center p-4 max-xs:hidden'>
                <Image
                src="/images/Frame 292.svg"
                alt="image"
                height={100}
                width={100} />
                <div>
                    <h1 className='text-xl font-bold'>Design & Development</h1>
                    <p className='text-lg'>50+ Courses Available</p>
                </div>
            </div>

            <div className='flex gap-4 bg-[#F7F7F7] h-[132px] items-center p-4 max-xs:hidden'>
                <Image
                src="/images/Frame 292.svg"
                alt="image"
                height={100}
                width={100} />
                <div>
                    <h1 className='text-xl font-bold'>Design & Development</h1>
                    <p className='text-lg'>50+ Courses Available</p>
                </div>
            </div>

            <div className='flex gap-4 bg-[#F7F7F7] h-[132px] items-center p-4 max-xs:hidden'>
                <Image
                src="/images/Frame 292.svg"
                alt="image"
                height={100}
                width={100} />
                <div>
                    <h1 className='text-xl font-bold'>Design & Development</h1>
                    <p className='text-lg'>50+ Courses Available</p>
                </div>
            </div>

            <div className='flex gap-4 bg-[#F7F7F7] h-[132px] items-center p-4 max-xs:hidden'>
                <Image
                src="/images/Frame 292.svg"
                alt="image"
                height={100}
                width={100} />
                <div>
                    <h1 className='text-xl font-bold'>Design & Development</h1>
                    <p className='text-lg'>50+ Courses Available</p>
                </div>
            </div>

            <div className='flex gap-4 bg-[#F7F7F7] h-[132px] items-center p-4 max-xs:hidden'>
                <Image
                src="/images/Frame 292.svg"
                alt="image"
                height={100}
                width={100} />
                <div>
                    <h1 className='text-xl font-bold'>Design & Development</h1>
                    <p className='text-lg'>50+ Courses Available</p>
                </div>
            </div>

            <div className='flex gap-4 bg-[#F7F7F7] h-[132px] items-center p-4 max-xs:hidden'>
                <Image
                src="/images/Frame 292.svg"
                alt="image"
                height={100}
                width={100} />
                <div>
                    <h1 className='text-xl font-bold'>Design & Development</h1>
                    <p className='text-lg'>50+ Courses Available</p>
                </div>
            </div>
            
        </div>
            <div className='flex flex-col items-center p-20'>
               <button className='border rounded-md w-[155px] h-[48px] '>View All Courses</button>
            </div>
    </div>
  )
}

export default ExploreCourses