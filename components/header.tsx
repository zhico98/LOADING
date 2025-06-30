"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  return (
    <header className="bg-[#c0c0c0] border-b-2 border-[#808080] p-2">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-[#000080] flex items-center justify-center text-xs font-bold">
              LC
            </div>
            <span className="font-bold text-[#000080]">LOADINGCOIN</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          <Button variant="outline" className="retro-button bg-transparent">
            Home
          </Button>
          <Button variant="outline" className="retro-button bg-transparent">
            About
          </Button>
          <Button variant="outline" className="retro-button bg-transparent">
            Tokenomics
          </Button>
          <Button variant="outline" className="retro-button bg-transparent">
            Roadmap
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <div className="bg-[#008080] text-white px-2 py-1 text-xs border-2 border-[#004040]">{time}</div>
          <Button className="retro-button-primary">Connect Wallet</Button>
        </div>
      </div>
    </header>
  )
}
