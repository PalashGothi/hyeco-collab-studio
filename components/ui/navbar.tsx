"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Facilities", href: "#facilities" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ]

    const whatsappMessage = encodeURIComponent("Hi, I’d like to inquire about Hyeco.")
    const whatsappLink = `https://wa.me/917795698001?text=${whatsappMessage}`

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-[120px] h-[45px] transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src="/Hyeco Logo-02.png"
                            alt="Hyeco Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:text-gradient-accent"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="tel:+917795698001"
                        className="px-5 py-2.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-foreground flex items-center gap-2"
                    >
                        <Phone className="w-4 h-4" />
                        <span>Call</span>
                    </a>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-green-500/80 to-emerald-500/80 hover:brightness-110 text-white shadow-lg shadow-green-500/20 transition-all duration-300 flex items-center gap-2"
                    >
                        <FaWhatsapp className="w-4 h-4" />
                        <span>Book Now</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col gap-3">
                                <a
                                    href="tel:+917795698001"
                                    className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-center font-medium hover:bg-white/10"
                                >
                                    Call Us
                                </a>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 rounded-xl bg-green-500/80 text-white text-center font-medium flex items-center justify-center gap-2"
                                >
                                    <FaWhatsapp className="w-4 h-4" />
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
