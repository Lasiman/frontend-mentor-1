import React from 'react'
import sun from '../assets/icon-sun.svg'

const Card2 = () => {
    return (
        <div className='mobile:w-md max-mobile:w-85  bg-terracotta-600 rounded-xl p-5 text-neutral-0 z-10 rotate-2 ml-[-1rem] shadow-lg shadow-sun-500'>
            <div className='flex justify-between items-start w-full mb-3'>
                <p className='font-dmMono font-light text-sm'>WELCOME CARD</p>
                <img src={sun} />
            </div>
            <div>
                <p className='font-fraunces text-lg font-normal'>A note from your host.</p>
                <p className='font-fraunces text-4xl mt-1'>Margaux.</p>
                <p className='font-dmSans text-sm font-light leading-4.5 mt-5'>we're so glad you're coming. The shutters will be open, the lemonade cold, and the cat - provre - pretending not to notice you</p>
            </div>
            <div className='mt-30'>
                <p className='font-dmMono text-xs'>ROOM</p>
                <p className='font-fraunces text-xl mt-0.5'>La Garrigue</p>
            </div>
        </div>
    )
}

export default Card2
