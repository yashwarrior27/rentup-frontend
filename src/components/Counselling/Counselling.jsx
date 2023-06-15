import React from "react"

import Heading from "../common/Heading"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import useScrollToTop from "../hooks/useScrollToTop"
const Counselling = () => {
  useScrollToTop();
  return (
    <>
      <section className='about'>
        <Back name='Counselling' title='Collegege Counselling by Collegecruise' cover={img} />
        <div className='container flex mtop'>
          <div className='left row basis-[75%]'>
            <Heading title='Counselling' subtitle=' We provide guidance and support to students throughout their college selection process. This involves various tasks such as form filling, college selection based on their profiles, entrance exam guidance, insider details about colleges, and course selection based on their interests' />

            <p><span className="font-semibold">Form filling:</span> We will Assist students in completing application forms accurately and ensuring all required information is provided. This includes personal details, educational background, achievements, and any other necessary information.<br/>
            <span className="font-semibold">College selection:</span> We will Help students identify suitable colleges based on their profiles, including their academic performance, interests, career goals, and other preferences. We will be Considering factors such as location, reputation, available programs, faculty, infrastructure, and extracurricular activities.</p>
            <p><span className="font-semibold">Entrance exam guidance:</span> We will Provide information, tips, tricks and hacks to help students prepare for entrance exams required by their desired colleges or universities. <br/>
            <span className="font-semibold">Insider details about colleges:</span> We will be Sharing insights and detailed information about different colleges, such as the faculty quality, infrastructure, campus culture, student life, placement opportunities, and alumni network. This information can help students make informed decisions.</p>
            <p>
            <span  className="font-semibold">Course selection:</span> We will Assist students in choosing the right courses or majors based on their interests, strengths, and career aspirations. We will Provide information about various academic programs, curriculum, prerequisites, and potential career paths associated with different fields of study.<br />
            <span  className="font-semibold">Additional support:</span> We will Offer guidance on scholarships, financial aid, and other funding options available for students. We will Help students navigate the application process for these opportunities.<br/>
            <span  className="font-semibold">Follow-up and support:</span> We will Maintain regular communication with students to address their concerns, answer their questions, and provide ongoing support throughout their college application journey.</p>
          
          </div>
          <div className=''>
            <img src='./counimg.jpg' alt='' className="float-top"  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Counselling
