'use client'
import Image from 'next/image'

export default function CloudScenePremium() {
  return (
    <div className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] overflow-hidden">
      {/* Base sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 to-sky-500"></div>

      {/* Animated cloud layer */}
      <Image
        src="/assets/clouds3.PNG"
        alt="Moving clouds"
        fill
        className="object-cover animate-cloudFloat opacity-80"
      />

      {/* Optional sunlight glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-yellow-300/10 mix-blend-soft-light"></div>
    </div>
  )
}
