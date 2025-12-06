"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { Icon: Instagram, href: "https://www.instagram.com/hyecostudio" },
        { Icon: Facebook, href: "https://www.facebook.com/share/18uWDEHy94/?mibextid=wwXIfr" },
        { Icon: Twitter, href: "https://twitter.com/hyecostudio" }, // Best effort guess as specific URL wasn't found in search
        { Icon: Linkedin, href: "https://www.linkedin.com/company/hye-co/" },
    ]

    return (
        <footer className="relative bg-black/40 backdrop-blur-xl border-t border-white/10 pt-16 pb-8 overflow-hidden">
            {/* Background glow for ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-6 md:col-span-1">
                        <Link href="/" className="inline-block relative w-[140px] h-[50px] transition-opacity hover:opacity-80">
                            <Image
                                src="/Hyeco Logo-02.png"
                                alt="Hyeco Logo"
                                fill
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            A vibrant creative space in Bengaluru where artists, creators, and innovators come together to express their unique voices.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-white hover:scale-110 transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Explore</h3>
                        <ul className="space-y-4">
                            {["Home", "Facilities", "About", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold text-white mb-6">Visit Us</h3>
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        No 73, 3rd Floor, Bineeta Plaza<br />
                                        Near Shubh Enclave, Harlur Main Road<br />
                                        Bengaluru – 560102
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <a href="mailto:info.hyeco@signitive.co.in" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors">
                                    <Mail className="w-5 h-5 text-primary" />
                                    <span>info.hyeco@signitive.co.in</span>
                                </a>
                                <a href="tel:+917795698001" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors">
                                    <Phone className="w-5 h-5 text-primary" />
                                    <span>+91 7795698001</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>© {currentYear} Signitive Collaboration LLP. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
