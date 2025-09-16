export function Features() {
  const features = [
    {
      title: "FAICore API",
      subtitle: "SDKs + REST + Websocket",
      description:
        "Developer-first primitives for composing Units with comprehensive tooling and real-time capabilities.",
      icon: "🔌",
      gradient: "from-teal-400 to-cyan-400",
    },
    {
      title: "Units Marketplace",
      subtitle: "Discoverable, rated Units",
      description: "Pay-per-call or subscription monetisation with reputation systems and performance leaderboards.",
      icon: "🏪",
      gradient: "from-violet-400 to-purple-400",
    },
    {
      title: "On-chain Attestation Layer",
      subtitle: "Cryptographic proofs & audit trails",
      description: "Verifiable outputs with deterministic attestations that can be validated and settled on-chain.",
      icon: "🔐",
      gradient: "from-teal-400 to-violet-400",
    },
    {
      title: "Governance & Staking",
      subtitle: "Token-backed governance",
      description: "Node election for validators, reputational incentives, and community-driven protocol evolution.",
      icon: "🗳️",
      gradient: "from-violet-400 to-teal-400",
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-balance">
            Product{" "}
            <span className="bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-teal-300">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance leading-relaxed">
            Comprehensive infrastructure for building, deploying, and monetizing AI agents in Web3
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-2xl border border-gray-600/30 hover:border-teal-400/50 transition-all duration-300 hover:scale-105"
            >
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3
                  className={`text-2xl font-bold mb-2 bg-gradient-to-r ${feature.gradient} bg-clip-text ${
                    feature.gradient.includes("teal") && feature.gradient.includes("cyan")
                      ? "text-teal-300"
                      : feature.gradient.includes("violet") && feature.gradient.includes("purple")
                        ? "text-violet-300"
                        : feature.gradient.includes("teal") && feature.gradient.includes("violet")
                          ? "text-teal-300"
                          : "text-violet-300"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 font-medium">{feature.subtitle}</p>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
