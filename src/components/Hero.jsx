"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
    const [amt, setAmt] = useState({ x: 0, y: 0 })

    useEffect(() => {
        let gap = 200

        setAmt({
            x: Math.round(window.innerWidth / gap),
            y: Math.round(window.innerHeight / gap)
        })

        window.addEventListener("resize", e => {
            console.log("update")
            setAmt({
                x: Math.round(window.innerWidth / gap),
                y: Math.round(window.innerHeight / gap)
            })
        })
    }, [])

    return (
        <section className='h-screen'>
            {/* <Image
                src="/img/hero-bg-grid.png"
                width={1000}
                height={1000}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 pointer-events-none'
            /> */}
            <div className='absolute top-12 left-0 w-full h-[calc(100vh_-_3rem)] flex flex-col justify-around'>
                {[...Array(amt.y)].map((e, i) => (
                    <div key={i} className='flex flex-row justify-around items-center'>
                        {[...Array(amt.x)].map((e, i) => (
                            <div 
                                key={i} 
                                className={`h-1 bg-white/20 shadow-lg rounded-full`}
                                style={{ width: `${(i + 1) * 5}px` }}
                            ></div>
                        ))}
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
                        className='h-full w-full object-cover rounded-full'
                    />
                </div>
            </div>
        </section>
    )
}