import React from 'react'
import Menu from './components/Menu'
import icon from './assets/logo.svg'
import spark from './assets/icon-sparkle.svg'

const SideBar = () => {
    return (
        <section className='w-[20%] max-mobile:w-full h-screen p-3 border-r border-neutral-400'>
            <div className='w-full border-b border-neutral-400 pb-3'>
                <img src={icon} />
            </div>
            <div className='flex flex-col justify-between'>
                <Menu></Menu>
                <div>
                    <div className={`bg-[url(favicon-32x32.png)] w-full h-full`}>
                        aaaaaaaa
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SideBar
