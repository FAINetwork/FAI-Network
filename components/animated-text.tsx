"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  words: string[]
  className?: string
}

export function AnimatedText({ words, className = "" }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const longestWord = words.reduce((longest, current) => (current.length > longest.length ? current : longest), "")

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsVisible(true)
      }, 300)
    }, 2500)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <span
      className={`inline-block transition-all duration-300 text-teal-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      } ${className}`}
      style={{
        minWidth: `${longestWord.length * 0.35}em`,
        minHeight: "1.2em",
        background: `linear-gradient(45deg, #14b8a6, #8b5cf6, #06b6d4, #a855f7)`,
        backgroundSize: "300% 300%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: "gradientShift 3s ease infinite",
        color: "#5eead4", // Fallback colour for accessibility
      }}
    >
      {words[currentIndex]}
    </span>
  )
}
