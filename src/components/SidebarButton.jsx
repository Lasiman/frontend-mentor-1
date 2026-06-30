import React from 'react'

const SidebarButton = ({logo, text}) => {
    return (
        <div className='cursor-pointer flex w-full p-2 gap-2 rounded-xl font-dmSans hover:bg-neutral-0 hover:font-semibold transition-all duration-300 '>
            <img src={logo} alt="" />
            <p>{text}</p>
        </div>
    )
}

export default SidebarButton
