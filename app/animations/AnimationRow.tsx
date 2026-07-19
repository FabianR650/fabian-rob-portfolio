'use client'

import CloudScenePremium from '@/app/animations/CloudScenePremium'
import { Compass } from '@/app/animations/Compass'
import JsonAnimation from '@/app/animations/JsonAnimation'
import LaptopResume from '@/app/animations/LaptopResume'
import RocketLaunch from '@/app/animations/RocketLaunch'
import SpaceClock from '@/app/animations/SpaceClock'

export default function AnimationRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full px-4 sm:px-6 md:px-8">
      {/* Cloud Animation */}
      <div
        className="rounded-xl overflow-hidden w-full min-h-[260px] sm:h-[300px] bg-gradient-to-br from-[#3b82f6]/40 to-[#9333eb]/40 glow-medium shadow-[0_0_25px_rgba(59,130,246,0.35)]
      hover:-translate-y-2
      hover:shadow-blue-500/40
      transition-all cursor-pointer"
      >
        <LaptopResume />
      </div>

      <div
        className="rounded-xl overflow-hidden w-full min-h-[260px] sm:h-[300px] bg-black shadow-xl
      hover:-translate-y-2
      hover:shadow-blue-500/40
      transition-all"
      >
        <CloudScenePremium />
      </div>

      {/* Rocket Animation */}
      <div
        className="rounded-xl overflow-hidden w-full min-h-[260px] sm:h-[300px] bg-black shadow-xl
      hover:-translate-y-2
      hover:shadow-blue-500/40
      transition-all"
      >
        <RocketLaunch />
      </div>

      {/* Space Clock */}
      <div
        className="rounded-xl overflow-hidden w-full min-h-[260px] sm:h-[300px] bg-black shadow-xl
      hover:-translate-y-2
      hover:shadow-blue-500/40
      transition-all"
      >
        <SpaceClock />
      </div>

      <div
        className="rounded-xl overflow-hidden w-full min-h-[260px] sm:h-[300px] bg-black shadow-xl
      hover:-translate-y-2
      hover:shadow-blue-500/40
      transition-all"
      >
        <JsonAnimation />
      </div>

      <Compass
        autoRotate={false}
        onDirectionChange={(angle, label) => console.log(`Compass pointed to ${label} (${angle}°)`)}
      />
    </div>
  )
}
