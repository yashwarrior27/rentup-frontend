import React from "react"

import Heading from "../common/Heading"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import useScrollToTop from "../hooks/useScrollToTop"
const Community = () => {
  useScrollToTop();
  return (
    <>
      <section className='about'>
        <Back name='Student Community' title='Student Community by Collegecruise' cover={img} />
        <div className='container flex mtop'>
          <div className='left row basis-[70%]'>
            <Heading title='Student Community' subtitle='The student community feature aims to create a sense of community among students by providing a platform for interaction, collaboration, and support. ' />

            <p><span className="font-semibold">Student Community :</span>  The Within the student community feature, students can connect with their peers, join discussion forums, participate in interest-based groups, and exchange ideas and resources. The community feature often includes features such as private messaging, group chats, and forums where students can ask questions, share experiences, and seek advice from fellow students. The student community feature offered by College Cruise is intended to foster a supportive and engaging environment, allowing students to connect with others who may be facing similar challenges or pursuing similar academic interests. It can be a valuable resource for networking, forming study groups, seeking mentorship, and accessing peer support.
            <br/>
            </p>
            <p>
            The student community feature offered by College Cruise is intended to foster a supportive and engaging environment, allowing students to connect with others who may be facing similar challenges or pursuing similar academic interests. It can be a valuable resource for networking, forming study groups, seeking mentorship, and accessing peer support.</p>
            
          
          </div>
          <div className='pt-16'>
            <img src='./comimg.jpg' alt='' className="float-top"  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Community
