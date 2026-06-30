import React from 'react'
import SidebarButton from './SidebarButton'
import bed from '../assets/icon-bed.svg'
import house from '../assets/icon-house.svg'
import pin from '../assets/icon-pin.svg'
import breakfast from '../assets/icon-breakfast-outline.svg'
import message from '../assets/icon-mail.svg'

const Menu = () => {
    return (
        <div className='pt-3 w-full'>
            <SidebarButton logo={bed} text={'lorem ipsum dolor'} />
            <SidebarButton logo={house} text={'The house'} />
            <SidebarButton logo={pin} text={'Around town'} />
            <SidebarButton logo={breakfast} text={'Breakfast'} />
            <SidebarButton logo={message} text={"Messages"} />
        </div>
    )
}

export default Menu
