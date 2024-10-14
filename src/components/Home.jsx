import React from 'react'
import { HeroSection } from './HeroSection'
import { About } from './About'
import { ContactMe } from './ContactMe'
import { Projects } from './Projects'
import { Skills } from './Skills'
import { Achievements } from './Achievements'

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
