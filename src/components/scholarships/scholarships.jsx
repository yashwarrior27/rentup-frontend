import React from "react"

import Heading from "../common/Heading"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import useScrollToTop from "../hooks/useScrollToTop"
const Scholarships = () => {
  useScrollToTop();
  return (
    <>
      <section className='about'>
        <Back name='Scholarships' title='Verified Scholarships by Collegecruise' cover={img} />
        <div className='container flex mtop'>
          <div className='left row basis-[70%]'>
            <Heading title='Scholarships' subtitle='College Cruise provides information on scholarships ' />

            <p><span className="font-semibold">Scholarships :</span> College Cruise provides information on scholarships for Indian students including government and private scholarships. College cruise will assist students in finding suitable scholarship opportunities to support their education and career aspirations. Whether you're pursuing undergraduate or postgraduate studies, College Cruise aims to be a one-stop resource for all your scholarship needs.
<br/>
            </p>
            {/* <p>
            This verification process likely includes confirming the safety, cleanliness, and overall quality of the accommodations before listing them on the platform. This way, students can have peace of mind knowing that they are choosing from reliable options.
            </p>
             */}
          
          </div>
          <div className='pt-16'>
            <img src='./schimg.jpg' alt='' className="float-top"  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Scholarships
