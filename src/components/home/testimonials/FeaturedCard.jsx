import React,{useState,useEffect} from "react"
import { featured } from "../../data/Data"



const   FeaturedCard = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.vidhaalay.com/public/api/get-category')
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error('Error:', error));
  // }, []);
  // console.log(data)

  return (
    <>
      <div className='content grid4 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
                 <img src={items.cover} alt='' className='w-16 h-16' />
      <h4 className='text-[#14213d] font-bold mt-2'>{items.name}</h4> {/* primary color text */}
      <label className='text-[#fca311] mt-1 leading-tight'>{items.total}</label> {/* secondary color text */}
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
