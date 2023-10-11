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
            <div className='absolute top-12 left-0 w-full h-[calc(100vh_-_3rem)] flex flex-col justify-around'>
                {[...Array(amt.y)].map((e, y) => (
                    <div key={y} className='flex flex-row justify-around items-center'>
                        {[...Array(amt.x)].map((e, x) => {
                            let deltaX = (gap * x) - mouse.x + (gap / 2)
                            let deltaY = (gap * y) - mouse.y + (gap / 2)
                            
                            let hyp = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY))

                            let opacity = `${Math.abs(Math.min(hyp - 1000, 0)) / 10}%`

                            console.log(opacity)

                            return (
                                <div className='relative'>
                                    <div key={x} className={`absolute top-1/2 left-1/2 h-px w-3 bg-white animate-hero-spin`} style={{ opacity }}></div>
                                    <div key={x} className={`absolute top-1/2 left-1/2 h-3 w-px bg-white animate-hero-spin`} style={{ opacity }}></div>
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>

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