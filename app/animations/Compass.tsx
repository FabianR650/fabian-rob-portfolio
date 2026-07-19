import React, { useEffect, useRef, useState } from 'react'
// @ts-ignore: side-effect import for styles
import './Compass.css'

export interface CompassProps {
  autoRotate?: boolean
  onDirectionChange?: (angle: number, label: string) => void
  initialAngle?: number
}

export const Compass: React.FC<CompassProps> = ({
  autoRotate = false,
  onDirectionChange,
  initialAngle = 0,
}) => {
  const needleRef = useRef<HTMLDivElement>(null)
  const [angle, setAngle] = useState(initialAngle)

  useEffect(() => {
    if (autoRotate) {
      needleRef.current?.classList.add('auto-rotate')
    } else {
      needleRef.current?.classList.remove('auto-rotate')
      needleRef.current!.style.transform = `rotate(${angle}deg)`
    }
  }, [autoRotate, angle])

  const handlePointInteraction = (angle: number, label: string) => {
    if (!autoRotate) {
      setAngle(angle)
      needleRef.current!.style.transform = `rotate(${angle}deg)`
      onDirectionChange?.(angle, label)
    }
  }

  const points = [
    { label: 'N', angle: 0 },
    { label: 'NE', angle: 45 },
    { label: 'E', angle: 90 },
    { label: 'SE', angle: 135 },
    { label: 'S', angle: 180 },
    { label: 'SW', angle: 225 },
    { label: 'W', angle: 270 },
    { label: 'NW', angle: 315 },
  ]

  return (
    <div className="compass-bg">
      <div className="compass-wrapper responsive-compass">
        <div className="compass">
          <div className="compass-ring"></div>

          {/* Tick marks */}
          {[...Array(32)].map((_, i) => (
            <div key={i} className="tick" style={{ transform: `rotate(${i * 11.25}deg)` }} />
          ))}

          {/* Centered needle */}
          <div ref={needleRef} className="compass-needle">
            <div className="needle-tip top"></div>
            <div className="needle-tip bottom"></div>
          </div>

          {/* Points */}
          {points.map(p => (
            <button
              key={p.label}
              className="compass-point"
              data-angle={p.angle}
              onMouseEnter={() => handlePointInteraction(p.angle, p.label)}
              onClick={() => handlePointInteraction(p.angle, p.label)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
