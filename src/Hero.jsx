import React from 'react'
import Header from './components/Header'
import HeroContent from './components/HeroContent'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import key from'./assets/icon-key.svg'
import wifi from './assets/icon-wifi.svg'
import breakfast from './assets/icon-breakfast.svg'

const Hero = () => {
    return (
        <section className='desktop:w-[80%] w-full p-5 mobile:p-7'>
            <Header></Header>
            <section className='flex items-center justify-center max-mobile:flex-col mt-10 '>
                <Card1></Card1>
                <Card2></Card2>
            </section>
            <div className='mt-15 flex gap-10 max-mobile:flex-col'>
                <HeroContent nama='ARRIVAL' no='01' image={key} judul='Check-in from 15:00' teks='Sat, 25 April' variant='red'>
                    <p className='font-dmSans text-neutral-700 text-lg font-medium'>Ring the brass bell by the blue door. if we're at the market, the key is in the terracotta pot by the olive tree</p>
                </HeroContent>
                <HeroContent nama='WIFI' no='02' image={wifi} judul='Le Soleil • Guest' teks='Password below' variant='blue'>
                    <div>
                        <div className='bg-neutral-300 rounded-lg flex items-center justify-between px-3 py-1'>
                            <p className='text-neutral-500 font-dmMono text-lg'>NETWORK</p>
                            <p>le Soleil - guest</p>
                        </div>
                        <div className='bg-neutral-300 rounded-lg flex items-center justify-between px-3 py-1 mt-3'>
                            <p className='text-neutral-500 font-dmMono text-lg'>PASSWORD</p>
                            <p>soleil-2026</p>
                        </div>
                    </div>
                </HeroContent>
                <HeroContent nama='BREAKFAST' no='03' image={breakfast} judul='Served 8 - 10:30' teks='On the terrace, 25 April' variant=''>
                    <p className='font-dmSans text-neutral-700 text-lg font-medium'>Fresh figs, Mardeille honey, pain au levain, and espresso. gluten-free option? Leave a note the night before</p>
                </HeroContent>

            </div>
        </section>
    )
}

export default Hero
