import React from 'react'
import Header from './components/Header'
import HeroContent from './components/HeroContent'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import barcode from '../assets/icon-barcode.svg'

const Hero = () => {
    return (
        <section className='desktop:w-[80%] w-full p-5 mobile:p-7'>
            <Header></Header>
            <section className='flex items-center justify-center max-mobile:flex-col mt-10 '>
                <Card1></Card1>
                <Card2></Card2>
            </section>
            <div>
                <HeroContent nama='ARRIVAL' no='01' image='../assets/icon-key.svg' judul='Check-in from 15:00' teks='Sat, 25 April' variant='red'>a;izsajg;rpoaifvj</HeroContent>
                <link src='../assets/icon-key.svg' className='bg-black'/>
                <img src={barcode}/>

            </div>
        </section>
    )
}

export default Hero
