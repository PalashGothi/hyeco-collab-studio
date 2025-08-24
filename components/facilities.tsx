"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Users, Calendar, Coffee } from "lucide-react"
import { motion } from "framer-motion"

const facilities = [
  {
    id: "jupiter",
    title: "Multipurpose Room - Jupiter",
    description: "Versatile space perfect for events, workshops, jamming, classes, photoshoots and movie screening.",
    icon: Music,
    gradient: "from-yellow-400 to-orange-500",
    features: [
      "Professional Audio Equipment",
      "Soundproof and Acoustic Environment",
      "Audio and Video Capabilities",
      "Flexible Seating and Advanced Lighting",
    ],
    available: true,
  },
  {
    id: "venus",
    title: "Multipurpose Room - Venus",
    description: "Versatile space perfect for music recording, jamming sessions and podcasts.",
    icon: Users,
    gradient: "from-orange-500 to-pink-500",
    features: ["Podcast Setup", "Audio and Video Capabilities", "Instruments", "Soundproof and Acoustic Environment"],
    available: true,
  },
  {
    id: "saturn",
    title: "Multipurpose Room",
    description: "An expanded space for events and productions.",
    icon: Calendar,
    gradient: "from-pink-500 to-purple-600",
    features: ["Soundproof and Acoustic Environment", "Advanced Lighting", "Professional Audio Equipment", "Audio and Video Capabilities"],
    available: false,
  },
  {
    id: "cafe",
    title: "Café",
    description: "A cozy space to relax, network, and fuel your creativity.",
    icon: Coffee,
    gradient: "from-purple-600 to-indigo-600",
    features: ["Fresh Coffee & Snacks", "Networking Space", "Comfortable Seating", "Creative Atmosphere"],
    available: false,
  },
]

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Our Facilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to bring your creative vision to life, all under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon
            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden h-full relative">
                  {!facility.available && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <div className={`h-2 bg-gradient-to-r ${facility.gradient}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`p-3 rounded-lg bg-gradient-to-r ${facility.gradient} text-white`}
                      >
                        <IconComponent size={24} />
                      </motion.div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-800">{facility.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 text-lg mt-2">{facility.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {facility.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center text-gray-700"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${facility.gradient} mr-3`}></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
