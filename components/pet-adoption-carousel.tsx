"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"

// Update the pet data to include location (Indian cities)
const pets = [
  {
    id: 1,
    name: "Buddy",
    breed: "Golden Retriever",
    age: "2 years",
    temperament: "Friendly & Playful",
    image: "/placeholder.svg?height=400&width=300",
    type: "dog",
    location: "Delhi",
  },
  {
    id: 2,
    name: "Luna",
    breed: "Siamese",
    age: "1 year",
    temperament: "Calm & Curious",
    image: "/placeholder.svg?height=400&width=300",
    type: "cat",
    location: "Mumbai",
  },
  {
    id: 3,
    name: "Max",
    breed: "German Shepherd",
    age: "3 years",
    temperament: "Loyal & Protective",
    image: "/placeholder.svg?height=400&width=300",
    type: "dog",
    location: "Kolkata",
  },
  {
    id: 4,
    name: "Whiskers",
    breed: "Maine Coon",
    age: "4 years",
    temperament: "Independent & Affectionate",
    image: "/placeholder.svg?height=400&width=300",
    type: "cat",
    location: "Chennai",
  },
  {
    id: 5,
    name: "Charlie",
    breed: "Beagle",
    age: "1 year",
    temperament: "Energetic & Friendly",
    image: "/placeholder.svg?height=400&width=300",
    type: "dog",
    location: "Bangalore",
  },
  {
    id: 6,
    name: "Bella",
    breed: "Ragdoll",
    age: "2 years",
    temperament: "Gentle & Relaxed",
    image: "/placeholder.svg?height=400&width=300",
    type: "cat",
    location: "Hyderabad",
  },
  {
    id: 7,
    name: "Rocky",
    breed: "Labrador Retriever",
    age: "5 years",
    temperament: "Calm & Loving",
    image: "/placeholder.svg?height=400&width=300",
    type: "dog",
    location: "Nagpur",
  },
  {
    id: 8,
    name: "Oliver",
    breed: "Tabby",
    age: "6 months",
    temperament: "Playful & Mischievous",
    image: "/placeholder.svg?height=400&width=300",
    type: "cat",
    location: "Pune",
  },
  {
    id: 9,
    name: "Simba",
    breed: "Indie",
    age: "1 year",
    temperament: "Playful & Adaptable",
    image: "/placeholder.svg?height=400&width=300",
    type: "dog",
    location: "Delhi",
  },
  {
    id: 10,
    name: "Milo",
    breed: "Persian",
    age: "3 years",
    temperament: "Calm & Regal",
    image: "/placeholder.svg?height=400&width=300",
    type: "cat",
    location: "Mumbai",
  },
  {
    id: 11,
    name: "Daisy",
    breed: "Pomeranian",
    age: "2 years",
    temperament: "Energetic & Loyal",
    image: "/placeholder.svg?height=400&width=300",
    type: "dog",
    location: "Jaipur",
  },
  {
    id: 12,
    name: "Leo",
    breed: "Bengal",
    age: "1 year",
    temperament: "Active & Intelligent",
    image: "/placeholder.svg?height=400&width=300",
    type: "cat",
    location: "Ahmedabad",
  },
]

// Update the component to include location filtering
export default function PetAdoptionCarousel() {
  const [activeTypeFilter, setActiveTypeFilter] = useState<string | null>(null)
  const [activeLocationFilter, setActiveLocationFilter] = useState<string | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  // Get unique locations for filter buttons
  const locations = Array.from(new Set(pets.map((pet) => pet.location))).sort()

  // Filter pets based on both type and location
  const filteredPets = pets.filter((pet) => {
    const matchesType = activeTypeFilter ? pet.type === activeTypeFilter : true
    const matchesLocation = activeLocationFilter ? pet.location === activeLocationFilter : true
    return matchesType && matchesLocation
  })

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = direction === "left" ? -current.clientWidth / 2 : current.clientWidth / 2

      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const handleAdoptClick = (petName: string) => {
    toast({
      title: "Adoption Interest Registered",
      description: `Thank you for your interest in adopting ${petName}! We'll contact you with more information.`,
      duration: 5000,
    })
  }

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Find Your Perfect Companion
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          These adorable pets are looking for their forever homes. Browse our adoption gallery and find your new best
          friend.
        </p>

        {/* Type filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <Button
            variant={activeTypeFilter === null ? "default" : "outline"}
            className={cn(
              activeTypeFilter === null
                ? "bg-amber-600 hover:bg-amber-700"
                : "border-amber-600 text-amber-600 hover:bg-amber-100 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-950/30",
            )}
            onClick={() => setActiveTypeFilter(null)}
          >
            All Pets
          </Button>
          <Button
            variant={activeTypeFilter === "dog" ? "default" : "outline"}
            className={cn(
              activeTypeFilter === "dog"
                ? "bg-amber-600 hover:bg-amber-700"
                : "border-amber-600 text-amber-600 hover:bg-amber-100 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-950/30",
            )}
            onClick={() => setActiveTypeFilter("dog")}
          >
            Dogs
          </Button>
          <Button
            variant={activeTypeFilter === "cat" ? "default" : "outline"}
            className={cn(
              activeTypeFilter === "cat"
                ? "bg-amber-600 hover:bg-amber-700"
                : "border-amber-600 text-amber-600 hover:bg-amber-100 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-950/30",
            )}
            onClick={() => setActiveTypeFilter("cat")}
          >
            Cats
          </Button>
        </div>

        {/* Location filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Filter by City</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={activeLocationFilter === null ? "default" : "outline"}
              size="sm"
              className={cn(
                activeLocationFilter === null
                  ? "bg-green-600 hover:bg-green-700"
                  : "border-green-600 text-green-600 hover:bg-green-100 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-950/30",
              )}
              onClick={() => setActiveLocationFilter(null)}
            >
              All Cities
            </Button>
            {locations.map((location) => (
              <Button
                key={location}
                variant={activeLocationFilter === location ? "default" : "outline"}
                size="sm"
                className={cn(
                  activeLocationFilter === location
                    ? "bg-green-600 hover:bg-green-700"
                    : "border-green-600 text-green-600 hover:bg-green-100 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-950/30",
                )}
                onClick={() => setActiveLocationFilter(location)}
              >
                {location}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-amber-800"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Scroll left</span>
        </Button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredPets.length > 0 ? (
            filteredPets.map((pet) => (
              <div key={pet.id} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 snap-start">
                <Card className="h-full border-amber-200 dark:border-amber-800 overflow-hidden">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={pet.image || "/placeholder.svg"}
                      alt={pet.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <Badge className="absolute top-2 right-2 bg-amber-600 hover:bg-amber-700">
                      {pet.type === "dog" ? "Dog" : "Cat"}
                    </Badge>
                    <Badge className="absolute top-2 left-2 bg-green-600 hover:bg-green-700">{pet.location}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{pet.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {pet.age}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Breed:</span> {pet.breed}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Temperament:</span> {pet.temperament}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Location:</span> {pet.location}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                      onClick={() => handleAdoptClick(pet.name)}
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      Adopt Me
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))
          ) : (
            <div className="w-full py-12 text-center">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No pets found matching your filters. Please try different criteria.
              </p>
            </div>
          )}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-amber-800"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Scroll right</span>
        </Button>
      </div>
    </div>
  )
}
