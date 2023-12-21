import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import client from "../../services/client";

export default function Contact() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "picture" && section == "contact"] | order(_createdAt asc) {
        title,
        description,
        "imageUrl": image.asset->url
    }`).then((data) => {
      // console.log(data);
      setPictures(data);
    })
  }, [])

  const form = useRef();
  const formContent = document.getElementById('form-content');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          // alert(`message sent successfully.`);
          formContent.innerHTML = `<h1>Thank You For Getting In Touch!</h1>`;
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className='contact' id="contact">
      <div className="container">
        <h1>Take A Coffee & Chat With Me</h1>
        <div className='contact--channelBox'>
          {pictures && pictures.map(item => {
            return (
              <div key={item.title} className='contact--channel'>
                <img src={item.imageUrl} alt={item.title} />
                <p>{item.description}</p>
              </div>
            )
          })}
        </div>
        <form ref={form} className='contact--form' onSubmit={handleSubmit} id="form-content">
          <input type="text" id="name" name="name" placeholder="Your Name" />
          <input type="email" id="email" name="email" placeholder="Your Email" />
          <textarea id="message" name="message" placeholder="Your Message" rows="10" />
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}
