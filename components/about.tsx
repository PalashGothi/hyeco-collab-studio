"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold gradient-text mb-8"
          >
            About Hyeco
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-50 via-orange-50 via-pink-50 to-purple-50 rounded-2xl p-8 mb-12"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Have Your Expression with jamming, event, workshop and podcast facility under one roof and share
              your vibes with the planet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                We created Hyeco Collab Studio as a vibrant creative space where artists, creators, and innovators can
                come together to express their unique voices and share their creative vibes with the world.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Professional-grade equipment and facilities",
                  "Flexible booking and affordable rates",
                  "Expert support and guidance",
                  "Community of like-minded creators",
                  "End to end production capabilities."
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 rounded-full gradient-bg mr-3"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Visit Us</h3>
              <div className="text-gray-600 mb-6">
                <p className="font-semibold">Hyeco- Hye Collab Studio</p>
                <p>No 73, 3rd Floor, Bineeta Plaza</p>
                <p>Near Shubh Enclave, Harlur Main Road</p>
                <p>Bengaluru – 560102</p>
              </div>

              {/* FIXED: Google Maps Embed */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4083444776796!2d77.663646375076!3d12.91312328739362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae138079052a5d%3A0x375064f42feada24!2sHyeco%20-%20Hye%20Collab%20Studio!5e0!3m2!1sen!2sin!4v1724425822000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </motion.div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://g.co/kgs/JGx46Z4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                View on Google Maps →
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

