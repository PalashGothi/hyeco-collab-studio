"use client"

import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Let's <span className="text-gradient-accent">Talk</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind? Want to book a studio? Reach out to us.
                    </p>
                </div>

                {/* Contact Info Grid - Centered & Balanced */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto"
                >
                    <a href="mailto:info.hyeco@signitive.co.in" className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group w-full md:w-auto min-w-[300px]">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="font-medium text-foreground">info.hyeco@signitive.co.in</p>
                        </div>
                    </a>

                    <a href="tel:+917795698001" className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group w-full md:w-auto min-w-[300px]">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Phone className="w-6 h-6 text-green-400" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-muted-foreground">Phone</p>
                            <p className="font-medium text-foreground">+91 7795698001</p>
                        </div>
                    </a>
                </motion.div>

            </div>
        </section>
    )
}
