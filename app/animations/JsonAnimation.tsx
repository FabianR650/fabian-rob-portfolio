'use client'

export default function JsonAnimation() {
  const letters = ['J', 'S', 'O', 'N']

  return (
    <div className="rounded-xl overflow-hidden w-full h-[300px] bg-black flex items-center justify-center shadow-lg drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">
      <div className="flex gap-10 text-white text-6xl font-bold tracking-widest relative">
        {letters.map((letter, i) => (
          <div key={i} className="relative animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
            {/* Letter */}
            <span>{letter}</span>

            {/* Orbiting planet */}
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-purple-400 rounded-full animate-orbit">
              <div className="w-full h-full bg-purple-300 rounded-full animate-planetPulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
