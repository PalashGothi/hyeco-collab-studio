import Hero from "@/components/sections/hero"
import Facilities from "@/components/sections/facilities"
import About from "@/components/sections/about"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Facilities />
      <About />
      <Contact />
    </main>
  )
}

