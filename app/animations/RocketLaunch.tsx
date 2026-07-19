"use client";
import Image from "next/image";

export default function RocketLaunch() {
  return (
    <div className="relative w-full h-[360px] sm:h-[420px] md:h-[500px] overflow-hidden bg-gradient-to-b from-sky-400 to-indigo-900">
      {/* Rocket */}
      <Image
        src="/assets/rocket.webp"
        alt="Rocket blasting off"
        width={200}
        height={400}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-rocketLift w-[120px] sm:w-[160px] md:w-[200px]"
      />

      {/* Smoke trail */}
      <Image
        src="/assets/smoke.png"
        alt="Rocket smoke"
        width={400}
        height={200}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-80 animate-smokePulse w-[180px] sm:w-[260px] md:w-[400px]"
      />

      {/* Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:20px_20px] opacity-30 animate-starsTwinkle"></div>
    </div>
  );
}
