import { Suspense } from "react"
import Hero from "@/components/hero"
import VolunteerForm from "@/components/volunteer-form"
import ImpactStories from "@/components/impact-stories"
import PetAdoptionCarousel from "@/components/pet-adoption-carousel"
import CityMap from "@/components/city-map"
import PawPoints from "@/components/paw-points"
import PetCareTip from "@/components/pet-care-tip"
import Credits from "@/components/credits"
import PawBuddyChatbot from "@/components/paw-buddy-chatbot"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Toaster />
      <Hero />

      <div className="container mx-auto px-4 py-12 space-y-24">
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading volunteer form...</div>}>
          <section id="volunteer" className="scroll-mt-20">
            <VolunteerForm />
          </section>
        </Suspense>

        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading impact stories...</div>}>
          <section id="stories" className="scroll-mt-20">
            <ImpactStories />
          </section>
        </Suspense>

        <Suspense
          fallback={<div className="h-96 flex items-center justify-center">Loading pet adoption carousel...</div>}
        >
          <section id="adoption" className="scroll-mt-20">
            <PetAdoptionCarousel />
          </section>
        </Suspense>

        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading city map...</div>}>
          <section id="map" className="scroll-mt-20">
            <CityMap />
          </section>
        </Suspense>

        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading paw points...</div>}>
          <section id="pawpoints" className="scroll-mt-20">
            <PawPoints />
          </section>
        </Suspense>

        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading pet care tip...</div>}>
          <PetCareTip />
        </Suspense>

        <Credits />
      </div>

      <PawBuddyChatbot />
    </main>
  )
}
