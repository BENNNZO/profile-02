import Hero from "@/components/Hero"
import Cursor from "@/components/Cursor"

export default function Home() {
    return (
        <main className="text-white cursor-none">
            <Cursor />

            <Hero />
            <Hero />
            <Hero />
        </main>
    )
}
