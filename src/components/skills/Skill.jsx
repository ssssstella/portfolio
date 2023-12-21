import React, { useEffect, useState } from 'react';
import "./skill.css";
import client from "../../services/client";

export default function Skill() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "picture" && section == "skill"] | order(_createdAt asc) {
        title,
        description,
        "imageUrl": image.asset->url
    }`).then((data) => {
      // console.log(data);
      setPictures(data);
    })
  }, [])

  return (
    <div className="skill" id="skill">

      <div className="container">
        <h1>Skills & Experiences</h1>
        <div className='skill--box'>
          <div className='skill--icons'>
            {pictures && pictures.map(item => {
              return (
                <div className='skill--icon' key={item.title}>
                  <div>
                    <img src={item.imageUrl} alt={item.description} />
                  </div>
                  <p>{item.title}</p>
                </div>
              )
            })}
          </div>
          <div className='skill--timeline'>
            <div className="skill--timeline--box">
              <div className='skill--timeline--year'>
                <h5>2022-now</h5>
              </div>
              <div className="skill--timeline--experiences">
                <div className='skill--timeline--experience'>
                  <h5>Self-taught Frontend Developer</h5>
                </div>
              </div>
            </div>
            <div className="skill--timeline--box">
              <div className='skill--timeline--year'>
                <h5>2021-2023</h5>
              </div>
              <div className="skill--timeline--experiences">
                <div className='skill--timeline--experience'>
                  <h5>Customer Engineer</h5>
                  <p>XX Company</p>
                </div>
              </div>
            </div>
            <div className="skill--timeline--box">
              <div className='skill--timeline--year'>
                <h5>2019-2021</h5>
              </div>
              <div className="skill--timeline--experiences">
                <div className='skill--timeline--experience'>
                  <h5>Cloud Support Engineer</h5>
                  <p>XX Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
