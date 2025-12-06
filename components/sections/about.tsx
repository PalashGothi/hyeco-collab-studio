"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation, CheckCircle2 } from "lucide-react"

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-400 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            About Us
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Where <span className="text-gradient-accent">Creativity</span> finds its home.
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            We created Hyeco as a vibrant creative space where artists, creators, and innovators can come together to express their unique voices and share their creative vibes with the world.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "Professional-grade equipment and facilities",
                                "Flexible booking and affordable rates",
                                "Expert support and guidance",
                                "Community of like-minded creators"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                    <span className="text-foreground/80">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Visit Our Studio</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        No 73, 3rd Floor, Bineeta Plaza<br />
                                        Near Shubh Enclave, Harlur Main Road<br />
                                        Bengaluru – 560102
                                    </p>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Hyeco+Collab+Studio+Bengaluru"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors hover:underline"
                                    >
                                        <Navigation className="w-4 h-4" />
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map / Visuals */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4083444776796!2d77.663646375076!3d12.91312328739362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae138079052a5d%3A0x375064f42feada24!2sHyeco%20-%20Hye%20Collab%20Studio!5e0!3m2!1sen!2sin!4v1724425822000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(85%)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="opacity-80 hover:opacity-100 transition-opacity duration-500"
                        />

                        {/* Directions Button Overlay */}
                        <div className="absolute bottom-6 right-6 z-20">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Hyeco+Collab+Studio+Bengaluru"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:scale-105 transition-transform shadow-lg shadow-black/20"
                            >
                                <Navigation className="w-4 h-4 fill-current" />
                                Get Directions
                            </a>
                        </div>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
