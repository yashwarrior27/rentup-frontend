import React from "react"

import Heading from "../common/Heading"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import useScrollToTop from "../hooks/useScrollToTop"
const Coaching = () => {
  useScrollToTop();
  return (
    <>
      <section className='about'>
        <Back name='Entrance Coaching' title='Entrance Coachings by Collegecruise' cover={img} />
        <div className='container flex mtop'>
          <div className='left row basis-[70%]'>
            <Heading title='Entrance Coaching' subtitle='College Cruise has collaborated with various educational institutes to offer entrance exam coaching to students preparing for a wide range of entrance exams. These exams include IPMAT, CUET, CAT, CLAT, NPAT, SET, XET, MINCET and many others. ' />

            <p><span className="font-semibold">Entrance Coaching :</span>  The platform aims to provide comprehensive and effective coaching to help students excel in their entrance exams and secure admissions to their desired educational programs. By partnering with reputable educational institutes, College Cruise ensures that students receive quality study materials, expert guidance, and valuable resources to enhance their exam preparation. The specific features and offerings of College Cruise may vary depending on the partnership with each educational institute. However, in general, the platform may provide online study materials, mock tests, personalized coaching, doubt-solving sessions, and access to experienced faculty members. The goal is to support students throughout their preparation journey and equip them with the necessary knowledge and skills to perform well in their chosen entrance exams.
<br/>
            </p>
            <p>
            By partnering with reputable educational institutes, College Cruise ensures that students receive quality study materials, expert guidance, and valuable resources to enhance their exam preparation. The specific features and offerings of College Cruise may vary depending on the partnership with each educational institute. However, in general, the platform may provide online study materials, mock tests, personalized coaching, doubt-solving sessions, and access to experienced faculty members. The goal is to support students throughout their preparation journey and equip them with the necessary knowledge and skills to perform well in their chosen entrance exams.</p>
            
          
          </div>
          <div className='pt-16'>
            <img src='./coaimg.jpg' alt='' className="float-top"  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Coaching
