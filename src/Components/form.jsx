import React from 'react'
import '../styles/form.css';
const form = () => {
  return (
  <div className='Form'>   <form className="contact-form">
        <input type="text" placeholder="Name" className="form-input" required />
        <input type="email" placeholder="Email" className="form-input" required />
        <input type="tel" placeholder="Phone Number" className="form-input" required />
        <button type="submit" className="form-submit">Submit</button>
      </form>
      </div>
  )
}

export default form