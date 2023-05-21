import React,{ useState, useEffect } from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useHistory, useLocation } from 'react-router-dom';
const Hero = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/blog?location=${location}&propertyType=${propertyType}`);
  };
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Hostel ' subtitle='Find new & featured Hostels located in your local city.' />

          <form className='flex' onSubmit={handleSubmit}>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' value={location}
        onChange={(e) => setLocation(e.target.value)}/>
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}/>
            </div>
            {/* <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div> */}
            {/* <Link to='/blog'> */}
            <button className='btn1' type="submit">
              <i className='fa fa-search'></i>
            </button>
            {/* </Link> */}
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
