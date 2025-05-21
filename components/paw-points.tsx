"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge as UIBadge } from "@/components/ui/badge"
import { Flame, Award, Star, Calendar, Clock, PawPrint } from "lucide-react"
import { cn } from "@/lib/utils"

interface BadgeProps {
  id: number
  name: string
  description: string
  icon: React.ReactNode
  earned: boolean
  progress: number
}

const badges: BadgeProps[] = [
  {
    id: 1,
    name: "First Steps",
    description: "Completed your first volunteer session",
    icon: <PawPrint className="h-6 w-6" />,
    earned: true,
    progress: 100,
  },
  {
    id: 2,
    name: "Feeding Hero",
    description: "Fed 50+ street animals",
    icon: <Award className="h-6 w-6" />,
    earned: true,
    progress: 100,
  },
  {
    id: 3,
    name: "Community Builder",
    description: "Recruited 5 new volunteers",
    icon: <Star className="h-6 w-6" />,
    earned: false,
    progress: 60,
  },
  {
    id: 4,
    name: "Shelter Helper",
    description: "Volunteered at 3 different shelters",
    icon: <Calendar className="h-6 w-6" />,
    earned: false,
    progress: 33,
  },
  {
    id: 5,
    name: "Dedication",
    description: "Volunteered for 30 days straight",
    icon: <Flame className="h-6 w-6" />,
    earned: false,
    progress: 70,
  },
  {
    id: 6,
    name: "Time Giver",
    description: "Contributed 100+ hours of volunteer time",
    icon: <Clock className="h-6 w-6" />,
    earned: false,
    progress: 45,
  },
]

export default function PawPoints() {
  const [activeTab, setActiveTab] = useState<"badges" | "stats">("badges")

  const earnedBadges = badges.filter((badge) => badge.earned)
  const inProgressBadges = badges.filter((badge) => !badge.earned)

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">PawPoints Gamification</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Track your impact and earn badges as you contribute to our pet-friendly city mission.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="border-amber-200 dark:border-amber-800 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
              <CardTitle className="text-center">Volunteer Profile</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mb-4">
                  <PawPrint className="h-12 w-12 text-amber-600 dark:text-amber-400" />
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Jane Pawsome</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Dedicated Pet Advocate</p>

                <div className="w-full space-y-4 mt-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Level 3: Pet Champion
                      </span>
                      <span className="text-sm font-medium text-amber-600 dark:text-amber-400">70%</span>
                    </div>
                    <Progress
                      value={70}
                      className="h-2 bg-amber-100 dark:bg-amber-900/50"
                      indicatorClassName="bg-amber-600 dark:bg-amber-400"
                    />
                  </div>

                  <div className="flex justify-between items-center p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <div className="flex items-center">
                      <Flame className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                      <span className="text-gray-800 dark:text-white font-medium">Current Streak</span>
                    </div>
                    <UIBadge className="bg-amber-600">5 Days</UIBadge>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                      <span className="text-gray-800 dark:text-white font-medium">Hours Contributed</span>
                    </div>
                    <UIBadge className="bg-amber-600">45 Hours</UIBadge>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <div className="flex items-center">
                      <PawPrint className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                      <span className="text-gray-800 dark:text-white font-medium">Pets Helped</span>
                    </div>
                    <UIBadge className="bg-amber-600">78 Pets</UIBadge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="border-amber-200 dark:border-amber-800 h-full">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Level Up Your Kindness</CardTitle>
                <div className="flex space-x-2">
                  <UIBadge
                    className={cn(
                      "cursor-pointer",
                      activeTab === "badges"
                        ? "bg-amber-600 hover:bg-amber-700"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
                    )}
                    onClick={() => setActiveTab("badges")}
                  >
                    Badges
                  </UIBadge>
                  <UIBadge
                    className={cn(
                      "cursor-pointer",
                      activeTab === "stats"
                        ? "bg-amber-600 hover:bg-amber-700"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
                    )}
                    onClick={() => setActiveTab("stats")}
                  >
                    Stats
                  </UIBadge>
                </div>
              </div>
              <CardDescription>
                Earn badges and track your progress as you help create a pet-friendly city
              </CardDescription>
            </CardHeader>
            <CardContent>
              {activeTab === "badges" ? (
                <div className="space-y-6">
                  {earnedBadges.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Earned Badges</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {earnedBadges.map((badge) => (
                          <div
                            key={badge.id}
                            className="flex items-center p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800"
                          >
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center mr-3">
                              {badge.icon}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800 dark:text-white">{badge.name}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">{badge.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Badges In Progress</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {inProgressBadges.map((badge) => (
                        <div
                          key={badge.id}
                          className="flex items-start p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700"
                        >
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 flex items-center justify-center mr-3">
                            {badge.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800 dark:text-white">{badge.name}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{badge.description}</p>
                            <div className="w-full">
                              <div className="flex justify-between mb-1">
                                <span className="text-xs text-gray-600 dark:text-gray-400">Progress</span>
                                <span className="text-xs text-amber-600 dark:text-amber-400">{badge.progress}%</span>
                              </div>
                              <Progress
                                value={badge.progress}
                                className="h-1.5 bg-gray-200 dark:bg-gray-700"
                                indicatorClassName="bg-amber-600 dark:bg-amber-400"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card className="border-amber-200 dark:border-amber-800">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Weekly Activity</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-end h-32">
                          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                            <div key={day} className="flex flex-col items-center">
                              <div
                                className="w-6 bg-amber-600 dark:bg-amber-500 rounded-t-sm"
                                style={{
                                  height: `${[30, 45, 60, 80, 50, 70, 20][i]}%`,
                                  opacity: i === 3 ? 1 : 0.7,
                                }}
                              />
                              <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">{day}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-amber-200 dark:border-amber-800">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Impact Summary</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600 dark:text-gray-300">Pets Fed</span>
                            <span className="text-sm font-medium text-amber-600 dark:text-amber-400">78/100</span>
                          </div>
                          <Progress value={78} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600 dark:text-gray-300">Volunteer Hours</span>
                            <span className="text-sm font-medium text-amber-600 dark:text-amber-400">45/100</span>
                          </div>
                          <Progress value={45} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600 dark:text-gray-300">New Volunteers</span>
                            <span className="text-sm font-medium text-amber-600 dark:text-amber-400">3/5</span>
                          </div>
                          <Progress value={60} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-amber-200 dark:border-amber-800">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Achievement Timeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center mr-3">
                            <PawPrint className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800 dark:text-white">First Steps Badge Earned</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">2 weeks ago</p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center mr-3">
                            <Award className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800 dark:text-white">Feeding Hero Badge Earned</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">1 week ago</p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 flex items-center justify-center mr-3">
                            <Star className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800 dark:text-white">Community Builder Badge (60%)</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">In progress</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
