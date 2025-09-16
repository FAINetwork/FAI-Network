import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b1230] to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Newsletter Signup */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-teal-500/10 to-violet-500/10 rounded-2xl p-8 border border-teal-400/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Get the latest updates on FAI Network development and launches.</p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-[#0b1230] border border-gray-600 rounded-lg text-white placeholder:text-gray-400 focus:border-teal-400 focus:outline-none"
              />
              <Button className="bg-[#6EE7B7] hover:bg-[#5dd4a4] text-black font-semibold px-6">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-teal-300 mb-2">FAI Network</h3>
          <p className="text-gray-400 text-sm mb-8">Trustless AI Agents for DeFi & Web3</p>

          <div className="flex justify-center mb-8">
            <a
              href="https://x.com/FAINetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors font-medium"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400 mb-2">
                <strong className="text-gray-300">Disclaimer:</strong> Not financial advice. FAI Network is a research &
                protocol initiative; tokens are experimental. Please DYOR.
              </p>
              <p className="text-xs text-gray-500">© 2025 FAI Network. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-600 border border-green-500 rounded-lg px-3 py-1">
                <span className="text-white text-xs font-medium">✓ Testnet Live</span>
              </div>
              <div className="bg-yellow-600 border border-yellow-500 rounded-lg px-3 py-1">
                <span className="text-white text-xs font-medium">🔒 Audit in Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
