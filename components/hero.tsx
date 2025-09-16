"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { WaitlistModal } from "./waitlist-modal"
import { AnimatedText } from "./animated-text"
import Image from "next/image"

export function Hero() {
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute top-6 right-6 z-20">
        <a
          href="https://x.com/FAINetwork"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-black/20 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-black/40 hover:border-white/30 transition-all duration-300 group"
        >
          <span className="text-white text-lg group-hover:scale-110 transition-all duration-300">𝕏</span>
        </a>
      </div>

      {/* Subtle animated background grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        />
      </div>

      {/* Subtle mouse-following glow */}
      <div
        className="absolute w-[600px] h-[600px] pointer-events-none"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          background: "radial-gradient(circle, rgba(20, 184, 166, 0.03) 0%, transparent 70%)",
          transition: "all 0.3s ease-out",
        }}
      />

      {/* Enhanced floating star particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const brightness = Math.random()
          const isBlue = Math.random() > 0.7
          const size =
            brightness > 0.7 ? "w-1.5 h-1.5" : brightness > 0.4 ? "w-1 h-1" : "w-0.5 h-0.5"

          return (
            <div
              key={i}
              className={`absolute ${size} rounded-full`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: isBlue
                  ? `rgba(59, 130, 246, ${0.4 + brightness * 0.6})`
                  : `rgba(255, 255, 255, ${0.3 + brightness * 0.7})`,
                boxShadow: isBlue
                  ? `0 0 ${4 + brightness * 8}px rgba(59, 130, 246, ${0.3 + brightness * 0.4})`
                  : `0 0 ${3 + brightness * 6}px rgba(255, 255, 255, ${0.2 + brightness * 0.3})`,
                animation: `starTwinkle ${2 + Math.random() * 4}s ease-in-out infinite, float ${8 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          )
        })}
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="30%" stopColor="rgba(59,130,246,0.4)" />
            <stop offset="70%" stopColor="rgba(20,184,166,0.3)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
          </linearGradient>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.4)" />
            <stop offset="50%" stopColor="rgba(147,197,253,0.3)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.2)" />
          </linearGradient>
        </defs>

        <line
          x1="20%"
          y1="30%"
          x2="80%"
          y2="70%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <line
          x1="10%"
          y1="60%"
          x2="90%"
          y2="40%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />
        <line
          x1="30%"
          y1="20%"
          x2="70%"
          y2="80%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />
      </svg>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/logo.png"
            alt="FAI Network Logo"
            width={160}
            height={160}
            className="w-36 sm:w-44 md:w-52 h-auto"
            priority
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-light mb-8 text-balance leading-tight tracking-tight">
          <span className="text-white/90">Modular </span>
          <AnimatedText
            words={["AI agents", "Intelligence", "Automation", "Solutions"]}
            className="font-medium text-white"
          />
          <br />
          <span className="text-teal-300/90 font-light">On-chain validation</span>
          <br />
          <span className="text-white/90">Zero-friction </span>
          <AnimatedText
            words={["DeFi intelligence", "Web3 power", "Smart contracts", "Blockchain AI"]}
            className="font-medium text-white"
          />
        </h1>

        <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-4xl mx-auto text-balance leading-relaxed font-light">
          FAI Network composes specialised AI Units, verifies outputs with reproducible attestations, and settles
          results on-chain — enabling trustable, auditable agent-powered dApps.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 font-medium px-8 py-4 text-lg transition-all duration-300 transform hover:scale-[1.02] border-0 rounded-full"
            onClick={() => setShowWaitlist(true)}
          >
            Join Waitlist
          </Button>
          <div className="relative">
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white/70 hover:bg-white/5 hover:text-white px-8 py-4 text-lg bg-transparent hover:border-white/30 transition-all duration-300 rounded-full font-light"
            >
              Read Whitepaper
            </Button>
            <span className="absolute -top-2 -right-2 bg-teal-400 text-black text-xs px-2 py-1 rounded-full font-medium">
              Soon
            </span>
          </div>
          <div className="relative">
            <Button
              size="lg"
              variant="ghost"
              className="text-white/50 hover:bg-white/5 hover:text-white/70 px-8 py-4 text-lg transition-all duration-300 rounded-full font-light"
              disabled
            >
              Try FAICore
            </Button>
            <span className="absolute -top-2 -right-2 bg-teal-400 text-black text-xs px-2 py-1 rounded-full font-medium">
              Soon
            </span>
          </div>
        </div>

        <p className="text-sm text-white/40 font-light">Early access: limited developer keys available.</p>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>

      <WaitlistModal open={showWaitlist} onOpenChange={setShowWaitlist} />
    </section>
  )
}
