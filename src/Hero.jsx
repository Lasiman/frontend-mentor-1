import React from 'react'
import Header from './components/Header'
import HeroContent from './components/HeroContent'
import Card1 from './components/Card1'
import Card2 from './components/Card2'

const Hero = () => {
    return (
        <section className='desktop:w-[80%] w-screen p-5 mobile:p-7 bg-amber-500'>
            <Header></Header>
            <section className='bg-amber-700 w-ful min-h-[25rem]'>
                <Card1></Card1>
                <Card2></Card2>
            </section>
            <HeroContent></HeroContent>
        </section>
    )
}

export default Hero
