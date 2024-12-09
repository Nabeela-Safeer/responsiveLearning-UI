import React from 'react'

const Achivment = () => {
  return (
    <div className='mt-24 max-xs:hidden'>
        <div className='flex flex-col items-center text-center p-20'>
            <h1 className='text-5xl font-bold mb-5'>Our Achivements</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>

        <div className='grid grid-cols-4 gap-5 text-center'>
            <div>
                <h1 className='text-4xl font-bold mb-2'>+200</h1>
                <p>Courses</p>
            </div>

            <div>
                <h1 className='text-4xl font-bold mb-2'>50K</h1>
                <p>Mentors</p>
            </div>

            <div>
                <h1 className='text-4xl font-bold mb-2'>370k</h1>
                <p>Students</p>
            </div>

            <div>
                <h1 className='text-4xl font-bold mb-2'>100+</h1>
                <p>Recognition</p>
            </div>
        </div>
    </div>
  )
}

export default Achivment