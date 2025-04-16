import React from 'react'
import Image from 'next/image'
import { PiArrowRight } from 'react-icons/pi'


const logos = [

    { image: '/logos/logoipsum-289.svg' },
    { image: '/logos/logoipsum-292.svg' },
    { image: '/logos/logoipsum-295.svg' },
    { image: '/logos/logoipsum-297.svg' },
    { image: '/logos/logoipsum-298.svg' },
    { image: '/logos/logoipsum-289.svg' },
    { image: '/logos/logoipsum-325.svg' },
    { image: '/logos/logoipsum-327.svg' },
    { image: '/logos/logoipsum-329.svg' },
    { image: '/logos/logoipsum-300.svg' },
    { image: '/logos/logoipsum-311.svg' },
    { image: '/logos/logoipsum-317.svg' },

]

const SecondSection = () => {
    return (
        <div className='pt-16 flex justify-center items-center flex-col'>
            <div className='text-4xl w-3/4 text-center xl:text-5xl '>
                milions run of bird everyday
            </div>
            <div className='py-4 xl:w-1/4 text-center px-8 '>
                powering world &apos;s best teams from next generation startup
            </div>
            <div className='text-sky-500 flex items-center hover:underline hover:cursor-pointer'>
                read custom stories <PiArrowRight className='ml-3 text-sm' />
            </div>

            {<div className='grid grid-cols-3 xl:grid-cols-4 items-center justify-center px-10 md:px-20 lg:px-0 lg:w1/2 pt-10 gap-10 text-center mx-auto'>
                {logos.map((logo, index) => (
                    <div key={index}>
                        <Image src={logo.image} alt='logo' width={200} height={200} className='w-24'/>
                    </div>

                ))}
            </div>
            }
        </div>
    );
}

export default SecondSection