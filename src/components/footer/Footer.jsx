import React, { useEffect, useState } from 'react';
import "./footer.css";
import client from "../../services/client";

export default function Footer() {
  const yearNow = new Date().getFullYear();
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "picture" && section == "footer"] | order(_createdAt asc) {
          name,  
          title,
          description,
          "imageUrl": image.asset->url
      }`).then((data) => {
      // console.log(data);
      setPictures(data);
    })
  }, [])

  return (
    <div className='footer'>
      <div className='footer--socials'>
        <div className='footer--socials--logo'>
          {pictures && pictures.filter(item => item.name === "linkedin").map(item => {
            return (
              <a href={item.description} target='_blank' className={item.title} key={`${item.name}-${item.title}`}><img src={item.imageUrl} alt={item.name} /></a>
            )
          })}
        </div>
        <div className='footer--socials--logo'>
          {pictures && pictures.filter(item => item.name === "github").map(item => {
            return (
              <a href={item.description} target='_blank' className={item.title} key={`${item.name}-${item.title}`}><img src={item.imageUrl} alt={item.name} /></a>
            )
          })}
        </div>
      </div>
      <div>
        <p>&copy; {yearNow} Stella</p>
        <p>ALL RIGHTS RESERVED</p>
      </div>
    </div>
  )
}
