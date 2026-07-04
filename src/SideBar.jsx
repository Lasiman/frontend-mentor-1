import React, { useState } from 'react'
import Menu from './components/Menu'
import close from './assets/icon-close.svg'
import icon from './assets/logo.svg'
import menu from './assets/icon-menu.svg'

const SideBar = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen( () => !open)
    }
    return (
        <section className='w-[20%] max-mobile:w-full bg-neutral-100 z-20 mobile:h-screen p-3 border-r border-neutral-400 flex flex-col sticky top-0'>
            <div className='w-full border-b border-neutral-400 pb-3 flex justify-between'>
                <img src={icon} />
                {!open && <img src={menu} onClick={handleClick} className='w-[2rem] cursor-pointer mobile:hidden'/>}
                {open && <img src={close} onClick={handleClick} className='w-[2rem] cursor-pointer mobile:hidden'/>}
            </div>

            <div className={`flex-1 mobile:flex flex flex-col justify-between ${open ? 'block' : 'hidden'} `}>
                <Menu></Menu>
                <div className='flex flex-col gap-5'>
                    <div className={` bg-[url(../public/icon-weather.svg)] w-full h-full bg-no-repeat bg-contain bg-position-[110%_-2rem] bg-sun-300 rounded-2xl px-5 py-3 `}>
                        <p className='font-dmMono'>TODAY IN CASSIS</p>
                        <p className='font-fraunces text-3xl'>27°</p>
                        <p className='font-dmSans'>Sunny - light breeze</p>
                    </div>
                    <div className='font-dmMono text-neutral-500 flex flex-col gap-2 mb-5'>
                        <p>EST. 1987</p>
                        <p>MAISON SOLEIL • 12 RUE DES OLIVIERS • CASIS</p>
                        <p>© 2026 MAISON SOLEIL</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SideBar
