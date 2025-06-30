"use client"

interface DesktopIconProps {
  icon: string
  label: string
  onClick: () => void
}

export function DesktopIcon({ icon, label, onClick }: DesktopIconProps) {
  return (
    <div className="desktop-icon" onClick={onClick} onDoubleClick={onClick}>
      <div className="icon">{icon}</div>
      <div className="label">{label}</div>
    </div>
  )
}
