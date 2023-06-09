import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SingleBlog = () => {

  const [property, setProperty] = useState(null);
  const location = useLocation();
  const id = location.pathname.split('/').pop();
  useEffect(() => {
    fetch('https://api.vidhaalay.com/public/api/get-listing')
      .then((response) => response.json())
      .then((data) => {
        // Convert id to number for comparison
        const propertyId = Number(id);
        const selectedProperty = data.data.find((property) => property.id === propertyId);
        setProperty(selectedProperty);
      })
      .catch((error) => console.error('Error:', error));
  }, [id]);
  console.log(property)

  if (!property) {
    return <div>Loading...</div>;
  }
  return (
    <>

          <div style={{ margin: '10 auto'}}>
      
          <div className='box shadow justify-center top-0' style={{ margin: '0 auto', width: '50%', border: '1px solid black', padding: '20px' }}>
            <div className='img flex'>
              <img src={'../images/list/p-1.png'} alt='' height={50} width={50}/>
            </div>
          <div className='text'>
            <div className='category flex'>
              <span style={{ background: "#ff98001a", color: "#ff9800" }}>{property.category ?? ''}</span>
              <i className='fa fa-heart'></i>
            </div>
            <h4>loc</h4>
            <p>
            <i className='fa fa-location-dot'></i> location
            </p>
          </div>
          <div className='button flex'>
            <div>
             <button className='btn2'>price</button> <label htmlFor=''>/sqft</label>
            </div>
          <span>{property.type}</span>
        </div>
      </div></div>


  </>
  )
}

export default SingleBlog