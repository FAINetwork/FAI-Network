"use client"

import { motion } from "framer-motion"

export function TrustedBy() {
  const trustedAccounts = [
    "Ethereum Foundation",
    "Polygon Labs",
    "Chainlink",
    "Uniswap Labs",
    "Aave",
    "Compound",
    "MakerDAO",
    "OpenZeppelin",
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/10 to-violet-500/10 border border-teal-500/20 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-violet-400"></div>
            <span className="text-sm font-medium text-teal-300">TRUSTED BY SMART ACCOUNTS</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-teal-200 to-violet-200 bg-clip-text text-white">
            Powering the Future of DeFi
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Leading protocols and smart contract platforms trust FAI Network for secure, verifiable AI operations
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...trustedAccounts, ...trustedAccounts].map((account, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-teal-500/30 transition-all duration-300"
              >
                <span className="text-gray-300 font-medium text-sm">{account}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">500+</div>
            <div className="text-gray-400 text-sm">Smart Contracts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-violet-400 mb-2">$2.5B+</div>
            <div className="text-gray-400 text-sm">TVL Secured</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">99.9%</div>
            <div className="text-gray-400 text-sm">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-violet-400 mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Monitoring</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
