import { montserrat } from '@/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const JoinOver = () => {
  return (
    <div className={`bg-[#ED6810] flex flex-col items-center py-24 gap-4 px-[20px] md:px-[150px] lg:px-[250px] xl:px-[300px] ${montserrat.className}`}>
      <h1 className='text-[#FFF3F4] font-bold text-[26px] md:text-[35px] text-center'>Join over 1,000 People living easy live with Bazaar </h1>
      <p className='text-center text-[#FFF3F4] font-medium text-[15px]'>Join thousands of users who trust Bazaar with their grocery and food order</p>
      <div className="flex flex-wrap md:justify-start justify-center items-center gap-4 mt-8">
          <Link href="#">
            <Image
              src="/apple_store.svg"
              alt="Apple Store"
              width={400}
              height={400}
              className="w-[120px] h-[36px] object-cover rounded"
            />
          </Link>
          <Link href="#">
            <Image
              src="/google_store.svg"
              alt="Google Store"
              width={400}
              height={400}
              className="w-[120px] h-[36px] object-cover rounded"
            />
          </Link>
        </div>
    </div>
  )
}

export default JoinOver
