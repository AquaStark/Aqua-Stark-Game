"use client"
import Image from "next/image"
import type React from "react"

interface FishTankProps {
  children: React.ReactNode
  className?: string
  shadow?: boolean
}

export function FishTank({ children, className = "", shadow = true }: FishTankProps) {
  return (
    <div className={`relative w-full h-48 flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 z-0">
        <Image
          src="/fish/fish-tank.svg"
          alt="Fish Tank Background"
          fill
          className="object-contain opacity-50"
        />
      </div>

      <div className="absolute z-10 w-full h-full flex items-center justify-center">
        <div className="relative w-4/5 h-4/5 flex items-center justify-center">
          {shadow && (
            <div className="absolute inset-0 bg-blue-900/20 rounded-full blur-md" />
          )}
          <div className="transform scale-75 hover:scale-90 transition-all duration-500 ease-in-out">
            {children}
          </div>
        </div>
      </div>

      <Image
        src="/fish/fish-tank.svg"
        alt="Fish Tank Overlay"
        fill
        className="object-contain z-20 pointer-events-none mix-blend-overlay"
      />
    </div>
  )
}
