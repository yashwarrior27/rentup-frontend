import React,{useEffect,useState} from "react"
import { useLocation } from 'react-router-dom';
import { list } from "../../data/Data"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const  RecentCard = () => {
  const [properties, setProperties] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const loc = queryParams.get('location');
    const propertyType = queryParams.get('propertyType');

    // eslint-disable-next-line no-lone-blocks
    
    fetch('https://api.vidhaalay.com/public/api/get-listing')
    .then((response) => response.json())
    .then((data) => {
      const filteredProperties = data.data.filter((property) => {
        // If no location or propertyType is specified, show all properties
        if (!loc && !propertyType) {
          return true;
        }
        // If a location is specified, match it; if not, ignore it
        const matchLocation = loc ? property.address === loc : true;
        // If a propertyType is specified, match it; if not, ignore it
        const matchPropertyType = propertyType ? property.type === propertyType : true;

        // A property is included if it matches both the location and the property type
        return matchLocation && matchPropertyType;
      });
      setProperties(filteredProperties);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}, [location.search]);
  // const res = data.data
  const loading = true
  console.log(properties ?? [])
  // data.success
  
  // const [properties, setProperties] = useState([]);
  // const { location, propertyType } = new URLSearchParams(useLocation().search);

  // useEffect(() => {
  //   fetch('https://api.vidhaalay.com/public/api/get-listing')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const filteredProperties = data.data.filter(
  //         (property) =>
  //           property.address.includes(location) && property.type === propertyType
  //       );
  //       setProperties(filteredProperties);
  //     });
  // }, [location, propertyType]);
  return (
    <>
      <div className='content grid3 mtop'>

        {loading===true && properties.map((val, index) => {
          const { image,id, category, address, title, price, type } = val
          return (
            <>
            
            <div className='box shadow' key={id}>
            <Link to={`/single-blog/${id}`}>
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
              </Link>
            </div>
         
            </>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
