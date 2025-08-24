"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"
import { HiMenu, HiX } from "react-icons/hi"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Tagline */}
        <div className="flex items-center space-x-3">
          <Image
            src="/Hyeco Logo-02.png"
            alt="Hyeco Logo"
            width={110}
            height={40}
            className="object-contain"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-black">
              Have Your Expression
            </span>
            <span className="text-xs text-black">
              A venture of Signitive Collaboration LLP
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-black">
          <Link href="#home" className="hover:text-pink-500 transition">
            Home
          </Link>
          <Link href="#facilities" className="hover:text-pink-500 transition">
            Facilities
          </Link>
          <Link href="#about" className="hover:text-pink-500 transition">
            About
          </Link>
          <Link href="#contact" className="hover:text-pink-500 transition">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="tel:+917795698001"
            className="flex items-center px-4 py-2 rounded-xl text-white text-sm font-medium 
            bg-gradient-to-r from-orange-400 to-pink-500 hover:opacity-90 transition"
          >
            <FaPhoneAlt className="w-4 h-4 mr-2" /> Call
          </a>
          <a
            href="https://wa.me/917795698001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 rounded-xl text-white text-sm font-medium 
            bg-gradient-to-r from-green-400 to-teal-500 hover:opacity-90 transition"
          >
            <FaWhatsapp className="w-4 h-4 mr-2" /> Book on WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <nav className="flex flex-col items-start px-6 py-4 space-y-4 text-black">
            <Link href="#home" className="hover:text-pink-500 transition">
              Home
            </Link>
            <Link href="#facilities" className="hover:text-pink-500 transition">
              Facilities
            </Link>
            <Link href="#about" className="hover:text-pink-500 transition">
              About
            </Link>
            <Link href="#contact" className="hover:text-pink-500 transition">
              Contact
            </Link>
            <a
              href="tel:+917795698001"
              className="flex items-center px-4 py-2 w-full justify-center rounded-xl text-white 
              bg-gradient-to-r from-orange-400 to-pink-500 hover:opacity-90 transition"
            >
              <FaPhoneAlt className="w-4 h-4 mr-2" /> Call
            </a>
            <a
              href="https://wa.me/917795698001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 w-full justify-center rounded-xl text-white 
              bg-gradient-to-r from-green-400 to-teal-500 hover:opacity-90 transition"
            >
              <FaWhatsapp className="w-4 h-4 mr-2" /> Book on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
