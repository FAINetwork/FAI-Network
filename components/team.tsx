"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ContactModal } from "./contact-modal"

export function Team() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const teamMembers = [
    {
      name: "Elena Park",
      role: "CEO & Co-founder",
      bio: "Ex-NLP researcher and product lead at an AI infra startup.",
      image: "/professional-woman-ceo.png",
    },
    {
      name: "Marcus Osei",
      role: "CTO & Co-founder",
      bio: "ML engineer, previously built infra at a Web3 data provider.",
      image: "/professional-man-cto-tech-engineer.jpg",
    },
    {
      name: "Priya Raman",
      role: "Head of Protocol",
      bio: "Distributed systems engineer, smart contract auditor background.",
      image: "/professional-woman-protocol-engineer.jpg",
    },
    {
      name: "Aaron Collins",
      role: "Head of Developer Relations",
      bio: "Ex-DevRel at leading blockchain infra firm.",
      image: "/professional-man-developer-relations.jpg",
    },
  ]

  const advisors = [
    {
      name: "Dr. Sofia Kim",
      role: "Advisor (LLM research)",
      bio: "Former academic & author on interpretability.",
    },
    {
      name: "Lucas Duarte",
      role: "Advisor (crypto ops)",
      bio: "Ex-ops at a major DeFi protocol.",
    },
    {
      name: "Mei Tan",
      role: "Advisor (product & growth)",
      bio: "Entrepreneur and growth lead.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0b1230] to-[#1a2b5c]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-balance">
            Core{" "}
            <span className="bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance leading-relaxed">
            Experienced builders from AI research, Web3 infrastructure, and developer ecosystems
          </p>
        </div>

        {/* Core Team */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-2xl p-6 border border-gray-600/30 hover:border-teal-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center space-y-4">
                <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-teal-400/30 group-hover:border-teal-400/60 transition-colors duration-300">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-teal-400 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advisors */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-violet-400">Advisors</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-violet-500/10 to-gray-800/20 rounded-xl p-6 border border-violet-400/20"
              >
                <h4 className="text-lg font-bold text-white mb-1">{advisor.name}</h4>
                <p className="text-violet-400 font-medium text-sm mb-2">{advisor.role}</p>
                <p className="text-sm text-gray-300 leading-relaxed">{advisor.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-teal-500/10 to-violet-500/10 rounded-2xl p-8 border border-teal-400/20">
            <h3 className="text-2xl font-bold mb-4 text-white">Interested in joining?</h3>
            <p className="text-gray-300 mb-6">We're always looking for talented individuals to join our mission.</p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-teal-400 to-violet-400 hover:from-teal-500 hover:to-violet-500 text-black font-semibold px-8 py-3"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
