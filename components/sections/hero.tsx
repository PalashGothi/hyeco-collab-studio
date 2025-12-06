"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Star } from "lucide-react"

// Images from public directory
const galleryImages = [
    "/IMG_5709.jpeg",
    "/IMG_5669.jpeg",
    "/IMG_5673.jpeg",
    "/DWS06662.jpg",
    "/IMG_5675.jpeg",
    "/studio-new.jpg",
]

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 200])

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-background pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
            </div>

            <div className="container px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium text-foreground/80">Premium Creative Space</span>
                    </motion.div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                        Born to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">Create</span>
                        <br />
                        Now's your Moment.
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Unleash your potential in Bengaluru's most vibrant creative hub.
                        Professional studios, collaborative workspaces, and an inspiring community await.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <Link
                            href="#facilities"
                            className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300"
                        >
                            Explore Facilities
                        </Link>
                    </div>
                </motion.div>

                {/* Right Visuals - Infinite Marquee Gallery */}
                <motion.div
                    style={{ y: y1 }}
                    className="relative hidden lg:block overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />

                    {/* Marquee Row */}
                    <div className="flex w-full overflow-hidden relative h-[500px]">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="flex gap-4 items-center pr-4"
                            style={{ width: "max-content" }}
                        >
                            {[...galleryImages, ...galleryImages].map((src, i) => (
                                <div key={i} className="relative w-[300px] h-[450px] shrink-0 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer grayscale-0 brightness-100">
                                    <Image
                                        src={src}
                                        alt="Studio Gallery"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    )
}
