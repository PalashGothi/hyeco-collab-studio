"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const heroImages = [
  { url: "/IMG_5709.jpeg", alt: "Modern Music Studio" },
  { url: "/IMG_5669.jpeg", alt: "Creative Workspace" },
  { url: "/IMG_5673.jpeg", alt: "Podcast Studio" },
  { url: "/DWS06662.jpg", alt: "Event Space" },
  { url: "/IMG_5675.jpeg", alt: "Workshop Room" },
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % heroImages.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImage].url}
              alt={heroImages[currentImage].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slideshow Controls */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentImage ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Headings */}
        <div className="font-extrabold text-5xl sm:text-6xl leading-snug">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="block pb-1 bg-gradient-to-r from-pink-500 via-orange-400 via-yellow-300 to-purple-500 bg-clip-text text-transparent"
          >
            Born to Create.
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="block pb-1 bg-gradient-to-r from-pink-500 via-orange-400 via-yellow-300 to-purple-500 bg-clip-text text-transparent"
          >
            Now’s your moment.
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="block pb-1 bg-gradient-to-r from-pink-500 via-orange-400 via-yellow-300 to-purple-500 bg-clip-text text-transparent"
          >
            The stage is set.
          </motion.span>
        </div>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-lg sm:text-xl mt-8 max-w-3xl mx-auto leading-relaxed 
                     bg-gradient-to-r from-pink-500 via-orange-400 via-yellow-300 to-purple-500 
                     bg-clip-text text-transparent font-medium pb-1"
        >
          We believe that everyone has a voice to express and a vibe to share.
          Hence, we created a platform to help you find your real voice and innovative vibes.
        </motion.p>

        {/* Single CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="flex justify-center items-center mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              <Link href="#facilities">Explore Our Facilities</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="animate-bounce"
        >
          <ArrowDown className="mx-auto text-white/70" size={32} />
        </motion.div>
      </div>
    </section>
  )
}
