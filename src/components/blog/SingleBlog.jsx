import React from 'react'

const SingleBlog = () => {
  const property = 
    {
        imageUrl: 'https://example.com/image.jpg',
        address: '123 Main St',
        price: 1000000,
        type: 'Apartment',
        area: 1000,
        bedrooms: 3,
        bathrooms: 2
  }
  const cover = "../images/list/p-1.png"
  return (
    <div><div className='box shadow'>
    <div className='img flex'>
      <img src={cover} alt='' />
    </div>
    <div className='text'>
      <div className='category flex'>
        <span style={{ background: "#ff98001a", color: "#ff9800" }}>categor</span>
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
      <span>type</span>
    </div>
  </div></div>
//   <div style={{ margin: '0 auto', width: '50%', border: '1px solid black', padding: '20px' }}>
//   <img src={property.imageUrl} alt={property.address} style={{ width: '100%', height: 'auto' }}/>
//   <h2 style={{ textAlign: 'center' }}>{property.address}</h2>
//   <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>${property.price}</p>
//   <div style={{ marginTop: '20px' }}>
//     <p><strong>Type: </strong>{property.type}</p>
//     <p><strong>Area: </strong>{property.area} sq ft</p>
//     <p><strong>Bedrooms: </strong>{property.bedrooms}</p>
//     <p><strong>Bathrooms: </strong>{property.bathrooms}</p>
//   </div>
// </div>
  )
}

export default SingleBlog