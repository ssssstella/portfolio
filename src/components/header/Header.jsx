import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import "./header.css";
import client from "../../services/client";

export default function Header() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "picture" && name == "logo"] {
        title,
        description,
        "imageUrl": image.asset->url
    }`).then((data) => {
      // console.log(data);
      setPictures(data);
    })
  }, [])

  return (
    <div className='header'>
      {pictures && pictures.map(item => {
        return (
          <div className='header--logo' key={item.title}>
            <img src={item.imageUrl} alt={item.title} />
            <h5>{item.description}</h5>
          </div>
        )
      })}

      <ul className='header--nav'>
        <li>
          <Link activeClass='active' smooth spy to="hero">HOME</Link>
        </li>
        <li>
          <Link activeClass='active' smooth spy to="about">ABOUT</Link>
        </li>
        <li>
          <Link activeClass='active' smooth spy to="work">WORK</Link>
        </li>
        <li>
          <Link activeClass='active' smooth spy to="skill">SKILL</Link>
        </li>
        <li>
          <Link activeClass='active' smooth spy to="contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  )
}
