import React from "react"
import About from "../about/About"
import { AboutUs } from "../AboutUs"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import Testimonials from "./testimonials/Testimonials"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Featured />
      <Testimonials />
      {/* <Recent /> */}

    </>
  )
}

export default Home
