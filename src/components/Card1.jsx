import React from 'react'

const Card1 = () => {
    return (
        <div className='bg-neutral-0 max-w-lg p-5 rounded-xl -rotate-5'>
            <div className='flex justify-between items-center pb-3 border-b border-neutral-300'>
                <div>
                    <p className='font-dmMono text-sm text-neutral-500'>RECEIPI</p>
                    <p className='font-fraunces text-2xl font-medium mt-[-2px]'>Your stay</p>
                </div>
                <div className='font-dmMono text-sm text-neutral-500'>
                    <p>No MS - 2026</p>
                    <p>0421 - AH</p>
                </div>
            </div>
            <div className='flex items-center justify-around mt-3'>
                <div className='text-center'>
                    <p className='font-dmMono text-neutral-500'>CHECK IN</p>
                    <p className='font-fraunces text-4xl font-semibold'>25 Apr</p>
                    <p className='font-dmSans mt-1 text-neutral-500'>Saturday - 15:00</p>
                </div>
                <div className='text-center'>
                    <p className='font-dmMono text-neutral-500'>CHECK OUT</p>
                    <p className='font-fraunces text-4xl font-semibold'>29 Apr</p>
                    <p className='font-dmSans mt-1 text-neutral-500'>Wednesday - 11:00</p>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Card1
