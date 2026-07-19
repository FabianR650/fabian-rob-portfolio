'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function LaptopResume() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-xl overflow-hidden w-full min-h-[260px] sm:h-[300px] bg-gradient-to-br from-[#3b82f6]/40 to-[#9333eb]/40 flex items-center justify-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => window.open('/Resume/Fabian_Robinson_Resume.pdf', '_blank')}
    >
      <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] perspective preserve-3d">
        {/* LAPTOP COVER */}
        <div
          className={`absolute inset-0 z-20 bg-gray-800 text-white flex flex-col items-center justify-center text-lg font-bold rounded-lg cursor-pointer backface-hidden ${
            open ? 'animate-laptopOpen' : 'animate-laptopClose'
          }`}
          style={{ transformOrigin: 'bottom center' }}
        >
          <Image
            src="/assets/laptop11.png"
            alt="Laptop Cover"
            fill
            className="object-cover rounded-lg opacity-70"
          />
          <span className="absolute bottom-4 text-white font-semibold">Hover for Resume Link</span>
        </div>

        {/* INSIDE SCREEN */}
        {/* INSIDE SCREEN */}
        <div className="absolute inset-0 z-10 rounded-lg shadow-xl flex flex-col items-center justify-start backface-hidden preserve-3d">
          {/* Background image */}
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <Image
              src="/assets/laptop1.png"
              alt="Inside Background"
              fill
              className="object-cover rounded-lg opacity-70"
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 rounded-lg"></div>

          {/* Text content */}
          <div className="relative z-20 p-4 flex flex-col items-center">
            <h2
              className={`text-white text-xl sm:text-2xl font-bold mt-4 text-center overflow-hidden whitespace-nowrap ${open ? 'typed-name' : 'opacity-0'}`}
            >
              Fabian Robinson
            </h2>
            <p
              className={`text-gray-200 text-xs sm:text-sm mt-2 overflow-hidden whitespace-nowrap ${open ? 'typed-sub' : 'opacity-0'}`}
            >
              Click to open resume.
            </p>

            <style jsx>{`
              @keyframes typing {
                from {
                  width: 0;
                }
                to {
                  width: 100%;
                }
              }
              @keyframes blink {
                50% {
                  border-color: transparent;
                }
              }

              .typed-name {
                display: inline-block;
                border-right: 2px solid rgba(255, 255, 255, 0.9);
                animation:
                  typing 1.6s steps(22, end) 0.15s forwards,
                  blink 0.8s steps(1, start) 1.75s infinite;
                width: 0;
              }

              .typed-sub {
                display: inline-block;
                border-right: 2px solid rgba(255, 255, 255, 0.9);
                animation:
                  typing 1.2s steps(25, end) 1.9s forwards,
                  blink 0.8s steps(1, start) 3.2s infinite;
                width: 0;
              }

              .opacity-0 {
                opacity: 0;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  )
}
