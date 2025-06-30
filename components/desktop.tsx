"use client"

import { useState, useEffect } from "react"

export function Desktop() {
  const [currentTime, setCurrentTime] = useState("")
  const [openWindows, setOpenWindows] = useState<string[]>([])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const openWindow = (windowId: string) => {
    if (!openWindows.includes(windowId)) {
      setOpenWindows([...openWindows, windowId])
    }
  }

  const closeWindow = (windowId: string) => {
    setOpenWindows(openWindows.filter((id) => id !== windowId))
  }

  const windowStyle = {
    position: "absolute" as const,
    backgroundColor: "#c0c0c0",
    border: "2px outset #c0c0c0",
    minWidth: "300px",
    fontFamily: "MS Sans Serif, sans-serif",
    fontSize: "11px",
  }

  const titleBarStyle = {
    backgroundColor: "#000080",
    color: "white",
    padding: "2px 4px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "11px",
    fontWeight: "bold",
  }

  const buttonStyle = {
    backgroundColor: "#c0c0c0",
    border: "1px outset #c0c0c0",
    padding: "2px 8px",
    fontSize: "11px",
    cursor: "pointer",
    fontFamily: "MS Sans Serif, sans-serif",
  }

  const iconStyle = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    cursor: "pointer",
    padding: "8px",
    color: "white",
    textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
    fontSize: "11px",
    maxWidth: "60px",
    textAlign: "center" as const,
  }

  return (
    <div
      style={{
        height: "100vh",
        background: "#008080",
        position: "relative",
        overflow: "hidden",
        fontFamily: "MS Sans Serif, sans-serif",
      }}
    >
      {/* Desktop Icons */}
      <div style={{ position: "absolute", top: "20px", left: "20px" }}>
        <div style={iconStyle} onClick={() => openWindow("loadingcoin")}>
          <div style={{ fontSize: "32px", marginBottom: "4px" }}>💰</div>
          <div>loadingcoin</div>
        </div>
        <div style={{ ...iconStyle, marginTop: "20px" }} onClick={() => openWindow("tokenomics")}>
          <div style={{ fontSize: "32px", marginBottom: "4px" }}>📊</div>
          <div>tokenomics</div>
        </div>
        <div style={{ ...iconStyle, marginTop: "20px" }} onClick={() => openWindow("roadmap")}>
          <div style={{ fontSize: "32px", marginBottom: "4px" }}>🗺️</div>
          <div>roadmap</div>
        </div>
        <div style={{ ...iconStyle, marginTop: "20px" }} onClick={() => openWindow("community")}>
          <div style={{ fontSize: "32px", marginBottom: "4px" }}>💬</div>
          <div>community</div>
        </div>
      </div>

      {/* Social Media Buttons */}
      <div style={{ position: "absolute", top: "20px", right: "20px", display: "flex", gap: "10px" }}>
        <button style={buttonStyle}>Twitter</button>
        <button style={buttonStyle}>Telegram</button>
      </div>

      {/* LOADINGCOIN Window */}
      {openWindows.includes("loadingcoin") && (
        <div style={{ ...windowStyle, top: "100px", left: "100px", zIndex: 10 }}>
          <div style={titleBarStyle}>
            <span>LOADINGCOIN.exe</span>
            <button
              style={{ ...buttonStyle, padding: "0 4px", fontSize: "12px" }}
              onClick={() => closeWindow("loadingcoin")}
            >
              ×
            </button>
          </div>
          <div style={{ padding: "16px", textAlign: "center" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>💰</div>
            <h1 style={{ margin: "0 0 8px 0", color: "#000080", fontSize: "24px" }}>LOADINGCOIN</h1>
            <p style={{ margin: "0 0 16px 0" }}>The most nostalgic meme coin on Solana!</p>
            <div
              style={{
                background: "white",
                border: "2px inset #c0c0c0",
                padding: "12px",
                margin: "16px 0",
                textAlign: "left",
                fontFamily: "Courier New, monospace",
                fontSize: "12px",
              }}
            >
              Loading your financial future...
              <br />
              Please wait while we process your dreams...
              <br />
              <span style={{ color: "green" }}>Status: READY TO MOON! 🚀</span>
            </div>
            <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
              <button style={{ ...buttonStyle, backgroundColor: "#000080", color: "white" }}>Buy Now</button>
              <button style={buttonStyle}>View Chart</button>
            </div>
          </div>
        </div>
      )}

      {/* Tokenomics Window */}
      {openWindows.includes("tokenomics") && (
        <div style={{ ...windowStyle, top: "150px", left: "150px", zIndex: 10 }}>
          <div style={titleBarStyle}>
            <span>Tokenomics</span>
            <button
              style={{ ...buttonStyle, padding: "0 4px", fontSize: "12px" }}
              onClick={() => closeWindow("tokenomics")}
            >
              ×
            </button>
          </div>
          <div style={{ padding: "16px" }}>
            <div
              style={{
                background: "white",
                border: "2px inset #c0c0c0",
                padding: "12px",
                fontFamily: "Courier New, monospace",
                fontSize: "12px",
              }}
            >
              Total Supply: 1,000,000,000 LC
              <br />
              Liquidity Pool: 90%
              <br />
              Marketing: 5%
              <br />
              Development: 5%
              <br />
              <span style={{ color: "red" }}>⚠️ LP Burned Forever!</span>
            </div>
          </div>
        </div>
      )}

      {/* Roadmap Window */}
      {openWindows.includes("roadmap") && (
        <div style={{ ...windowStyle, top: "200px", left: "200px", zIndex: 10 }}>
          <div style={titleBarStyle}>
            <span>Roadmap</span>
            <button
              style={{ ...buttonStyle, padding: "0 4px", fontSize: "12px" }}
              onClick={() => closeWindow("roadmap")}
            >
              ×
            </button>
          </div>
          <div style={{ padding: "16px" }}>
            <div
              style={{
                background: "white",
                border: "2px inset #c0c0c0",
                padding: "12px",
                fontFamily: "Courier New, monospace",
                fontSize: "12px",
              }}
            >
              ✅ Phase 1: Launch
              <br />⏳ Phase 2: Community Growth
              <br />📋 Phase 3: Exchange Listings
              <br />🎮 Phase 4: Retro Games
              <br />🌙 Phase 5: To The Moon!
            </div>
          </div>
        </div>
      )}

      {/* Community Window */}
      {openWindows.includes("community") && (
        <div style={{ ...windowStyle, top: "250px", left: "250px", zIndex: 10 }}>
          <div style={titleBarStyle}>
            <span>Community</span>
            <button
              style={{ ...buttonStyle, padding: "0 4px", fontSize: "12px" }}
              onClick={() => closeWindow("community")}
            >
              ×
            </button>
          </div>
          <div style={{ padding: "16px" }}>
            <div
              style={{
                background: "white",
                border: "2px inset #c0c0c0",
                padding: "12px",
                fontFamily: "Courier New, monospace",
                fontSize: "12px",
              }}
            >
              Join our retro community!
              <br />🐦 Twitter: @LoadingCoin
              <br />📱 Telegram: t.me/loadingcoin
              <br />💬 Discord: Coming Soon...
              <br />
              <span style={{ color: "blue" }}>Loading community... 99% complete!</span>
            </div>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "32px",
          backgroundColor: "#c0c0c0",
          borderTop: "2px outset #c0c0c0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 8px",
        }}
      >
        <button style={{ ...buttonStyle, fontWeight: "bold", minWidth: "60px" }}>Start</button>
        <div
          style={{
            backgroundColor: "#008080",
            color: "white",
            padding: "4px 8px",
            border: "1px inset #c0c0c0",
            fontSize: "12px",
          }}
        >
          {currentTime}
        </div>
      </div>
    </div>
  )
}
