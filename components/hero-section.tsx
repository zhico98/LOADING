"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          setIsLoading(false)
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-[#c0c0c0] border-4 border-[#808080] p-8 mb-8 shadow-lg">
          <div className="bg-[#000080] text-white p-2 mb-6 flex items-center justify-between">
            <span className="font-bold">LOADINGCOIN.EXE</span>
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-[#c0c0c0] border border-black"></div>
              <div className="w-4 h-4 bg-[#c0c0c0] border border-black"></div>
              <div className="w-4 h-4 bg-red-500 border border-black"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 border-4 border-[#000080] flex items-center justify-center relative">
                <span className="text-2xl font-bold text-[#000080]">LC</span>
                {isLoading && (
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent animate-spin"></div>
                  </div>
                )}
              </div>
            </div>

            <h1 className="text-4xl font-bold text-[#000080] mb-4 pixel-text">LOADINGCOIN</h1>

            <p className="text-lg text-[#000080] mb-6">
              The most nostalgic cryptocurrency in the metaverse!
              <br />
              {"Loading your financial future... Please wait..."}
            </p>

            <div className="bg-white border-2 border-[#808080] p-4 mb-6">
              <div className="text-left text-sm mb-2">Loading LOADINGCOIN...</div>
              <div className="bg-[#c0c0c0] border-2 border-[#808080] h-6 relative">
                <div
                  className="bg-[#000080] h-full transition-all duration-200"
                  style={{ width: `${Math.min(loadingProgress, 100)}%` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                  {Math.floor(loadingProgress)}%
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button className="retro-button-primary">Buy LOADINGCOIN</Button>
              <Button variant="outline" className="retro-button bg-transparent">
                View Chart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
