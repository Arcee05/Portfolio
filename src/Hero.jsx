import React from "react"
import HeroText from "../src/components/HeroText"
import ParalllaxBackground from "./components/ParallaxBackground"

const Hero = () => {
    return (
        <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText />
        <ParalllaxBackground/>
      </section>
  )
}

export default Hero
