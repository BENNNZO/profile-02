"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { validateConfig } from 'next/dist/server/config-shared';

export default function Projects() {
    const [projects, setProjects] = useState([
        {
            state: false,
            title: "Lorem ipsum dolor sit amet.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, officia. Nisi aut distinctio odio cum. Ab ut quasi voluptate ipsa praesentium sequi nam sint quaerat.",
            src: "/img/projects/project-idle.png"
        },
        {
            state: false,
            title: "Lorem ipsum dolor sit amet.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, officia. Nisi aut distinctio odio cum. Ab ut quasi voluptate ipsa praesentium sequi nam sint quaerat.",
            src: "/img/projects/project-idle.png"
        },
        {
            state: false,
            title: "Lorem ipsum dolor sit amet.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, officia. Nisi aut distinctio odio cum. Ab ut quasi voluptate ipsa praesentium sequi nam sint quaerat.",
            src: "/img/projects/project-idle.png"
        },
        {
            state: false,
            title: "Lorem ipsum dolor sit amet.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, officia. Nisi aut distinctio odio cum. Ab ut quasi voluptate ipsa praesentium sequi nam sint quaerat.",
            src: "/img/projects/project-idle.png"
        },
        {
            state: false,
            title: "Lorem ipsum dolor sit amet.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, officia. Nisi aut distinctio odio cum. Ab ut quasi voluptate ipsa praesentium sequi nam sint quaerat.",
            src: "/img/projects/project-idle.png"
        },
        {
            state: false,
            title: "Lorem ipsum dolor sit amet.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, officia. Nisi aut distinctio odio cum. Ab ut quasi voluptate ipsa praesentium sequi nam sint quaerat.",
            src: "/img/projects/project-idle.png"
        },
        {
            state: false,
            title: "Lorem ipsum dolor sit amet.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, officia. Nisi aut distinctio odio cum. Ab ut quasi voluptate ipsa praesentium sequi nam sint quaerat.",
            src: "/img/projects/project-idle.png"
        }
    ])

    function toggle(i, state) {
        setProjects(prev => {
            let newArr = [...prev]
            newArr.forEach(e => e.state = false)
            newArr[i].state = state
            return newArr
        })
    }

    return (
        <section className='w-[50rem] mx-auto py-12 relative'>
            <h1 className='text-3xl font-bold'>PROJECTS I'VE WORKED ON</h1>
            <div className='mt-6 pl-12 flex flex-col gap-2'>
                {projects.map((e, i) => (
                    <div key={i} onClick={() => toggle(i, !projects[i].state)} className='bg-gradient-to-br from-white/50 to-transparent p-px group'>
                        <div className='bg-black h-10 flex flex-row justify-between items-center px-4 py-2 group-hover:px-5 transition-all ease-out'>
                            <p>{e.title}</p>
                            <Image
                                src="/img/projects/chevron-forward-outline.svg"
                                width={25}
                                height={25}
                                className={`${projects[i].state ? 'rotate-90' : ''} transition-transform ease-out duration-300`}
                                alt={e.title}
                            />
                        </div>
                        <div className={`${projects[i].state ? 'grid grid-rows-[1fr]' : 'grid grid-rows-[0fr]'} transition-all ease-out duration-700`}>
                            <div className='bg-black overflow-hidden transition-all ease-out duration-1000'>
                                <Image 
                                    src={e.src}
                                    width={1600}
                                    height={900}
                                    alt='dropdown arrow'
                                />
                                <p className='px-4 py-2'>{e.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[75rem] h-px bg-gradient-to-r from-transparent via-white to-transparent'></div>
        </section>
    )
}