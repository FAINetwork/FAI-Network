export function ProblemSolution() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problem */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-red-400">Why current LLMs break Web3</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-red-400">Monolithic models</strong> are compute-heavy and expensive for
                  real-time on-chain workflows.
                </p>
              </div>

              <div className="flex items-start gap-4 p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-red-400">Outputs are opaque</strong> and hard to audit (hallucinations =
                  financial risk).
                </p>
              </div>

              <div className="flex items-start gap-4 p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-red-400">Composing multiple skills</strong> reliably is brittle and expensive.
                </p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
                FAI's approach
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-violet-400"></div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-teal-500/5 to-violet-500/5 border border-teal-400/20 rounded-xl">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-teal-400">Modular Units</strong> — small specialised models (search, math,
                  market-synthesis) that are cheaper & composable.
                </p>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-teal-500/5 to-violet-500/5 border border-violet-400/20 rounded-xl">
                <div className="w-2 h-2 bg-violet-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-violet-400">Verifiable outputs</strong> — each Unit attaches provenance &
                  deterministic attestations that can be validated on-chain.
                </p>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-teal-500/5 to-violet-500/5 border border-teal-400/20 rounded-xl">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-teal-400">FAICore API & Marketplace</strong> — compose, evaluate and monetise
                  Units with reputation and leaderboards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
