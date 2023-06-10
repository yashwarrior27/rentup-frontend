import React,{ useState, useEffect } from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useHistory, useLocation } from 'react-router-dom'
import { Home } from 'lucide-react'
const Hero = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // add your form submission logic here
  };

  return (
    <section className='hero'>
      <div className='container'>
        <div className='top-0 justify-between flex space-x-4'>
          <div className='flex flex-col w-[60%]'>
            <h1 className="text-base !container !text-[#fca311] font-semibold leading-tight top-2">Unlock Your Future with Our Expert College Counselling Services </h1>
            
          </div>
          

          <form className='form' onSubmit={handleSubmit}>
            <div className='form-field'>
              {/* <label className="text-sm font-medium px-2">Name</label> */}
              <input className="w-[320px] px-2 rounded-md"  type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-field'>
              {/* <label className="text-sm font-medium px-2">Contact</label> */}
              <input className="w-[320px] px-2 rounded-md" type='text' placeholder='Contact' value={contact} onChange={(e) => setContact(e.target.value)}/>
            </div>
            <div className='form-field'>
              {/* <label className="text-sm font-medium px-2">Email</label> */}
              <input className="w-[320px] px-2 rounded-md" type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            
            <div className='form-field'>
              {/* <label className="text-sm font-medium px-2">Property Type</label> */}
              <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="w-[320px] form-field">
                {/* add your options here */}
                <option value="">Select Service</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                // Add more options as needed
              </select>
            </div>
            <div className='form-field'>
              {/* <label className="text-sm font-medium px-2">Message</label> */}
              <textarea className="w-[320px] h-[100px] px-2 rounded-md" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}/>
            </div>
            <button className='btn6' type="submit">
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </div>
      {/* <div>
      <Home color="black" size={24} />
    </div> */}
    </section>
  );
};


export default Hero
