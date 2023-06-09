import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { Instagram ,Facebook, Youtube} from 'lucide-react'
const Footer = () => {
  return (
    <>
      <section className='footerContact border-t border-[#14213d]'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <Link to="/contact"><button className='btn5'>Contact Us Today</button></Link>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logoo.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
              <div className="flex !items-start !justify-start space-x-4">
              <Instagram size={24}/>
              <Facebook size={24}/>
              <Youtube size={24} />
              </div>
                  <div className='input flex'>
                    <input type='text' placeholder='Email Address' />
                    <button className="btn5">Subscribe</button>
                  </div>
                </div>
              </div>

          
        </div>
      </footer>
      {/* <div className='legal'>
        <span>© 2021 RentUP. Designd By GorkCoder.</span>
      </div> */}
    </>
  )
}

export default Footer
