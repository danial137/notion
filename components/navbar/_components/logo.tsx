import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const logo = () => {
    return (
        <>

            <Link href="/">
                <Image
                    src="/logos/bird-logo.png"
                    alt='logo'
                    width={150}
                    height={150}
                    className='w-24'
                />
            </Link>

        </>
    )
}

export default logo