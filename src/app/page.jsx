import Cursor from "@/components/Cursor"
import Background from "@/components/Background"

import Hero from "@/components/Hero"
import Jobs from "@/components/Jobs"
import AboutMe from "@/components/AboutMe"

export default function Home() {
    return (
        <main className="text-white cursor-none">
            {/* <Background /> */}
            <Cursor />

            <Hero />
            <AboutMe />
            <Jobs />
        </main>
    )
}
