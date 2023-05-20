import React,{useState,useEffect} from "react"
import { featured } from "../../data/Data"



const FeaturedCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.vidhaalay.com/public/api/get-category')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);
  console.log(data)
  return (
    <>
      <div className='content grid4 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
