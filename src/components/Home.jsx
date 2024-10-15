import React from 'react'
import { About } from './About'
import { ContactMe } from './ContactMe'
import { Projects } from './Projects'
import { Skills } from './Skills'
import { Achievements } from './Achievements'
import { HeroSection } from './HeroSection'
import Summary from './Summary'
export const Home = () => {
  return (
    <div>
        <HeroSection/>
        <About/>
        {/* <Achievements/>
        <Skills/>
        <Projects/>
        <ContactMe/> */}
    </div>
  )
}
