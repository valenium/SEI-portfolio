import "./ContactForm.css";
import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form data:', formData);
      // Here you would typically send the data to a server or email service
    };
  
    return (
      <div className="contact-form">
        <h1 className="text-pink-200 font-bebas text-6xl text-center">Contact</h1>
        <p>Feel free to reach out to me about anything or just to say hi!</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleChange} 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            value={formData.message} 
            onChange={handleChange} 
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;