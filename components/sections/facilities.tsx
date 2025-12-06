"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Music, Users, Calendar, Coffee, Mic, Video, Speaker } from "lucide-react"

const facilities = [
    {
        id: "jupiter",
        title: "Jupiter",
        subtitle: "Multipurpose Space",
        description: "Versatile space perfect for events, workshops, jamming, classes, photoshoots and movie screening.",
        icon: Music,
        gradient: "from-yellow-400 to-orange-500",
        features: ["Pro Audio Equipment", "Acoustic Treatment", "Dynamic Lighting", "Flexible Seating"],
        available: true,
    },
    {
        id: "venus",
        title: "Venus",
        subtitle: "Recording & Jamming",
        description: "Versatile space perfect for music recording, jamming sessions and podcasts.",
        icon: Mic,
        gradient: "from-orange-500 to-pink-500",
        features: ["Podcast Setup", "Video Integration", "Instruments Included", "Soundproof"],
        available: true,
    },
    {
        id: "mars",
        title: "Mars",
        subtitle: "Production Floor",
        description: "An expanded space for events and productions.",
        icon: Calendar,
        gradient: "from-pink-500 to-purple-600",
        features: ["Event Management", "Stage Setup", "Live Streaming", "Green Room"],
        available: false,
    },
    {
        id: "cafe",
        title: "The Café",
        subtitle: "Social Hub",
        description: "A cozy space to relax, network, and fuel your creativity.",
        icon: Coffee,
        gradient: "from-purple-600 to-indigo-600",
        features: ["Specialty Coffee", "Networking", "Co-working Spots", "Relaxed Vibe"],
        available: false,
    },
]

export default function Facilities() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    return (
        <section id="facilities" className="py-32 relative overflow-hidden bg-background">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-6 relative z-10" ref={ref}>
                <div className="text-center mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-muted-foreground"
                    >
                        Our Spaces
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        Create in <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Harmony</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        From professional recording studios to relaxed social hubs, we have the perfect environment for every creative need.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {facilities.map((space, index) => {
                        const Icon = space.icon
                        return (
                            <motion.div
                                key={space.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 rounded-3xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="glass-card h-full p-8 md:p-10 relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                                    {/* Decorative Gradient Line */}
                                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${space.gradient} opacity-50`} />

                                    {!space.available && (
                                        <div className="absolute top-6 right-6">
                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-muted-foreground border border-white/10">Coming Soon</span>
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${space.gradient} flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-500`}>
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{space.title}</h3>
                                            <p className="text-sm font-medium text-muted-foreground/80 uppercase tracking-wider">{space.subtitle}</p>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed mb-8 border-b border-white/5 pb-8 min-h-[80px]">
                                        {space.description}
                                    </p>

                                    <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                                        {space.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground/80">
                                                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${space.gradient}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
