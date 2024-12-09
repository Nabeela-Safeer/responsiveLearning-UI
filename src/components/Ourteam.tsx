import React from 'react'
import Image from 'next/image'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Button } from '@/components/ui/button';


const Ourteam = () => {
  return (
    <div className='bg-[#F7F7F7] p-20 mx-auto'>
        <div className='flex flex-col items-center gap-5 text-center'>
            <h1 className='text-5xl font-bold max-xs:text-3xl'>Our team</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        
        <div className='grid grid-cols-3 gap-10 p-10 max-xs:grid-cols-1'>
          <div className='flex flex-col items-center text-center'>
            <Image
            src="/images/team1.svg"
            alt="image"
            height={100}
            width={100} />

            <h1>James Nduku</h1>
            <p>Marketing Coordinator</p>
            <div className='flex gap-2 mt-10'>
            <FaLinkedin size="20" />
            <FaTwitter size="20" />
            <FaFacebookF size="20"/>
            </div>
          </div>

          <div className='flex flex-col items-center text-center'>
            <Image
            src="/images/team2.svg"
            alt="image"
            height={100}
            width={100} />

            <h1>Joseph Munyambu</h1>
            <p>Nursing Assistant</p>
            <div className='flex gap-2 mt-10'>
            <FaLinkedin size="20" />
            <FaTwitter size="20" />
            <FaFacebookF size="20"/>
            </div>
          </div>

          <div className='flex flex-col items-center text-center'>
            <Image
            src="/images/team3.svg"
            alt="image"
            height={100}
            width={100} />

            <h1>Joseph Ngumbau</h1>
            <p>Medical Assistant</p>
            <div className='flex gap-2 mt-10'>
            <FaLinkedin size="20" />
            <FaTwitter size="20" />
            <FaFacebookF size="20"/>
            </div>
          </div>

          <div className='flex flex-col items-center text-center max-xs:hidden'>
            <Image
            src="/images/team4.svg"
            alt="image"
            height={100}
            width={100} />

            <h1>Erick Kipkemboi</h1>
            <p>Web Designer</p>
            <div className='flex gap-2 mt-10'>
            <FaLinkedin size="20" />
            <FaTwitter size="20" />
            <FaFacebookF size="20"/>
            </div>
          </div>

          <div className='flex flex-col items-center text-center max-xs:hidden'>
            <Image
            src="/images/team5.svg"
            alt="image"
            height={100}
            width={100} />

            <h1>Stephen Kerubo</h1>
            <p>President of Sales</p>
            <div className='flex gap-2 mt-10'>
            <FaLinkedin size="20" />
            <FaTwitter size="20" />
            <FaFacebookF size="20"/>
            </div>
          </div>

          <div className='flex flex-col items-center text-center max-xs:hidden'>
            <Image
            src="/images/team6.svg"
            alt="image"
            height={100}
            width={100} />

            <h1>John Leboo</h1>
            <p>Dog Trainer</p>
            <div className='flex gap-2 mt-10'>
            <FaLinkedin size="20" />
            <FaTwitter size="20" />
            <FaFacebookF size="20"/>
            </div>
          </div>
        </div>
        <Button className='text-black bg-white border border-black xl:hidden flex max-xs:justify-center'>View All</Button>

    </div>
  )
}

export default Ourteam