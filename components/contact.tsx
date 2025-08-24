"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { FaInstagram, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa"

export default function Contact() {
  // ✅ Universal opener: works for desktop & mobile with fallback
  const openLink = (url: string) => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        // Mobile → try direct app open
        const now = Date.now()
        window.location.href = url

        // Fallback after 2 sec → open in new tab if no app handled it
        setTimeout(() => {
          if (Date.now() - now < 1500) {
            window.open(url, "_blank")
          }
        }, 1500)
      } else {
        // Desktop → always new tab
        window.open(url, "_blank")
      }
    }
  }

  // Handlers
  const handleInstagram = () => openLink("https://www.instagram.com/hyecostudio/")
  const handleLinkedIn = () => openLink("https://www.linkedin.com/company/hye-co/")
  const handleWhatsApp = () => openLink("https://wa.me/917795698001")
  const handleFacebook = () => openLink("https://www.facebook.com/share/18uWDEHy94/?mibextid=wwXIfr")
  const handleCallNow = () => (window.location.href = "tel:+917795698001")
  const handleEmail = () => (window.location.href = "mailto:info.hyeco@signitive.co.in")

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Email */}
          <motion.div whileHover={{ y: -5 }}>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <CardTitle className="text-lg">Email Us</CardTitle>
              </CardHeader>
              <CardContent className={cardContentClass}>
                <p className="text-gray-600 mb-4 text-sm break-words">info.hyeco@signitive.co.in</p>
                <Button
                  onClick={handleEmail}
                  variant="outline"
                  className="w-full hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-white"
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Instagram */}
          <motion.div whileHover={{ y: -5 }}>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                  <FaInstagram className="text-white" size={24} />
                </div>
                <CardTitle className="text-lg">Instagram</CardTitle>
              </CardHeader>
              <CardContent className={cardContentClass}>
                <p className="text-gray-600 mb-4">@hyecocollab</p>
                <Button
                  onClick={handleInstagram}
                  variant="outline"
                  className="w-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white"
                >
                  Follow Us
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* LinkedIn */}
          <motion.div whileHover={{ y: -5 }}>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <FaLinkedin className="text-white" size={24} />
                </div>
                <CardTitle className="text-lg">LinkedIn</CardTitle>
              </CardHeader>
              <CardContent className={cardContentClass}>
                <p className="text-gray-600 mb-4">Hyeco- Hye Collab Studio</p>
                <Button
                  onClick={handleLinkedIn}
                  variant="outline"
                  className="w-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white"
                >
                  Connect
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* WhatsApp */}
          <motion.div whileHover={{ y: -5 }}>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center mb-4">
                  <FaWhatsapp className="text-white" size={24} />
                </div>
                <CardTitle className="text-lg">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className={cardContentClass}>
                <p className="text-gray-600 mb-4">Chat with us</p>
                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="w-full hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 hover:text-white"
                >
                  Message Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call */}
          <motion.div whileHover={{ y: -5 }}>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <CardTitle className="text-lg">Call Now</CardTitle>
              </CardHeader>
              <CardContent className={cardContentClass}>
                <p className="text-gray-600 mb-4">Reach us by phone</p>
                <Button
                  onClick={handleCallNow}
                  variant="outline"
                  className="w-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-700 hover:text-white"
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Facebook */}
          <motion.div whileHover={{ y: -5 }}>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-4">
                  <FaFacebook className="text-white" size={24} />
                </div>
                <CardTitle className="text-lg">Facebook</CardTitle>
              </CardHeader>
              <CardContent className={cardContentClass}>
                <p className="text-gray-600 mb-4">Follow us on Facebook</p>
                <Button
                  onClick={handleFacebook}
                  variant="outline"
                  className="w-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white"
                >
                  Visit Page
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
