"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export default function Contact() {
  const handleInstagram = () => {
    window.open("https://www.instagram.com/hyecostudio/", "_blank")
  }

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/company/hye-co/", "_blank")
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/917795698001", "_blank") // Replace with your WhatsApp number
  }

  const handleCallNow = () => {
    window.location.href = "tel:+917795698001" // Replace with your phone number
  }

  // Minimum height for consistent card content height
  const cardContentClass = "flex flex-col justify-between min-h-[180px]" 

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
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
              <CardContent className={cardContentClass}>
                <p className="text-gray-600 mb-4 break-words text-sm">info.hyeco@signitive.co.in</p>
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
              <CardContent className={cardContentClass}>
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
              <CardContent className={cardContentClass}>
                <p className="text-gray-600 mb-4">Hyeco- Hye Collab Studio</p>
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

          {/* WhatsApp */}
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
                  className="mx-auto w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center mb-4"
                >
                  <FaWhatsapp className="text-white" size={24} />
                </motion.div>
                <CardTitle className="text-lg">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className={cardContentClass}>
                <p className="text-gray-600 mb-4">Chat with us</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 hover:text-white transition-all duration-300"
                    onClick={handleWhatsApp}
                  >
                    Message Now
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call Now */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mb-4"
                >
                  <Phone className="text-white" size={24} />
                </motion.div>
                <CardTitle className="text-lg">Call Now</CardTitle>
              </CardHeader>
              <CardContent className={cardContentClass}>
                <p className="text-gray-600 mb-4">Reach us by phone</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-700 hover:text-white transition-all duration-300"
                    onClick={handleCallNow}
                  >
                    Call Now
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
