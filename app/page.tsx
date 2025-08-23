import Hero from "@/components/hero"
import Facilities from "@/components/facilities"
import About from "@/components/about"
import Contact from "@/components/contact"

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

