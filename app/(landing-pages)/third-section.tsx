import React from 'react'
import Image from 'next/image'
import { Lora } from 'next/font/google'
import { cn } from '@/lib/utils'


const font = Lora({
  subsets: ['latin'],
  weight: ['400'],

})
function ThirdSection() {
  return (
    <div className='xl:pt-32 pt-24 relative flex justify-center items-center flex-col'>
      <div className='xl:text-5xl text-3xl 2xl:w-3/5 w-3/5 xl:w-1/3 font-medium mx-auto text-center'>
        consolidate tools Cut Costs
      </div>
      <Image src="/assets/canva-logo.png" alt="Hero" width={500} height={300} className='pt-10 w-4/5 xl:w-1/3' />


      <div className={cn('flex items-center justify-center text-2xl xl:3xl pt-10 pb-4 xl:py-10 text-center w-4/5'
        , font.className,
      )}>
        &quot; We have been able to cut costs by 30% by using Note. We no longer need to pay for multiple tools and can now manage everything in one place. &quot;

      </div>

      <div className='items-center justify-center flex flex-col'>
        <Image src="/logos/logoipsum-327.svg" alt="logo" width={200} height={200} className='pt-2 xl:pt-0 w-10 xl:w-14' />

        <div className='text-center'>
          <div className='text-sm font-medium pt-4 '> Erick Smith </div>
          <div className='text-sm'> Marlketing Directer Example INC </div>
        </div>

      </div>
    </div>

  )
}

export default ThirdSection