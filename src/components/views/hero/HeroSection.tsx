"use client"

import { use } from "react"
import { FloatingShapes } from './components/FloatingShapes'
import { HeroContent } from './components/HeroContent'
import { ScrollIndicator } from './components/ScrollIndicator'

async function loadInitialState() {
  await new Promise(resolve => setTimeout(resolve, 0))
  return true
}
const initialStatePromise = loadInitialState()

export function HeroSection() {
  const isMounted = use(initialStatePromise)

  return (
    <section className="min-h-screen" id="hero">
      <div className="h-screen flex flex-col items-center justify-center relative dark:hero-gradient-dark hero-gradient-light overflow-hidden">
        <div className="animated-grid" />
        
        {isMounted && <FloatingShapes />}
        <HeroContent />
        <ScrollIndicator />
      </div>
    </section>
  )
}