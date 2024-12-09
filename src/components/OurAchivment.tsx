import React from 'react'

const OurAchivment = () => {
  return (
    <div className='mx-auto'>
        <div className='flex flex-col items-center text-center p-20 max-xs:p-5'>
            <h1 className='text-5xl max-xs:text-3xl font-bold mb-5 max-xs:mb-10'>Our Achivements</h1>
            <p className='text-lg max-xs:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className='max-xs:hidden'> Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</span></p>
        </div>

        <div className='grid grid-cols-4 gap-5 text-center max-xs:grid-cols-2 max-xs:mt-5'>
            <div>
                <h1 className='text-4xl max-xs:text-xl font-bold mb-2'>+200</h1>
                <p>Courses</p>
            </div>

            <div>
                <h1 className='text-4xl max-xs:text-xl font-bold mb-2'>50K</h1>
                <p>Mentors</p>
            </div>

            <div>
                <h1 className='text-4xl max-xs:text-xl font-bold mb-2'>370k</h1>
                <p>Students</p>
            </div>

            <div>
                <h1 className='text-4xl max-xs:text-xl font-bold mb-2'>100+</h1>
                <p>Recognition</p>
            </div>
        </div>
    </div>
  )
}

export default OurAchivment