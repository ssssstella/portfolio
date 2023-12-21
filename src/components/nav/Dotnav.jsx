import React from 'react';
import { Link } from "react-scroll";
import "./dotnav.css";

export default function Dotnav() {
  const sections = ['hero', 'about', 'work', 'skill', 'contact'];

  return (
    <div className='dotnav'>
      <ul>
        {sections.map((ele, idx) => {
          return (
              <Link className='dot' activeClass='active-dot' smooth spy to={ele} key={idx}><li></li></Link>
          )
        })}
      </ul>
    </div>
  )
}
