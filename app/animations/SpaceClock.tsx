'use client'
import { useEffect, useState } from 'react'

export default function SpaceClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const formatted = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      setTime(formatted)
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden bg-black">
      {/* Starfield */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:18px_18px] opacity-40 animate-starsTwinkle"></div>

      {/* Nebula glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-purple-700/30 to-transparent blur-3xl"></div>

      {/* Cosmic ring */}
      <div className="absolute w-[260px] h-[260px] rounded-full border border-purple-400/40 animate-pulseSlow"></div>

      {/* Time */}
      <div className="relative px-12 text-white text-6xl font-bold tracking-widest animate-float">
        {time}
      </div>
    </div>
  )
}
