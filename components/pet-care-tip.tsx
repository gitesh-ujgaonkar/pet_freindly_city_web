"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, RefreshCw } from "lucide-react"

const petCareTips = [
  {
    title: "Hydration Matters",
    content:
      "Always ensure your pet has access to fresh, clean water, especially during hot weather. Consider adding ice cubes to their water bowl on particularly hot days.",
  },
  {
    title: "Regular Exercise",
    content:
      "Daily exercise is crucial for your pet's physical and mental health. Even indoor cats benefit from play sessions that stimulate their hunting instincts.",
  },
  {
    title: "Dental Health",
    content:
      "Brush your pet's teeth regularly to prevent dental disease. Special pet toothpastes come in flavors they'll enjoy, making the process easier.",
  },
  {
    title: "Balanced Diet",
    content:
      "Feed your pet a balanced diet appropriate for their age, size, and health status. Consult your veterinarian about the best food options for your specific pet.",
  },
  {
    title: "Regular Check-ups",
    content:
      "Schedule regular veterinary check-ups, even if your pet seems healthy. Early detection of health issues can lead to more effective treatment.",
  },
  {
    title: "Microchipping",
    content:
      "Ensure your pet is microchipped and that the registration information is up to date. This greatly increases the chances of reunion if they ever get lost.",
  },
  {
    title: "Grooming Routine",
    content:
      "Regular grooming helps keep your pet's coat healthy and reduces shedding. It's also a good opportunity to check for any skin issues or parasites.",
  },
]

export default function PetCareTip() {
  const [currentTip, setCurrentTip] = useState(0)

  const getRandomTip = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * petCareTips.length)
    } while (newIndex === currentTip)

    setCurrentTip(newIndex)
  }

  useEffect(() => {
    // Set initial random tip
    setCurrentTip(Math.floor(Math.random() * petCareTips.length))
  }, [])

  return (
    <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center">
          <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
          <CardTitle className="text-xl">AI-Generated Pet Care Tip of the Day</CardTitle>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={getRandomTip}
          className="text-amber-600 hover:text-amber-700 hover:bg-amber-100 dark:text-amber-400 dark:hover:text-amber-300 dark:hover:bg-amber-900/30"
        >
          <RefreshCw className="h-4 w-4" />
          <span className="sr-only">New Tip</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">{petCareTips[currentTip].title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{petCareTips[currentTip].content}</p>
        </div>
      </CardContent>
    </Card>
  )
}
