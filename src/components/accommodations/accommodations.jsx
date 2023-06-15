import React from "react"

import Heading from "../common/Heading"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import useScrollToTop from "../hooks/useScrollToTop"
const Accommodations = () => {
  useScrollToTop();
  return (
    <>
      <section className='about'>
        <Back name='Accommodations' title='Verified Accommodations by Collegecruise' cover={img} />
        <div className='container flex mtop'>
          <div className='left row basis-[70%]'>
            <Heading title='Accommodations' subtitle='College Cruise offers a variety of options such as PGs, flats, and hostels that are of high quality, verified, and available at affordable prices.' />

            <p><span className="font-semibold">Verified Accommodations :</span> With a wide range of choices, College Cruise aims to provide suitable accommodations to students across the country. By offering verified accommodations, College Cruise ensures that students can trust the information provided about the properties. This verification process likely includes confirming the safety, cleanliness, and overall quality of the accommodations before listing them on the platform. This way, students can have peace of mind knowing that they are choosing from reliable options.
<br/>
            </p>
            <p>
            This verification process likely includes confirming the safety, cleanliness, and overall quality of the accommodations before listing them on the platform. This way, students can have peace of mind knowing that they are choosing from reliable options.
            </p>
            
          
          </div>
          <div className='pt-16'>
            <img src='./accimg.jpg' alt='' className="float-top"  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Accommodations
