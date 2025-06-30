"use client"

import type { ReactNode, CSSProperties } from "react"

interface WindowProps {
  title: string
  children: ReactNode
  onClose: () => void
  style?: CSSProperties
}

export function Window({ title, children, onClose, style }: WindowProps) {
  return (
    <div className="window" style={style}>
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close" onClick={onClose}></button>
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  )
}
