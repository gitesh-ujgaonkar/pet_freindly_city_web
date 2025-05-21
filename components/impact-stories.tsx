"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PawPrint } from "lucide-react"
import Image from "next/image"

const stories = [
  {
    id: 1,
    title: "Max's Second Chance",
    description: "Abandoned during the pandemic, Max found a new home through our street feeding program.",
    image: "/placeholder.svg?height=300&width=400",
    location: "New York City",
    date: "March 2023",
  },
  {
    id: 2,
    title: "The Community Cat Project",
    description:
      "How a neighborhood came together to care for a colony of stray cats, creating a model for other communities.",
    image: "/placeholder.svg?height=300&width=400",
    location: "San Francisco",
    date: "June 2023",
  },
  {
    id: 3,
    title: "Bella's Journey Home",
    description:
      "Lost for months, Bella was reunited with her family thanks to our volunteer network and microchip program.",
    image: "/placeholder.svg?height=300&width=400",
    location: "Chicago",
    date: "October 2023",
  },
]

export default function ImpactStories() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <div className="w-full" ref={containerRef}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Impact Stories</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Real stories of how our volunteers and community are making a difference in the lives of pets across cities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="h-full overflow-hidden border-amber-200 dark:border-amber-800 hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 dark:text-white">{story.title}</CardTitle>
                <CardDescription className="flex items-center text-amber-600 dark:text-amber-400">
                  <span>{story.location}</span>
                  <span className="mx-2">•</span>
                  <span>{story.date}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{story.description}</p>
              </CardContent>
              <CardFooter className="text-sm text-gray-500 dark:text-gray-400">#PawsForACause</CardFooter>
            </Card>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: stories.length * 0.2 }}
          className="flex items-center justify-center h-full"
        >
          <Card className="h-full w-full border-dashed border-2 border-amber-300 dark:border-amber-700 bg-amber-50/50 dark:bg-amber-950/20 flex flex-col items-center justify-center p-8 text-center">
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <PawPrint className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="absolute inset-0 border-4 border-amber-200 dark:border-amber-800 rounded-full animate-spin-slow opacity-70" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">More Coming Soon</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our community is growing every day. Check back for more inspiring stories.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
