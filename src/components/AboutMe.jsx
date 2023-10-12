import React from 'react';

export default function AboutMe() {
    return (
        <section className='w-[50rem] mx-auto py-12 relative'>
            <h1 className='text-3xl font-bold'>A BIT ABOUT ME</h1>
            <div className='mt-6 pl-12 flex flex-col gap-2'>
                <p>Hello! my name is Benjamin Phillips, and I am an 18-year-old who is eager to become a full-stack web developer. I have recently finished a six month development bootcamp with Georgia Tech and have moved on to freelancing, but untimatly I would like to have a full-time job doing full stack web development.</p>
                <p>I have always been fascinated by computers, and at the age of 12, I had already bought my first computer. Since then, I have grown to have many hobbies, including 3D modeling, graphic design, and video editing, but ultimately decided to pursue computer science. Because of my interest in computers from a young age, I have always been able to learn technology very quickly and excel in the technologies I study.</p>
            </div>
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[75rem] h-px bg-gradient-to-r from-transparent via-white to-transparent'></div>
        </section>
    )
}