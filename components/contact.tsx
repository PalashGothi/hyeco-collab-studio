"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Contact() {
  const handleInstagram = () => {
    window.open("https://www.instagram.com/hyecostudio/", "_blank")
  }

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/company/hye-co/", "_blank")
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your creative journey? Connect with us and be part of our vibrant creative community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mx-auto w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4"
                >
                  <Mail className="text-white" size={24} />
                </motion.div>
                <CardTitle className="text-lg">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">info.hyeco@signitive.co.in</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-white transition-all duration-300"
                  >
                    <a href="mailto:info.hyeco@signitive.co.in">Send Email</a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="mx-auto w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mb-4"
                >
                  <FaInstagram className="text-white" size={24} />
                </motion.div>
                <CardTitle className="text-lg">Instagram</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">@hyecocollab</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white transition-all duration-300"
                    onClick={handleInstagram}
                  >
                    Follow Us
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mx-auto w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4"
                >
                  <FaLinkedin className="text-white" size={24} />
                </motion.div>
                <CardTitle className="text-lg">LinkedIn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Hyeco Collab Studio</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                    onClick={handleLinkedIn}
                  >
                    Connect
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="mx-auto w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mb-4"
                >
                  <MapPin className="text-white" size={24} />
                </motion.div>
                <CardTitle className="text-lg">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm">Harlur Main Road, Bengaluru</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:text-white transition-all duration-300"
                  >
                    <a href="https://g.co/kgs/JGx46Z4" target="_blank" rel="noopener noreferrer">
                      Get Directions
                    </a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
