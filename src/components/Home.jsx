import React from 'react'
import { HeroSection } from './HeroSection'
import PortfolioGrid from './Helper/PortfolioGrid'
// import Summary from './Summary'
export const Home = () => {
  return (
    <div>
        <HeroSection/>
        <PortfolioGrid />
        {/* <About/>
        <Achievements/>
        <Skills/>
        <Projects/>
        <ContactMe/> */}
    </div>
  )
}
