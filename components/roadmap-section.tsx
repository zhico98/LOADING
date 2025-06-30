export function RoadmapSection() {
  const roadmapItems = [
    { phase: "Phase 1", title: "Launch", status: "completed", description: "Token creation and initial launch" },
    { phase: "Phase 2", title: "Community Building", status: "loading", description: "Growing our retro community" },
    {
      phase: "Phase 3",
      title: "Exchange Listings",
      status: "pending",
      description: "Getting listed on major exchanges",
    },
    { phase: "Phase 4", title: "NFT Collection", status: "pending", description: "Retro-themed NFT collection" },
    {
      phase: "Phase 5",
      title: "Metaverse Integration",
      status: "pending",
      description: "Virtual 90s world integration",
    },
  ]

  return (
    <section className="py-16 px-4 bg-[#008080]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#c0c0c0] border-4 border-[#808080] p-8 shadow-lg">
          <div className="bg-[#000080] text-white p-2 mb-6 flex items-center">
            <span className="font-bold">ROADMAP.EXE</span>
          </div>

          <div className="space-y-6">
            {roadmapItems.map((item, index) => (
              <div key={index} className="bg-white border-2 border-[#808080] p-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 border-2 border-black flex items-center justify-center text-xs font-bold ${
                      item.status === "completed"
                        ? "bg-green-500"
                        : item.status === "loading"
                          ? "bg-yellow-500"
                          : "bg-gray-400"
                    }`}
                  >
                    {item.status === "completed" ? "✓" : item.status === "loading" ? "⏳" : "○"}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-[#000080]">{item.phase}</span>
                      <span className="text-lg font-bold">{item.title}</span>
                      {item.status === "loading" && (
                        <div className="text-xs bg-yellow-200 px-2 py-1 border border-yellow-500">LOADING...</div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-100 border-2 border-blue-500 p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-blue-500"></div>
              <span className="font-bold text-[#000080]">System Message</span>
            </div>
            <p className="text-xs text-[#000080] font-mono">
              {"> Roadmap loading complete!"}
              <br />
              {"> Stay tuned for more updates..."}
              <br />
              {"> Join our community for real-time progress!"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
