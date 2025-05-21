"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { PawPrint } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
  const [petCount, setPetCount] = useState(500)
  const counterRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Increment pet counter animation
    counterRef.current = setInterval(() => {
      setPetCount((prev) => {
        if (prev < 650) return prev + 1
        clearInterval(counterRef.current as NodeJS.Timeout)
        return prev
      })
    }, 100)

    return () => {
      if (counterRef.current) clearInterval(counterRef.current)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          backgroundBlendMode: "overlay",
        }}
      />

      <div className="absolute top-4 right-4 flex flex-wrap gap-2 z-10">
        <Badge variant="outline" className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          Intern-Built
        </Badge>
        <Badge variant="outline" className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          CollegeTips Verified
        </Badge>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block">Paws for a Cause:</span>
            <span className="text-amber-600 dark:text-amber-400">Making Cities Fur-Ever Friendly 🐾🌇</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Join our community-driven initiative to create pet-friendly spaces in urban environments. Together, we can
            make a difference for our furry companions.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white"
              onClick={() => scrollToSection("volunteer")}
            >
              Join the Movement
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-100 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-950/30"
              onClick={() => scrollToSection("volunteer")}
            >
              Volunteer Now
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-gray-700 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-400"
              onClick={() => scrollToSection("stories")}
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center mt-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full py-3 px-6 shadow-lg max-w-xs mx-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <PawPrint className="h-6 w-6 text-amber-600 dark:text-amber-400 mr-2 animate-pulse" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">{petCount}+ Pets Helped</span>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-amber-50 to-transparent dark:from-gray-900 dark:to-transparent" />
    </div>
  )
}
