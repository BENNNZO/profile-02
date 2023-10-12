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
            <div className='flex flex-row justify-between items-center h-full px-12 relative z-10'>
                <div className='flex flex-col gap-3'>
                    <Image
                        src="/svg/logo.svg"
                        width={200}
                        height={1000}
                    />
                    <h1 className='text-5xl font-semibold tracking-wide'>BENJAMIN PHILLIPS</h1>
                    <p className='text-xl font-bold opacity-50 relative -top-3'>FULL STACK WEB DEVELOPER</p>
                </div>
                <div className='mr-96 aspect-square rounded-full relative'>
                    <Image 
                        src="/img/hero-profile.jpg"
                        width={200}
                        height={200}
                        className='absolute top-0 left-0 blur-xl opacity-10 h-full w-full object-cover rounded-full'
                    />
                    <Image 
                        src="/img/hero-profile.jpg"
                        width={200}
                        height={200}
                        className='h-full w-full object-cover rounded-full relative z-10'
                    />
                </div>
            </div>
        </section>
    )
}