import React from 'react'

const HeroContent = ({children, nama, no, image, judul, teks, variant}) => {

    return (
        <div className='border border-neutral-300 bg-neutral-0 p-3 rounded-2xl min-h-70 shadow-xl flex-1'>
            <div className={`${variant === 'red' ? 'text-terracotta-600' : variant === 'blue' ? 'text-blue-500' : 'text-rose-500'} flex items-center justify-between`}>

                <div className='flex items-center gap-5'>
                    <div className={`${variant === 'red' ? 'bg-terracotta-600' : variant === 'blue' ? 'bg-blue-500' : 'bg-rose-500'} rounded-lg p-2 w-fit`}>
                        <img src={image} className='m-auto w-7'/>
                    </div>
                    <p className='font-dmMono text-lg'>{nama}</p>
                </div>

                <p className='font-fraunces text-2xl font-semibold'>{no}</p>

            </div>


            <div>
                <h1 className='font-fraunces text-3xl mb-2 mt-5'>{judul}</h1>
                <p className='text-neutral-500 font-dmSans mb-5'>{teks}</p>
            </div>
            {children}
        </div>
    )
}

export default HeroContent
