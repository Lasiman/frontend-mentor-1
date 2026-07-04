import React from 'react'
import barcode from '../assets/icon-barcode.svg'

const Card1 = () => {
    return (
        <div className='bg-neutral-0 mobile:w-md  p-5 rounded-xl -rotate-2 max-mobile:order-2 ml-[-1.25rem] max-mobile:mt-7 shadow-lg shadow-neutral-500'>
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
            <div className='flex items-center justify-around mt-3 border-b border-neutral-300 pb-3 mb-3'>
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
            <ul className='border-b pb-3'>
                <li className='font-dmSans flex items-center justify-between mt-1'>
                    <p>Room • La Garrigue × 4 nights</p>
                    <p>€ 620.00</p>
                </li>
                <li className='font-dmSans flex items-center justify-between mt-1'>
                    <p>Breakfast × 2 guests</p>
                    <p>€ 96.00</p>
                </li>
                <li className='font-dmSans flex items-center justify-between mt-1'>
                    <p>Tourist tax</p>
                    <p>€ 14.40</p>
                </li>
            </ul>
            <div>
                <div className='flex justify-between items-center mt-3'>
                    <p className='font-dmMono text-neutral-500'>TOTAL PAID</p>
                    <p className='font-fraunces text-3xl font-semibold'>€ 730.40</p>
                </div>
                <div className='flex items-center justify-between mt-5'>
                    <p className='font-dmMono text-xs text-neutral-500'>PAID • WISE • GBP</p>
                    <img src={barcode}/>
                </div>
            </div>
        </div>
    )
}

export default Card1
