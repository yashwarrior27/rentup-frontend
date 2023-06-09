import React from "react"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import Testimonials from "./testimonials/Testimonials"

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Testimonials />
      {/* <Recent /> */}
    </>
  )
}

export default Home
