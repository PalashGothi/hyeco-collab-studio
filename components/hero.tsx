"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const heroImages = [
  { url: "/IMG_5709.jpeg", alt: "Modern music studio setup with instruments" },
  { url: "/IMG_5669.jpeg", alt: "Creative collaborative workspace with seating" },
  { url: "/IMG_5673.jpeg", alt: "Podcast recording studio with microphones" },
  { url: "/DWS06662.jpg", alt: "Event space with stage and lighting" },
  { url: "/IMG_5675.jpeg", alt: "Workshop room for training and sessions" },
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" 
      // pt-20 ensures content starts below the fixed header
    >
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
            <Image
              src={heroImages[currentImage].url}
              alt={heroImages[currentImage].alt}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slideshow Controls */}
      <button
        onClick={prevImage}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm 
                   rounded-full p-2 hover:bg-white/30 transition-all"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>

      <button
        onClick={nextImage}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm 
                   rounded-full p-2 hover:bg-white/30 transition-all"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Headings */}
        <div className="font-extrabold text-5xl sm:text-6xl leading-snug">
          {["Born to Create.", "Now’s your moment.", "The stage is set."].map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 + i * 0.4 }}
              className="block pb-1 bg-gradient-to-r from-pink-500 via-orange-400 via-yellow-300 to-purple-500 
                         bg-clip-text text-transparent"
            >
              {line}
            </motion.span>
          ))}
        </div>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-lg sm:text-xl mt-8 max-w-3xl mx-auto leading-relaxed 
                     bg-gradient-to-r from-pink-500 via-orange-400 via-yellow-300 to-purple-500 
                     bg-clip-text text-transparent font-medium"
        >
          We believe that everyone has a voice to express and a vibe to share.
          Hence, we created a platform to help you find your real voice and innovative vibes.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="flex justify-center items-center mt-10"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#facilities" passHref legacyBehavior>
              <Button
                asChild
                size="lg"
                className="gradient-bg text-white hover:opacity-90 flex items-center gap-2 w-fit"
              >
                <a>Explore Our Facilities</a>
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="animate-bounce mt-12"
        >
          <ArrowDown className="mx-auto text-white/70" size={32} />
        </motion.div>
      </div>
    </section>
  )
}
