export function Footer() {
  return (
    <footer className="bg-[#c0c0c0] border-t-2 border-[#808080] p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#008080] text-white p-4 mb-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-2">LOADINGCOIN</h4>
              <p className="text-xs">The most nostalgic cryptocurrency bringing back the 90s vibes to DeFi!</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Quick Links</h4>
              <div className="space-y-1 text-xs">
                <div>• Whitepaper</div>
                <div>• Contract</div>
                <div>• Audit</div>
                <div>• Community</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">Social Media</h4>
              <div className="space-y-1 text-xs">
                <div>• Twitter</div>
                <div>• Telegram</div>
                <div>• Discord</div>
                <div>• Reddit</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#000080] text-white p-2 text-center">
          <div className="flex items-center justify-center gap-4 text-xs">
            <span>© 2024 LOADINGCOIN</span>
            <span>|</span>
            <span>All rights reserved</span>
            <span>|</span>
            <span>Made with ❤️ and nostalgia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
