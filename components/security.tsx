export function Security() {
  return (
    <section id="security" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-2xl p-12 border border-gray-600/30 animate-shimmer backdrop-blur-sm">
          <h2 className="text-4xl font-bold mb-8">
            Security &{" "}
            <span className="bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">Audits</span>
          </h2>

          <div className="space-y-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg px-4 py-2 animate-pulse">
                <span className="text-yellow-400 font-medium">🔒 Audit in Progress</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              We're committed to the highest security standards. External audits will be completed before mainnet
              attestation launch, with full transparency and public reporting.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-teal-500/10 border border-teal-400/20 rounded-xl p-6 hover:bg-teal-500/15 transition-all duration-300 hover:scale-105">
                <h3 className="text-lg font-bold text-teal-400 mb-2">External Audits</h3>
                <p className="text-gray-300 text-sm">
                  Comprehensive security review by leading blockchain security firms before mainnet launch.
                </p>
              </div>

              <div className="bg-violet-500/10 border border-violet-400/20 rounded-xl p-6 hover:bg-violet-500/15 transition-all duration-300 hover:scale-105">
                <h3 className="text-lg font-bold text-violet-400 mb-2">Bug Bounty Program</h3>
                <p className="text-gray-300 text-sm">Coming Q2 2026 — rewarding security researchers and developers.</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-400">
                Audit reports will be published at{" "}
                <span className="text-teal-400 font-medium">fai.network/security</span>
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16">
          <p className="text-gray-400 text-sm mb-6">As seen in</p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="bg-gray-700/50 rounded-lg px-6 py-3 text-gray-300 font-medium hover:bg-gray-600/50 transition-all duration-300 hover:scale-105">
              TechCrunch
            </div>
            <div className="bg-gray-700/50 rounded-lg px-6 py-3 text-gray-300 font-medium hover:bg-gray-600/50 transition-all duration-300 hover:scale-105">
              CoinDesk
            </div>
            <div className="bg-gray-700/50 rounded-lg px-6 py-3 text-gray-300 font-medium hover:bg-gray-600/50 transition-all duration-300 hover:scale-105">
              The Block
            </div>
            <div className="bg-gray-700/50 rounded-lg px-6 py-3 text-gray-300 font-medium hover:bg-gray-600/50 transition-all duration-300 hover:scale-105">
              Decrypt
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
