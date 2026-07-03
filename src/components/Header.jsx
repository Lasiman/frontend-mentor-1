import React from 'react'

const Header = () => {
    return (
        <section className='flex max-mobile:flex-col max-mobile:gap-4 items-center justify-between'>
            <div>
                <p className='font-dmMono text-neutral-500 text-lg'>BOOKING - CONFIRMED</p>
                <p className='font-fraunces text-4xl font-semibold'>Bienvenue, <span className='text-terracotta-600'>Lucia.</span></p>
            </div>
            <div>
                <button className='border px-5 py-2 rounded-3xl ml-3 font-dmSans font-semibold border-neutral-300 text-neutral-300 transition-all duration-300 hover:scale-110'>print receipt</button>
                <button className='px-5 py-2 rounded-3xl ml-3 font-dmSans font-semibold text-neutral-0 bg-neutral-950 transition-all duration-300 hover:scale-110'>Add to calendar</button>
            </div>
        </section>
    )
}

export default Header
