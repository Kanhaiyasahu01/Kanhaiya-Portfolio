import React from 'react'
import { About } from './About'
import { HeroSection } from './HeroSection'
import { Achievements } from './Achievements'
import { Skills } from './Skills'
import { Projects } from './Projects' 
import { ContactMe } from './ContactMe'
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
