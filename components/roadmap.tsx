"use client"

import { useState } from "react"

export function Roadmap() {
  const [expandedMilestone, setExpandedMilestone] = useState<number | null>(null)

  const milestones = [
    {
      quarter: "Q4 2025",
      title: "Foundation & Research",
      status: "current",
      items: ["Whitepaper v1", "Open Research repo", "Dev waitlist open"],
      details: "Establishing the theoretical foundation and opening community engagement channels.",
    },
    {
      quarter: "Q1 2026",
      title: "Alpha Development",
      status: "upcoming",
      items: ["FAICore alpha (private)", "Units marketplace pilot", "Tokenomics finalised"],
      details: "Private testing phase with select developers and marketplace infrastructure setup.",
    },
    {
      quarter: "Q2 2026",
      title: "Public Beta Launch",
      status: "upcoming",
      items: ["Public FAICore beta", "Basic on-chain attestation primitives", "First audits"],
      details: "Opening beta access to the public with initial on-chain validation capabilities.",
    },
    {
      quarter: "Q3 2026",
      title: "Mainnet Launch",
      status: "upcoming",
      items: ["Mainnet attestation launch", "Staking & governance", "SDKs + integrations (EVM chains)"],
      details: "Full production launch with complete governance and multi-chain support.",
    },
    {
      quarter: "Q4 2026",
      title: "Ecosystem Expansion",
      status: "upcoming",
      items: ["Marketplace v1", "Public competitions / leaderboards", "Cross-chain settlements"],
      details: "Complete marketplace ecosystem with competitive elements and cross-chain functionality.",
    },
    {
      quarter: "Q4 2026+",
      title: "Ecosystem Expansion",
      status: "upcoming",
      items: ["Fully decentralised AI agent ecosystem", "Advanced governance features"],
      details: "Our journey from research to a fully decentralised AI agent ecosystem",
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance leading-relaxed">
            Our journey from research to a fully decentralised AI agent ecosystem
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-violet-400 to-teal-400"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-full border-4 flex items-center justify-center ${
                    milestone.status === "current" ? "border-teal-400 bg-teal-400/20" : "border-gray-600 bg-gray-800/50"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full ${milestone.status === "current" ? "bg-teal-400" : "bg-gray-600"}`}
                  ></div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div
                    className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      expandedMilestone === index
                        ? "border-teal-400/50 bg-gradient-to-br from-teal-500/10 to-violet-500/10"
                        : "border-gray-600/30 bg-gradient-to-br from-gray-800/20 to-gray-900/20 hover:border-gray-500/50"
                    }`}
                    onClick={() => setExpandedMilestone(expandedMilestone === index ? null : index)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{milestone.title}</h3>
                        <p
                          className={`text-lg font-medium ${
                            milestone.status === "current" ? "text-teal-400" : "text-gray-400"
                          }`}
                        >
                          {milestone.quarter}
                        </p>
                      </div>
                      <div
                        className={`text-2xl transition-transform duration-300 ${
                          expandedMilestone === index ? "rotate-180" : ""
                        }`}
                      >
                        ↓
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      {milestone.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>

                    {expandedMilestone === index && (
                      <div className="mt-4 p-4 bg-gray-800/30 rounded-lg">
                        <p className="text-gray-300 leading-relaxed">{milestone.details}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
