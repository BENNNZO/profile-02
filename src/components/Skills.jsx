import React from 'react';
import Image from 'next/image';

export default function Skills() {
    let skills = [
        {
            title: "HTML5",
            src: "/svg/logo-html5.svg"
        },
        {
            title: "CSS3",
            src: "/svg/logo-css3.svg"
        },
        {
            title: "JS",
            src: "/svg/logo-javascript.svg"
        },
        {
            title: "React",
            src: "/svg/logo-react.svg"
        },
        {
            title: "NodeJS",
            src: "/svg/logo-nodejs.svg"
        },
        {
            title: "MongoDB",
            src: "/svg/logo-mongodb.svg"
        },
        {
            title: "SASS",
            src: "/svg/logo-sass.svg"
        },
        {
            title: "Next.js",
            src: "/svg/logo-nextjs.svg"
        },
        {
            title: "Tailwind",
            src: "/svg/logo-tailwind.svg"
        }
    ]

    return (
        <section className='py-12 relative'>
            <h1 className='text-3xl font-bold w-[50rem] mx-auto'>TECH STACK</h1>
            <ul className='mt-6 flex flex-row gap-4 justify-center'>
                {skills.map((e, i) => (
                    <>
                        <li key={i} className='group flex flex-col gap-3 items-center justify-center'>
                            <Image
                                src={e.src}
                                width={85}
                                height={85}
                                className='invert group-hover:-translate-y-2 transition-transform ease-out'
                            />
                            <p className='text-sm duration-500 tracking-widest group-hover:tracking-normal transition-all ease-out'>{e.title}</p>
                        </li>
                        {i + 1 !== skills.length ? (
                            <div className='h-32 my-auto w-px bg-gradient-to-t from-transparent via-white/50 to-transparent'></div>
                        ) : ""}
                    </>
                ))}
            </ul>
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[75rem] h-px bg-gradient-to-r from-transparent via-white to-transparent'></div>
        </section>
    )
}