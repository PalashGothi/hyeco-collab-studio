"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Facilities", href: "#facilities" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  const phoneNumber = "917795698001"

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank")
  }

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, "_self")
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo + Intro Text */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src="/Hyeco Logo-02.png"
                alt="Hyeco Collab Studio Logo"
                width={90}
                height={90}
                priority
              />
              <p className="text-sm font-medium text-gradient mt-1">
                Have Your Expression
              </p>
              <p className="text-xs text-gray-600 mt-1">
                A venture of Signitive Collaboration LLP
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}

            {/* Call Now Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                onClick={handleCall}
                className="gradient-bg text-white hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Phone size={18} />
                Call
              </Button>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                onClick={handleWhatsApp}
                className="gradient-bg text-white hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <FaWhatsapp size={18} />
               Book on WhatsApp 
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Call Button in Mobile */}
              <Button
                onClick={handleCall}
                className="gradient-bg text-white hover:opacity-90 flex items-center gap-2 w-fit"
              >
                <Phone size={18} />
                Call Now
              </Button>

              {/* WhatsApp Button in Mobile */}
              <Button
                onClick={handleWhatsApp}
                className="gradient-bg text-white hover:opacity-90 flex items-center gap-2 w-fit"
              >
                <FaWhatsapp size={18} />
                WhatsApp Now
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
