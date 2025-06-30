export function TokenomicsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#c0c0c0] border-4 border-[#808080] p-8 shadow-lg">
          <div className="bg-[#000080] text-white p-2 mb-6 flex items-center">
            <span className="font-bold">TOKENOMICS.EXE</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#000080] mb-6">Token Distribution</h3>
              <div className="space-y-4">
                <div className="bg-white border-2 border-[#808080] p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">Community (40%)</span>
                    <span>400M LC</span>
                  </div>
                  <div className="bg-[#c0c0c0] border-2 border-[#808080] h-4">
                    <div className="bg-green-500 h-full" style={{ width: "40%" }}></div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#808080] p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">Liquidity (30%)</span>
                    <span>300M LC</span>
                  </div>
                  <div className="bg-[#c0c0c0] border-2 border-[#808080] h-4">
                    <div className="bg-blue-500 h-full" style={{ width: "30%" }}></div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#808080] p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">Development (20%)</span>
                    <span>200M LC</span>
                  </div>
                  <div className="bg-[#c0c0c0] border-2 border-[#808080] h-4">
                    <div className="bg-yellow-500 h-full" style={{ width: "20%" }}></div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#808080] p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">Marketing (10%)</span>
                    <span>100M LC</span>
                  </div>
                  <div className="bg-[#c0c0c0] border-2 border-[#808080] h-4">
                    <div className="bg-red-500 h-full" style={{ width: "10%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#000080] mb-6">Token Info</h3>
              <div className="bg-white border-2 border-[#808080] p-4 font-mono text-sm">
                <div className="space-y-2">
                  <div>{"> Token Name: LOADINGCOIN"}</div>
                  <div>{"> Symbol: LC"}</div>
                  <div>{"> Total Supply: 1,000,000,000"}</div>
                  <div>{"> Blockchain: Ethereum"}</div>
                  <div>{"> Contract: 0x..."}</div>
                  <div className="text-green-600">{"> Status: LOADING..."}</div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-100 border-2 border-yellow-500 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-yellow-500"></div>
                  <span className="font-bold text-[#000080]">Warning!</span>
                </div>
                <p className="text-xs text-[#000080]">
                  This is a meme token for entertainment purposes. Please do your own research before investing!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
