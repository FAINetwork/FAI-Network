"use client"

import { useState } from "react"

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      id: 1,
      title: "Compose",
      description:
        "Developers pick Units from the marketplace (e.g., PriceUnit, ResearchUnit, ExecutionUnit) and orchestrate workflows via FAICore.",
      icon: "🔧",
      color: "teal",
    },
    {
      id: 2,
      title: "Execute & Verify",
      description:
        "Units run off-chain; outputs are hashed, signed, and posted with attestations for on-chain validation.",
      icon: "⚡",
      color: "violet",
    },
    {
      id: 3,
      title: "Settle & Reward",
      description:
        "Smart contracts verify attestations, settle payments in FAI tokens, and update reputation/leaderboards.",
      icon: "💎",
      color: "teal",
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0b1230] to-[#1a2b5c]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-balance">
            How it{" "}
            <span className="bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance leading-relaxed">
            A three-step process that transforms AI outputs into verifiable, on-chain settlements
          </p>
        </div>

        {/* Interactive Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                activeStep === step.id
                  ? step.color === "teal"
                    ? "border-teal-400 bg-teal-500/10"
                    : "border-violet-400 bg-violet-500/10"
                  : "border-gray-600 bg-gray-800/20 hover:border-gray-500"
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="text-center space-y-4">
                <div
                  className={`text-6xl mb-4 ${
                    activeStep === step.id ? "scale-110" : "scale-100"
                  } transition-transform duration-300`}
                >
                  {step.icon}
                </div>
                <div className="space-y-2">
                  <h3
                    className={`text-2xl font-bold ${
                      activeStep === step.id
                        ? step.color === "teal"
                          ? "text-teal-400"
                          : "text-violet-400"
                        : "text-white"
                    }`}
                  >
                    Step {step.id}: {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Step connector */}
              {step.id < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-violet-400 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Example Use Case */}
        <div className="bg-gradient-to-r from-teal-500/10 via-violet-500/10 to-teal-500/10 rounded-2xl p-8 border border-teal-400/20">
          <h3 className="text-2xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
              Example: Automated LP Rebalancer
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-teal-400 font-semibold">PriceUnit</div>
              <p className="text-sm text-gray-300">
                Fetches real-time market data and calculates optimal rebalancing ratios
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-violet-400 font-semibold">ExecutionUnit</div>
              <p className="text-sm text-gray-300">Generates transaction parameters with risk assessments</p>
            </div>
            <div className="space-y-2">
              <div className="text-teal-400 font-semibold">On-chain Settlement</div>
              <p className="text-sm text-gray-300">Smart contract validates attestations and executes rebalancing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
