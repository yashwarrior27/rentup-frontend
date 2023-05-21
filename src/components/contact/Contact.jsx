import React,{useState} from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  const [name, setName] = useState('');
  const [submit, setSubmit] = useState('nsubmit');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('https://api.vidhaalay.com/public/api/add-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Do something with the returned data
    console.log(data);
  };

  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' onSubmit={handleSubmit}>
            <h4>Fillup The Form</h4> <br />
            <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
            </div>
            <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" required />
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" cols='30' rows='10'></textarea>
            <button type="submit" onClick={setSubmit('submit')}>Submit Request</button>
            
          </form>
          {submit === 'submit' && 
            <>Success</> 
          }
        </div>
      </section>
    </>
  )
}

export default Contact
