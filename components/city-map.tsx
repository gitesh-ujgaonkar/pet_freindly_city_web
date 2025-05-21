"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, PawPrint, Coffee, Home, Utensils } from "lucide-react"
import Image from "next/image"

type LocationType = "shelter" | "cafe" | "feeding" | "clinic"

interface Location {
  id: number
  name: string
  type: LocationType
  description: string
  coordinates: { x: number; y: number }
}

const locations: Location[] = [
  {
    id: 1,
    name: "Happy Paws Shelter",
    type: "shelter",
    description: "A no-kill shelter providing temporary homes for stray and abandoned pets.",
    coordinates: { x: 25, y: 30 },
  },
  {
    id: 2,
    name: "Whiskers & Wags Cafe",
    type: "cafe",
    description: "Pet-friendly cafe where you can enjoy coffee with your furry friend.",
    coordinates: { x: 45, y: 40 },
  },
  {
    id: 3,
    name: "Central Park Feeding Zone",
    type: "feeding",
    description: "Designated area for feeding stray animals, maintained by volunteers.",
    coordinates: { x: 65, y: 25 },
  },
  {
    id: 4,
    name: "Paws & Claws Veterinary Clinic",
    type: "clinic",
    description: "Affordable veterinary care for pets and strays, with volunteer opportunities.",
    coordinates: { x: 75, y: 60 },
  },
  {
    id: 5,
    name: "Furry Friends Adoption Center",
    type: "shelter",
    description: "Specializing in finding forever homes for older pets and those with special needs.",
    coordinates: { x: 35, y: 70 },
  },
  {
    id: 6,
    name: "Tail Waggers Diner",
    type: "cafe",
    description: "Restaurant with a special menu for dogs and a play area for pets.",
    coordinates: { x: 55, y: 75 },
  },
]

export default function CityMap() {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null)
  const [activeFilter, setActiveFilter] = useState<LocationType | null>(null)

  const filteredLocations = activeFilter ? locations.filter((location) => location.type === activeFilter) : locations

  const getIconForType = (type: LocationType) => {
    switch (type) {
      case "shelter":
        return <Home className="h-full w-full" />
      case "cafe":
        return <Coffee className="h-full w-full" />
      case "feeding":
        return <Utensils className="h-full w-full" />
      case "clinic":
        return <PawPrint className="h-full w-full" />
      default:
        return <MapPin className="h-full w-full" />
    }
  }

  const getColorForType = (type: LocationType) => {
    switch (type) {
      case "shelter":
        return "bg-blue-500 hover:bg-blue-600"
      case "cafe":
        return "bg-amber-600 hover:bg-amber-700"
      case "feeding":
        return "bg-green-500 hover:bg-green-600"
      case "clinic":
        return "bg-red-500 hover:bg-red-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  const getLabelForType = (type: LocationType) => {
    switch (type) {
      case "shelter":
        return "Shelters"
      case "cafe":
        return "Pet Cafes"
      case "feeding":
        return "Feeding Zones"
      case "clinic":
        return "Vet Clinics"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Pet-Friendly City Map</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          Discover pet-friendly locations throughout the city. Find shelters, cafes, feeding zones, and more.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Badge
            className={`cursor-pointer px-3 py-1 ${activeFilter === null ? "bg-gray-800 dark:bg-gray-200 dark:text-gray-800" : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"}`}
            onClick={() => setActiveFilter(null)}
          >
            All Locations
          </Badge>
          {(["shelter", "cafe", "feeding", "clinic"] as LocationType[]).map((type) => (
            <Badge
              key={type}
              className={`cursor-pointer px-3 py-1 ${activeFilter === type ? getColorForType(type) : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"}`}
              onClick={() => setActiveFilter(type)}
            >
              {getLabelForType(type)}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border-amber-200 dark:border-amber-800 overflow-hidden">
            <div className="relative w-full h-[400px] md:h-[500px] bg-gray-100 dark:bg-gray-800">
              <Image
                src="/placeholder.svg?height=500&width=800"
                alt="City Map"
                fill
                className="object-cover opacity-70"
              />

              {/* Map pins */}
              {filteredLocations.map((location) => (
                <div
                  key={location.id}
                  className={`absolute cursor-pointer transition-all duration-300 ${
                    activeLocation?.id === location.id ? "scale-125 z-10" : "scale-100 z-0"
                  }`}
                  style={{
                    left: `${location.coordinates.x}%`,
                    top: `${location.coordinates.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => setActiveLocation(location)}
                  onMouseLeave={() => setActiveLocation(null)}
                >
                  <div className={`w-8 h-8 rounded-full ${getColorForType(location.type)} text-white p-1.5 shadow-lg`}>
                    {getIconForType(location.type)}
                  </div>

                  {activeLocation?.id === location.id && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 text-sm z-20">
                      <p className="font-bold text-gray-800 dark:text-white">{location.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{location.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card className="border-amber-200 dark:border-amber-800 h-full">
            <CardHeader>
              <CardTitle>Location Directory</CardTitle>
              <CardDescription>Find pet-friendly locations throughout the city</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {filteredLocations.map((location) => (
                <div
                  key={location.id}
                  className={`p-3 rounded-lg transition-colors duration-200 ${
                    activeLocation?.id === location.id
                      ? "bg-amber-100 dark:bg-amber-900/30"
                      : "bg-gray-100 dark:bg-gray-800 hover:bg-amber-50 dark:hover:bg-amber-900/10"
                  }`}
                  onMouseEnter={() => setActiveLocation(location)}
                  onMouseLeave={() => setActiveLocation(null)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full ${getColorForType(location.type)} text-white p-1.5`}
                    >
                      {getIconForType(location.type)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">{location.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{location.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
