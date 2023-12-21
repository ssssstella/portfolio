import React, { useEffect, useState } from 'react';
import "./about.css";
import client from "../../services/client";

export default function About() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "picture" && section == "about"] | order(_createdAt asc) {
        title,
        name,
        description,
        "imageUrl": image.asset->url
    }`).then((data) => {
      // console.log(data);
      setPictures(data);
    })
  }, [])

  return (
    <div className='about' id="about">
      <div className="container">
        <h1>I Know That <strong>Good Development</strong></h1>
        <h1>Means <strong>Good Developer</strong></h1>
        <div className='about--cards'>
          {pictures && pictures.map(item => {
            return (
              <div className='about--card' key={item.title}>
                <img src={item.imageUrl} alt={item.name} />
                <h5>{item.title}</h5>
                <p className='small-text'>{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
