"use client"

interface StartMenuProps {
  onClose: () => void
}

export function StartMenu({ onClose }: StartMenuProps) {
  return (
    <>
      <div className="fixed inset-0" onClick={onClose} />
      <div className="absolute bottom-8 left-2 bg-[#c0c0c0] border-2 border-gray-400 shadow-lg w-48">
        <div className="bg-[#000080] text-white p-2 text-sm font-bold">LOADINGCOIN</div>
        <div className="p-2 space-y-1">
          <div className="hover:bg-blue-500 hover:text-white p-1 text-sm cursor-pointer">📊 Programs</div>
          <div className="hover:bg-blue-500 hover:text-white p-1 text-sm cursor-pointer">📁 Documents</div>
          <div className="hover:bg-blue-500 hover:text-white p-1 text-sm cursor-pointer">⚙️ Settings</div>
          <hr className="border-gray-400" />
          <div className="hover:bg-blue-500 hover:text-white p-1 text-sm cursor-pointer">🔌 Shut Down...</div>
        </div>
      </div>
    </>
  )
}
