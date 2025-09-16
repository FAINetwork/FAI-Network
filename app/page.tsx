import { Hero } from "@/components/hero"
import { TrustedBy } from "@/components/trusted-by"
import { ProblemSolution } from "@/components/problem-solution"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { Tokenomics } from "@/components/tokenomics"
import { Roadmap } from "@/components/roadmap"
import { Team } from "@/components/team"
import { Security } from "@/components/security"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b1230] text-white overflow-x-hidden">
      <Hero />
      <TrustedBy />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Team />
      <Security />
      <Footer />
    </main>
  )
}
