import React from 'react';

export default function Jobs() {
    let jobs = [
        {
            title: "River Oak Properties LLC - Web Developer",
            dates: "APRIL 2023 - MAY 2023",
            points: [
                "Developed and tested a full stack website.",
                "Used Node.js to create a contact form that emails the company.",
                "Also Used Node.js for a payment form so tenants can easily pay rent.",
                "Used React to create a fast and responsive font-end.",
                "Lastly I used SCSS to give the website a unique style."
            ]
        },
        {
            title: "Champions Retreat Golf Club - Busser",
            dates: "AUGUST 2021 - APRIL 2023",
            points: [
                "Monitored food and beverage supplies, assisting with restocking when needed.",
                "Refilled drinks and provided extra napkins and silverware to go the extra mile in serving customers.",
                "Reset and clean tables quickly to prepare for new customers.",
                "Assisted wait staff with timely food delivery and guest requests.",
                "Coordinated with kitchen staff to determine timely delivery and accuracy of food orders."
            ]
        },
        {
            title: "River Oak Properties LLC - Work Assistant",
            dates: "JUNE 2018 - AUGUST 2021",
            points: [
                "Painted multiple houses.",
                "Pressure washed fences, outside walls, driveways, etc.",
                "Landscaping.",
                "Drywall repair.",
                "Electrical work.",
                "Refinished hardwood flooring."
            ]
        }
    ]

    return (
        <section className='w-[50rem] mx-auto py-12 relative'>
            <h1 className='text-3xl font-bold'>JOB EXPERIENCES</h1>
            <div className='mt-6 pl-12 flex flex-col gap-8'>
                {jobs.map((e, i) => (
                    <div key={i} className='grid grid-cols-[0.6rem,1fr] gap-x-12 gap-y-2'>
                        <span className='w-full aspect-square rounded-full bg-white my-auto'></span>
                        <div className='flex flex-row gap-4 items-end'>
                            <p className='font-bold text-lg'>{e.title}</p>
                            <p className='opacity-50'>{e.dates}</p>
                        </div>
                        <span className='mx-auto w-px h-full bg-gradient-to-b from-white to-transparent'></span>
                        <ul className='flex flex-col gap-0 pl-6'>
                            {e.points.map((e, i) => (
                                <div key={i} className='group flex flex-row gap-2'>
                                    <p className='group-hover:translate-x-2 transition-all duration-500 ease-out relative'> - </p>
                                    <li className='group-hover:translate-x-2 transition-all duration-200 ease-out relative'>{e}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent'></div>
        </section>
    )
}