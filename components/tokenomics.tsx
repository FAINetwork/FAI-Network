"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

export function Tokenomics() {
  const tokenomicsData = [
    { name: "Community & Ecosystem", value: 35, amount: "350,000,000", color: "#14b8a6" },
    { name: "Protocol Treasury", value: 20, amount: "200,000,000", color: "#8b5cf6" },
    { name: "Liquidity & Launch Pools", value: 15, amount: "150,000,000", color: "#06b6d4" },
    { name: "Staking Rewards", value: 15, amount: "150,000,000", color: "#a855f7" },
    { name: "Team", value: 10, amount: "100,000,000", color: "#0891b2" },
    { name: "Advisors / Early Contributors", value: 5, amount: "50,000,000", color: "#7c3aed" },
  ]

  const utilities = [
    "Pay for FAICore calls",
    "Stake to participate in node election",
    "Governance voting",
    "Reward distribution",
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#1a2b5c]/30 to-[#0b1230]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
              Tokenomics
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance leading-relaxed">
            FAI token powers the network with transparent distribution and sustainable economics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Pie Chart */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-2xl p-8 border border-gray-600/30">
              <h3 className="text-2xl font-bold mb-6 text-center">Token Distribution</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={tokenomicsData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${value}%`}
                    >
                      {tokenomicsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: any, name: any) => [`${value}%`, name]}
                      contentStyle={{
                        backgroundColor: "#1a2b5c",
                        border: "1px solid #8b5cf6",
                        borderRadius: "8px",
                        color: "white",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">1,000,000,000 FAI</div>
              <div className="text-gray-300">Total Supply</div>
            </div>
          </div>

          {/* Distribution Table */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-2xl p-8 border border-gray-600/30">
              <h3 className="text-2xl font-bold mb-6">Distribution Breakdown</h3>
              <div className="space-y-4">
                {tokenomicsData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-white font-medium">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold">{item.value}%</div>
                      <div className="text-sm text-gray-400">{item.amount} FAI</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Utilities */}
            <div className="bg-gradient-to-br from-teal-500/10 to-violet-500/10 rounded-2xl p-8 border border-teal-400/20">
              <h3 className="text-xl font-bold mb-4 text-teal-400">On-chain Utilities</h3>
              <div className="space-y-3">
                {utilities.map((utility, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-gray-300">{utility}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-800/30 rounded-lg">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <strong className="text-teal-400">Economics:</strong> FAI fees are designed to be low for end-users —
                  developers and heavy consumers pay via subscription or metered FAICore credits, while validators earn
                  staking rewards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
