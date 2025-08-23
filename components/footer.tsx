"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              {/* Replace H with Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 flex items-center justify-center"
              >
                <Image
                  src="/Hyeco Logo-02.png" // <-- replace with your logo file in public/
                  alt="Hyeco- Hye Collab Studio Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </motion.div>
              <span className="text-xl font-bold">Hyeco- Hye Collab Studio</span>
            </div>
            <p className="text-gray-300 mb-4 text-lg font-medium">Have Your Expression</p>
            <p className="text-gray-400 max-w-md">
              A vibrant creative space in Bengaluru where artists, creators, and innovators come together to express
              their unique voices.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Facilities", href: "#facilities" },
                { name: "About", href: "#about" },
                { name: "Contact", href: "#contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors hover:gradient-text"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info.hyeco@signitive.co.in</li>
              <li>+91 7795698001</li>
              <li className="text-sm">
                No 73, 3rd Floor, Bineeta Plaza
                <br />
                Near Shubh Enclave
                <br />
                Harlur Main Road
                <br />
                Bengaluru – 560102
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Signitive Collaboration LLP. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Powered by <span className="text-white">Vercel</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

