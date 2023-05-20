import React from 'react'

const SingleBlog = () => {
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
  )
}

export default SingleBlog