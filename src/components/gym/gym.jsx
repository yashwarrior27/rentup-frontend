import React from "react"

import Heading from "../common/Heading"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import useScrollToTop from "../hooks/useScrollToTop"
const Gym = () => {
  useScrollToTop();
  return (
    <>
      <section className='about'>
        <Back name='Gyms and fitness centres' title='Gyms and fitness centres by Collegecruise' cover={img} />
        <div className='container flex mtop'>
          <div className='left row basis-[70%]'>
            <Heading title='Gyms and fitness centres' subtitle='College Cruise has tied up with many gyms and fitness centres in major cities like mumbai, bangalore, pune and delhi so that along with academics students can focus on their health.' />

            <p><span className="font-semibold">Student Community :</span>By partnering with these fitness facilities, College Cruise is promoting a healthy lifestyle among its students and recognizing the importance of physical well-being alongside academics. This collaboration allows students to access gyms and fitness centers conveniently, enabling them to focus on their health and fitness goals. Additionally, the heavy discounts provided by College Cruise's affiliated partners make fitness more accessible and affordable for students. By combining academics with opportunities for physical activity, College Cruise is emphasizing the importance of holistic development. Regular exercise and fitness activities can enhance students' overall well-being, improve concentration, and reduce stress levels, ultimately contributing to their academic success.
            <br/>
            </p>
            <p>
            Additionally, the heavy discounts provided by College Cruise's affiliated partners make fitness more accessible and affordable for students. By combining academics with opportunities for physical activity, College Cruise is emphasizing the importance of holistic development. Regular exercise and fitness activities can enhance students' overall well-being, improve concentration, and reduce stress levels, ultimately contributing to their academic success.</p>
            
          
          </div>
          <div className='pt-16'>
            <img src='./gymimg.jpg' alt='' className="float-top"  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Gym
