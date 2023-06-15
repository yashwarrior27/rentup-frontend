
import { Users2 ,ArrowBigRightDash ,MonitorSpeaker ,BrainCircuit, Home } from 'lucide-react'
import Heading from '../components/common/Heading'
export const AboutUs = () => {
  return (
    <section className='featured background'>
        <div className='container'>
        <Heading title='Set Sail on Your College Journey with College Cruise' />
        <div className='flex justify-center items-center'>
            <p className='text-center mt-16'>College Cruise is your holistic guide to simplify the college journey. We provide personalised counselling, expert guidance for entrance exams, and assistance in finding suitable accommodation close to your college. With a mission to make college transitions smoother, we help students set sail on their academic voyages with confidence and ease. At College Cruise, we are committed to helping you navigate the college seas without worry, directing you towards a promising academic future. Join us and let's embark on this exciting journey together!</p>
          
        </div>
            <div className='flex flex-col sm:flex-row justify-center items-start space-y-8 sm:space-y-0 sm:space-x-8 mt-20'>
            <div className='flex flex-col items-center justify-center'>
                <BrainCircuit size={180} className=" text-[#14213d]"/>
                <p className='text-[#fca311] text-sm font-semibold pt-2'>College Counselling</p>
            </div>
            <div>
            <ArrowBigRightDash size={60} className="text-gray-400" />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <MonitorSpeaker size={180} className="text-[#14213d]"/>
                <p className='text-[#fca311] text-sm font-semibold pt-2'>Entrance Preperation</p>
            </div>
            <div>
            <ArrowBigRightDash size={60} className="text-gray-400" />
            </div>
            
            <div className='flex flex-col items-center justify-center'>
                <Home size={180} className=" text-[#14213d]"/>
                <p className='text-[#fca311] text-sm font-semibold pt-2'>Verified accommodation</p>
            </div>

            <div>
            <ArrowBigRightDash size={60} className="text-gray-400" />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <Users2 size={180} className=" text-[#14213d]"/>
                <p className='text-[#fca311] text-sm font-semibold pt-2'>Student Community</p>
            </div>
            </div>
        </div>
    </section>
  )
}

