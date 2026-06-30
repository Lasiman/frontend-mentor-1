import React from 'react'
import Header from './components/Header'
import HeroContent from './components/HeroContent'

const Hero = () => {
    return (
        <section className='desktop:w-[80%] w-screen bg-amber-500'>
            <Header></Header>
            <section></section>
            <HeroContent></HeroContent>
        </section>
    )
}

export default Hero
