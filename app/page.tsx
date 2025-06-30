"use client"

import { useState, useEffect } from "react"

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState("")
  const [openWindows, setOpenWindows] = useState<string[]>(["hottokens", "launchpads", "chat"])
  const [showPopup, setShowPopup] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    "[1:32:19 PM] $HH: $$$$",
    "[3:32:21 PM] $HH: d",
    "[4:13:40 PM] zhico: sup",
    "[4:13:44 PM] zhico: first msg public",
    "[4:14:17 PM] $1: $$$",
    "[4:16:01 PM] zhico: x",
    "[4:18:27 PM] slace: hello wrold",
    "[4:19:01 PM] slace: how do i launch a token lol",
    "[4:19:31 PM] zhico: chat is actually working nice",
    "[4:19:37 PM] zhico: i was curious",
    "[4:19:55 PM] zhico: im working on a seperate page for the token creation",
    "[4:24:13 PM] teltest: mobile ui sucks lol i gotta fix that",
    "[4:42:17 PM] ui: gotta fix the mobile ui",
  ])
  const [newMessage, setNewMessage] = useState("")
  const [tickerSearch, setTickerSearch] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const hotTokens = [
    { name: "$GOD", price: "03:28:55", change: "+2", address: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU" },
    { name: "$Glonk", price: "22:25:52", change: "+1", address: "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM" },
    { name: "$HETTO", price: "03:30:46", change: "+2", address: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R" },
    { name: "$a", price: "03:30:51", change: "+1", address: "2b7GQr7UT1SWiLQUWY3leMyUrQCh6QcaFaFvGBVkiJKk" },
    { name: "$a", price: "03:30:53", change: "+1", address: "8dRTvnjBLFsiqBfTtvmSTNEBEDvMurkmxtPnPfayGuZT" },
    { name: "$a", price: "03:30:54", change: "+1", address: "5KKsLVU6TcbVDK4BS6K1DGDxnh4Q57JMqKdYiHGYsEHM" },
  ]

  const launchpadTokens = [
    { name: "Pump.fun", icon: "P", url: "https://pump.fun" },
    { name: "Raydium", icon: "R", url: "https://raydium.io" },
    { name: "Jupiter", icon: "J", url: "https://jup.ag" },
    { name: "Orca", icon: "O", url: "https://orca.so" },
    { name: "Moonshot", icon: "M", url: "https://moonshot.cc" },
    { name: "Meteora", icon: "Mt", url: "https://meteora.ag" },
    { name: "DexScreener", icon: "D", url: "https://dexscreener.com" },
    { name: "Birdeye", icon: "B", url: "https://birdeye.so" },
    { name: "Solscan", icon: "S", url: "https://solscan.io" },
  ]

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const closeWindow = (windowId: string) => {
    setOpenWindows(openWindows.filter((id) => id !== windowId))
  }

  const sendMessage = () => {
    if (newMessage.trim()) {
      const now = new Date()
      const timeStr = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
      setChatMessages([...chatMessages, `[${timeStr} PM] user: ${newMessage}`])
      setNewMessage("")
    }
  }

  const searchPumpFun = async () => {
    if (!tickerSearch.trim()) return

    setIsSearching(true)

    setTimeout(() => {
      const mockResults = [
        {
          name: tickerSearch.toUpperCase(),
          symbol: tickerSearch.toUpperCase(),
          price:
            "$0.00" +
            Math.floor(Math.random() * 999)
              .toString()
              .padStart(3, "0"),
          marketCap: "$" + Math.floor(Math.random() * 1000000).toLocaleString(),
          volume24h: "$" + Math.floor(Math.random() * 100000).toLocaleString(),
          change24h: (Math.random() > 0.5 ? "+" : "-") + (Math.random() * 50).toFixed(2) + "%",
          address: "0x" + Math.random().toString(16).substr(2, 40),
        },
      ]

      setSearchResults(mockResults)
      setIsSearching(false)
    }, 1000)
  }

  const addToken = () => {
    if (searchResults.length > 0) {
      const token = searchResults[0]
      console.log("Adding token:", token)
      alert(`Token ${token.symbol} added to tracking!`)
    } else {
      searchPumpFun()
    }
  }

  const openPlatform = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const copyToClipboard = (address: string) => {
    navigator.clipboard
      .writeText(address)
      .then(() => {
        alert("Address copied to clipboard!")
      })
      .catch(() => {
        alert("Failed to copy address")
      })
  }

  const openTwitter = () => {
    window.open("https://x.com/loadingcoinfun", "_blank", "noopener,noreferrer")
  }

  const openTelegram = () => {
    window.open("https://t.me/loadingfun", "_blank", "noopener,noreferrer")
  }

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "MS Sans Serif, sans-serif",
        fontSize: "11px",
      }}
    >
      {/* Popup Ad */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#c0c0c0",
              border: "2px outset #c0c0c0",
              width: "400px",
              fontFamily: "MS Sans Serif, sans-serif",
              fontSize: "11px",
            }}
          >
            <div
              style={{
                backgroundColor: "#000080",
                color: "white",
                padding: "2px 4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "11px",
                fontWeight: "bold",
              }}
            >
              <span>Special Offer!</span>
              <button
                style={{
                  backgroundColor: "#c0c0c0",
                  border: "1px outset #c0c0c0",
                  padding: "0 6px",
                  fontSize: "12px",
                  cursor: "pointer",
                  color: "black",
                }}
                onClick={() => setShowPopup(false)}
              >
                X
              </button>
            </div>
            <div style={{ padding: "16px", textAlign: "center" }}>
              <h2 style={{ margin: "0 0 12px 0", color: "#000080", fontSize: "16px" }}>EXCLUSIVE TOKEN LAUNCH</h2>
              <p style={{ margin: "0 0 12px 0", fontSize: "12px" }}>
                Get early access to the hottest new tokens before they moon!
              </p>
              <div
                style={{
                  backgroundColor: "#ffff00",
                  border: "2px inset #c0c0c0",
                  padding: "8px",
                  margin: "12px 0",
                  fontWeight: "bold",
                }}
              >
                LIMITED TIME: 50% OFF PREMIUM FEATURES
              </div>
              <p style={{ margin: "0 0 16px 0", fontSize: "11px" }}>
                Join thousands of traders making profits with our advanced token tracker!
              </p>
              <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                <button
                  style={{
                    backgroundColor: "#008000",
                    color: "white",
                    border: "1px outset #008000",
                    padding: "4px 12px",
                    fontSize: "11px",
                    cursor: "pointer",
                    fontFamily: "MS Sans Serif, sans-serif",
                  }}
                  onClick={() => setShowPopup(false)}
                >
                  CLAIM OFFER
                </button>
                <button
                  style={{
                    backgroundColor: "#c0c0c0",
                    border: "1px outset #c0c0c0",
                    padding: "4px 12px",
                    fontSize: "11px",
                    cursor: "pointer",
                    fontFamily: "MS Sans Serif, sans-serif",
                  }}
                  onClick={() => setShowPopup(false)}
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top Right Buttons */}
      <div style={{ position: "absolute", top: "20px", right: "20px", display: "flex", gap: "10px" }}>
        <button
          style={{
            backgroundColor: "#c0c0c0",
            border: "1px outset #c0c0c0",
            padding: "4px 12px",
            fontSize: "11px",
            cursor: "pointer",
            fontFamily: "MS Sans Serif, sans-serif",
          }}
          onClick={openTwitter}
        >
          Twitter
        </button>
        <button
          style={{
            backgroundColor: "#c0c0c0",
            border: "1px outset #c0c0c0",
            padding: "4px 12px",
            fontSize: "11px",
            cursor: "pointer",
            fontFamily: "MS Sans Serif, sans-serif",
          }}
          onClick={openTelegram}
        >
          Telegram
        </button>
        <button
          style={{
            backgroundColor: "#c0c0c0",
            border: "1px outset #c0c0c0",
            padding: "4px 12px",
            fontSize: "11px",
            cursor: "pointer",
            fontFamily: "MS Sans Serif, sans-serif",
          }}
        >
          Launch Coin
        </button>
      </div>

      {/* HotTokens Window */}
      {openWindows.includes("hottokens") && (
        <div
          style={{
            position: "absolute",
            top: "130px",
            left: "400px",
            backgroundColor: "#c0c0c0",
            border: "2px outset #c0c0c0",
            width: "370px",
            fontFamily: "MS Sans Serif, sans-serif",
            fontSize: "11px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              backgroundColor: "#000080",
              color: "white",
              padding: "2px 4px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "11px",
              fontWeight: "bold",
            }}
          >
            <span>HotTokens.exe</span>
            <button
              style={{
                backgroundColor: "#c0c0c0",
                border: "1px outset #c0c0c0",
                padding: "0 6px",
                fontSize: "12px",
                cursor: "pointer",
                color: "black",
              }}
              onClick={() => closeWindow("hottokens")}
            >
              ×
            </button>
          </div>
          <div style={{ padding: "8px" }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
              <input
                type="text"
                placeholder="Ticker"
                value={tickerSearch}
                onChange={(e) => setTickerSearch(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && searchPumpFun()}
                style={{
                  flex: 1,
                  padding: "2px 4px",
                  border: "1px inset #c0c0c0",
                  fontSize: "11px",
                }}
              />
              <button
                onClick={addToken}
                disabled={isSearching}
                style={{
                  backgroundColor: "#c0c0c0",
                  border: "1px outset #c0c0c0",
                  padding: "2px 8px",
                  fontSize: "11px",
                  cursor: "pointer",
                  opacity: isSearching ? 0.6 : 1,
                }}
              >
                {isSearching ? "Searching..." : "Add Token"}
              </button>
            </div>
            <div style={{ fontSize: "11px", marginBottom: "4px" }}>Contract Address</div>

            {searchResults.length > 0 && (
              <div
                style={{
                  backgroundColor: "#ffffcc",
                  border: "1px solid #cccc00",
                  padding: "8px",
                  marginBottom: "8px",
                  fontSize: "10px",
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: "4px" }}>Pump.fun Search Result:</div>
                <div>Symbol: {searchResults[0].symbol}</div>
                <div>Price: {searchResults[0].price}</div>
                <div>Market Cap: {searchResults[0].marketCap}</div>
                <div>
                  24h Change:{" "}
                  <span style={{ color: searchResults[0].change24h.startsWith("+") ? "green" : "red" }}>
                    {searchResults[0].change24h}
                  </span>
                </div>
                <div style={{ fontSize: "9px", wordBreak: "break-all" }}>Address: {searchResults[0].address}</div>
              </div>
            )}

            <div
              style={{
                backgroundColor: "white",
                border: "1px inset #c0c0c0",
                height: "150px",
                overflow: "auto",
                padding: "4px",
              }}
            >
              {hotTokens.map((token, index) => (
                <div
                  key={index}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto auto auto",
                    alignItems: "center",
                    padding: "2px 4px",
                    borderBottom: index < hotTokens.length - 1 ? "1px solid #e0e0e0" : "none",
                    gap: "8px",
                  }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "10px" }}>{token.name}</span>
                  <button
                    style={{
                      backgroundColor: "#c0c0c0",
                      border: "1px outset #c0c0c0",
                      padding: "1px 6px",
                      fontSize: "9px",
                      cursor: "pointer",
                      minWidth: "35px",
                    }}
                    onClick={() => copyToClipboard(token.address)}
                  >
                    Copy
                  </button>
                  <span style={{ fontSize: "9px", minWidth: "50px", textAlign: "right" }}>{token.price}</span>
                  <span
                    style={{
                      fontSize: "9px",
                      color: token.change.startsWith("+") ? "green" : "red",
                      minWidth: "25px",
                      textAlign: "right",
                    }}
                  >
                    {token.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Launchpads Window */}
      {openWindows.includes("launchpads") && (
        <div
          style={{
            position: "absolute",
            top: "130px",
            left: "790px",
            backgroundColor: "#c0c0c0",
            border: "2px outset #c0c0c0",
            width: "370px",
            fontFamily: "MS Sans Serif, sans-serif",
            fontSize: "11px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              backgroundColor: "#000080",
              color: "white",
              padding: "2px 4px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "11px",
              fontWeight: "bold",
            }}
          >
            <span>Launchpads.exe</span>
            <button
              style={{
                backgroundColor: "#c0c0c0",
                border: "1px outset #c0c0c0",
                padding: "0 6px",
                fontSize: "12px",
                cursor: "pointer",
                color: "black",
              }}
              onClick={() => closeWindow("launchpads")}
            >
              ×
            </button>
          </div>
          <div style={{ padding: "8px" }}>
            <div
              style={{
                backgroundColor: "white",
                border: "1px inset #c0c0c0",
                height: "200px",
                overflow: "auto",
                padding: "4px",
              }}
            >
              {launchpadTokens.map((platform, index) => (
                <div
                  key={index}
                  style={{
                    padding: "4px 8px",
                    cursor: "pointer",
                    borderBottom: index < launchpadTokens.length - 1 ? "1px solid #e0e0e0" : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "transparent",
                    transition: "background-color 0.2s",
                  }}
                  onClick={() => openPlatform(platform.url)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#e0e0e0"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      width: "20px",
                      textAlign: "center",
                      fontWeight: "bold",
                      backgroundColor: "#000080",
                      color: "white",
                      padding: "2px",
                      borderRadius: "2px",
                    }}
                  >
                    {platform.icon}
                  </span>
                  <span>{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {openWindows.includes("chat") && (
        <div
          style={{
            position: "absolute",
            top: "400px",
            left: "400px",
            backgroundColor: "#c0c0c0",
            border: "2px outset #c0c0c0",
            width: "760px",
            fontFamily: "MS Sans Serif, sans-serif",
            fontSize: "11px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              backgroundColor: "#000080",
              color: "white",
              padding: "2px 4px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "11px",
              fontWeight: "bold",
            }}
          >
            <span>Chat.exe</span>
            <button
              style={{
                backgroundColor: "#c0c0c0",
                border: "1px outset #c0c0c0",
                padding: "0 6px",
                fontSize: "12px",
                cursor: "pointer",
                color: "black",
              }}
              onClick={() => closeWindow("chat")}
            >
              ×
            </button>
          </div>
          <div style={{ padding: "8px" }}>
            <div
              style={{
                backgroundColor: "white",
                border: "1px inset #c0c0c0",
                height: "150px",
                overflow: "auto",
                padding: "4px",
                fontFamily: "Courier New, monospace",
                fontSize: "10px",
                marginBottom: "8px",
              }}
            >
              {chatMessages.map((message, index) => (
                <div key={index} style={{ marginBottom: "2px" }}>
                  {message}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                style={{
                  flex: 1,
                  padding: "2px 4px",
                  border: "1px inset #c0c0c0",
                  fontSize: "11px",
                }}
              />
              <button
                onClick={sendMessage}
                style={{
                  backgroundColor: "#c0c0c0",
                  border: "1px outset #c0c0c0",
                  padding: "2px 12px",
                  fontSize: "11px",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
