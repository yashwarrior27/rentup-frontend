import React,{useEffect,useState} from "react"
import { list } from "../../data/Data"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const  RecentCard = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.vidhaalay.com/public/api/get-listing')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);
  
  const res = data.data
  const loading = data.success
  console.log(loading)
  return (
    <>
      <div className='content grid3 mtop'>

        {loading===true && res.map((val, index) => {
          const { image,id, category, address, title, price, type } = val
          return (
            <>
            <Link to='/single-blog'>
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={'../images/list/p-1.png'} alt='../images/list/p-1.png' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{title}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {address}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
            </Link>
            </>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
