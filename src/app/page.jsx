import Hero from "@/components/Hero"
import Cursor from "@/components/Cursor"
import Background from "@/components/Background"

export default function Home() {
    return (
        <main className="text-white cursor-none">
            <Background />
            <Cursor />

            <Hero />
            <Hero />
            <Hero />
        </main>
    )
}
