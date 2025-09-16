"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface WaitlistModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle waitlist signup
    setSubmitted(true)
    setTimeout(() => {
      onOpenChange(false)
      setSubmitted(false)
      setEmail("")
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1a2b5c] border-violet-400/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Join the FAI Network Waitlist</DialogTitle>
        </DialogHeader>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-gray-300">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="developer@example.com"
                required
                className="bg-[#0b1230] border-violet-400/30 text-white placeholder:text-gray-400"
              />
            </div>
            <Button type="submit" className="w-full bg-[#6EE7B7] hover:bg-[#5dd4a4] text-black font-semibold">
              Join Waitlist
            </Button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="text-[#6EE7B7] text-6xl mb-4">✓</div>
            <p className="text-xl">Welcome to the waitlist!</p>
            <p className="text-gray-300">We'll be in touch soon.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
