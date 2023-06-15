import React,{useState} from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"
import useScrollToTop from "../hooks/useScrollToTop"

const Contact = () => {

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleClick = () => {
    setShowSuccessMessage(true);
  };
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [course, setCourse] = useState('');
  const [college, setCollege] = useState('');
  const [city, setCity] = useState('');
  const [success, setSuccess] = useState(false)
  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch(`https://antistatic-groan.000webhostapp.com/contact.php?email=${email}&name=${name}&phone=${contact}&course=${course}&colleges=${college}&cities=${city}&services=${propertyType}&message=${message}`).then((data)=>data.json()).then((data)=>console.log(data));
    setSuccess(true)
    // const response = await fetch('https://antistatic-groan.000webhostapp.com/contact.php', {
    //   method: 'POST',
      
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name: name,
    //     email: email,
    //     phone:contact,
    //     course : course,
    //     colleges: college,
    //     cities: city,
    //     services: propertyType,
    //     message: message,
    //   }),
    // });

    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }

    // const data = await response.json();

    // // Do something with the returned data
    // console.log(data);
  };
  useScrollToTop()
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
        <form className='bg-[#14213d] p-6 rounded-lg space-y-6 mt-16' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <input 
            className='px-3 py-2 rounded-md bg-gray-700 text-white placeholder-white w-full'
            type='text' 
            placeholder='Name' 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      <div className='flex flex-col'>
        <input 
          className='px-3 py-2 rounded-md bg-gray-700 text-white placeholder-white w-full'
          type='text' 
          placeholder='Contact' 
          value={contact} 
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <div className='flex flex-col'>
        <input 
          className='px-3 py-2 rounded-md bg-gray-700 text-white placeholder-white w-full'
          type='email' 
          placeholder='Email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='flex flex-col'>
        <input 
          className='px-3 py-2 rounded-md bg-gray-700 text-white placeholder-white w-full'
          type='course' 
          placeholder='Course' 
          value={course} 
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>
      <div className='flex flex-col'>
        <input 
          className='px-3 py-2 rounded-md bg-gray-700 text-white placeholder-white w-full'
          type='college' 
          placeholder='Target colleges' 
          value={college} 
          onChange={(e) => setCollege(e.target.value)}
        />
      </div>
      <div className='flex flex-col'>
        <input 
          className='px-3 py-2 rounded-md bg-gray-700 text-white placeholder-white w-full'
          type='city' 
          placeholder='Target cities' 
          value={city} 
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className='flex flex-col w-full'>
        <select 
          value={propertyType} 
          onChange={(e) => setPropertyType(e.target.value)} 
          className='px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 w-full'
          placeholder="Select Service"
          >
       
          <option value="counselling">counselling</option>
          <option value="accomodation">accomodation</option>
          <option value="entrance coaching">entrance coaching</option>
          <option value="scholarship">scholarship</option>
        </select>
      </div>
      <div className='flex flex-col'>
        <textarea 
          className='px-3 py-2 h-24 rounded-md bg-gray-700 text-white placeholder-gray-400'
          placeholder='Message' 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button onSubmit={handleSubmit} className='px-3 py-2 bg-white text-[#fca311] rounded-full' type="submit">Submit</button>

      
    </form>
          
        </div>
      </section>
    </>
  )
}

export default Contact


// import React, { useState } from 'react';

// const FormComponent = () => {
//   const [name, setName] = useState('');
//   const [contact, setContact] = useState('');
//   const [email, setEmail] = useState('');
//   const [propertyType, setPropertyType] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add form submission logic here
//   };

//   return (
//     <form className='bg-gray-200 p-6 rounded-lg space-y-6' onSubmit={handleSubmit}>
//       <div className='flex flex-col'>
//         <input 
//           className='px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400'
//           type='text' 
//           placeholder='Name' 
//           value={name} 
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className='flex flex-col'>
//         <input 
//           className='px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400'
//           type='text' 
//           placeholder='Contact' 
//           value={contact} 
//           onChange={(e) => setContact(e.target.value)}
//         />
//       </div>
//       <div className='flex flex-col'>
//         <input 
//           className='px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400'
//           type='email' 
//           placeholder='Email' 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div className='flex flex-col'>
//         <select 
//           value={propertyType} 
//           onChange={(e) => setPropertyType(e.target.value)} 
//           className='px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400'>
//           <option value="">Select Service</option>
//           <option value="type1">Type 1</option>
//           <option value="type2">Type 2</option>
//         </select>
//       </div>
//       <div className='flex flex-col'>
//         <textarea 
//           className='px-3 py-2 h-24 rounded-md bg-gray-700 text-white placeholder-gray-400'
//           placeholder='Message' 
//           value={message} 
//           onChange={(e) => setMessage(e.target.value)}
//         />
//       </div>
//       <button className='px-3 py-2 bg-blue-600 text-white rounded-md' type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormComponent;

