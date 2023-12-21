import React, { useEffect, useState } from 'react';
import "./hero.css";
import client from "../../services/client";

export default function Hero() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "picture" && section == "hero"] | order(_createdAt asc) {
        title,
        description,
        "imageUrl": image.asset->url
    }`).then((data) => {
      // console.log(data);
      setPictures(data);
    })
  }, [])




  return (
    <div className="hero" id="hero" style={{ backgroundImage: pictures ? `url(${pictures.filter(item => item.title === 'circle-scatter').map(item => item.imageUrl)[0]})` : '' }}>
      <div className='hero--container'>
        <div className='hero--desc'>
          <div className='hero--desc--box'>
            <h1>👋</h1>
            <div>
              <p>Hello, I am</p>
              <h1>Stella</h1>
            </div>
          </div>
          <div className='hero--desc--box'>
            <p>FRONTEND ENGINEER</p>
            <p>BACKEND ENGINEER</p>
            <p>DATA ENGINEER</p>
            <p>FULLSTACK DEVELOPER</p>
          </div>
        </div>

        {pictures && pictures.filter(item => item.title === 'profile').map(item => {
          return (
            <img key={item.title} className='hero--profile' src={item.imageUrl} alt={item.title} />
          )
        })}

        <div className='hero--tech'>
          {pictures && pictures.filter(item => item.description !== 'background').map(item => {
            return (
              <div className='hero--tech--logo' key={item.title}>
                <img src={item.imageUrl} alt={item.description} />
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}
