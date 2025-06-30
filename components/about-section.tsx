export function AboutSection() {
  return (
    <section className="py-16 px-4 bg-[#008080]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#c0c0c0] border-4 border-[#808080] p-8 shadow-lg">
          <div className="bg-[#000080] text-white p-2 mb-6 flex items-center">
            <span className="font-bold">About LOADINGCOIN</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#000080] mb-4">What is LOADINGCOIN?</h3>
              <p className="text-sm text-[#000080] mb-4">
                LOADINGCOIN is a revolutionary cryptocurrency that brings back the nostalgia of the 90s computing era.
                Built on modern blockchain technology with a retro twist!
              </p>
              <div className="bg-white border-2 border-[#808080] p-4">
                <div className="text-xs font-mono">
                  {"> Loading features..."}
                  <br />
                  {"> Decentralized: ✓"}
                  <br />
                  {"> Nostalgic: ✓"}
                  <br />
                  {"> Community-driven: ✓"}
                  <br />
                  {"> Meme potential: ✓"}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#000080] mb-4">Why Choose LOADINGCOIN?</h3>
              <div className="space-y-3">
                <div className="bg-white border-2 border-[#808080] p-3 flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 border border-black flex items-center justify-center text-xs">
                    ✓
                  </div>
                  <span className="text-sm">Nostalgic 90s aesthetic</span>
                </div>
                <div className="bg-white border-2 border-[#808080] p-3 flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 border border-black flex items-center justify-center text-xs">
                    ✓
                  </div>
                  <span className="text-sm">Strong community support</span>
                </div>
                <div className="bg-white border-2 border-[#808080] p-3 flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 border border-black flex items-center justify-center text-xs">
                    ✓
                  </div>
                  <span className="text-sm">Deflationary tokenomics</span>
                </div>
                <div className="bg-white border-2 border-[#808080] p-3 flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-500 border border-black flex items-center justify-center text-xs">
                    ⏳
                  </div>
                  <span className="text-sm">Loading more features...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
