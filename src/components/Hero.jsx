"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
    const [amt, setAmt] = useState({ x: 0, y: 0 })
    const [mouse, setMousePos] = useState({ x: 0, y: 0 })

    let gap = 250

    useEffect(() => {
        setAmt({
            x: Math.round(window.innerWidth / gap),
            y: Math.round(window.innerHeight / gap)
        })

        window.addEventListener("mousemove", e => {
            setMousePos({ 
                x: e.clientX, 
                y: e.clientY ,
            })
        })

        window.addEventListener("resize", e => {
            setAmt({
                x: Math.round(window.innerWidth / gap),
                y: Math.round(window.innerHeight / gap)
            })
        })
    }, [])

    return (
        <section className='h-screen relative pointer-events-none overflow-hidden'>
            <div className='flex flex-col-reverse xl:flex-row justify-center gap-10 sm:gap-20 xl:gap-0 xl:justify-between items-center h-full px-12 relative z-10'>
                <div className='flex flex-col gap-3'>
                    <Image
                        src="/svg/logo.svg"
                        width={200}
                        height={1000}
                        className='w-32 sm:w-40 xl:w-56'
                    />
                    <h1 className='xl:text-5xl sm:text-4xl text-3xl font-semibold tracking-wide'>BENJAMIN PHILLIPS</h1>
                    <p className='text-md sm:text-xl font-bold opacity-50 relative -top-3'>FULL STACK WEB DEVELOPER</p>
                </div>
                <div className='xl:mr-40 h-56 xl:h-72 aspect-square rounded-full relative'>
                    <Image 
                        src="/img/hero-profile.jpg"
                        width={200}
                        height={200}
                        className='absolute top-0 left-0 blur-3xl opacity-50 h-full w-full object-cover rounded-full'
                        quality={1}
                    />
                    <Image 
                        src="/img/hero-profile.jpg"
                        width={200}
                        height={200}
                        className='h-full w-full object-cover rounded-full relative z-10'
                        quality={100}
                    />
                </div>
            </div>
            <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent'></div>
        </section>
    )
}