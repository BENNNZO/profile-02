import Cursor from "@/components/Cursor"
import Background from "@/components/Background"

import Hero from "@/components/Hero"
import AboutMe from "@/components/AboutMe"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Jobs from "@/components/Jobs"

export default function Home() {
    return (
        <main className="text-white cursor-none">
            <Background />
            <Cursor />

            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <Jobs />
        </main>
    )
}
