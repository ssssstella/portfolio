import React, { useEffect, useState } from 'react';
import "./work.css";
import { Eye, GithubLogo } from '@phosphor-icons/react';
import client from "../../services/client";

export default function Work() {
  const [tagValue, setTagValue] = useState('All');
  const [projects, setProjects] = useState([]);

  const tags = ['HTML', 'CSS', 'Javascript', 'ReactJS', 'Redux', 'NodeJS', 'All'];

  useEffect(() => {
    client.fetch(`*[_type == "project"] {
      name,
      title,
      description,
      "imageUrl": image.asset->url,
      projLink,
      githubLink,
      tags
    }`).then((data) => {
      // console.log(data);
      setProjects(data);
    })
  }, [])


  function filterByTag (project) {
    if (tagValue == tags[tags.length - 1] || project.tags.includes(tagValue)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className='work' id="work">
      <div className="container">
        <h1>My Creative <strong>Portfolio</strong> Section</h1>
        <div className='work--tags'>
          {tags.map(tag => {
            return (
              <button onClick={() => setTagValue(tag)} className={`work--tag ${tagValue === tag && 'tag--active'}`} key={tag}>{tag}</button>
            )
          })}
        </div>
        <div className='work--cards'>
          {projects && projects.filter(filterByTag).map(project => {
            return (
              <div className="work--card" key={project.name}>
                <div className='work--card--img'>
                  <img src={project.imageUrl} alt={project.name} />
                  <div className='work--card--img--mask'>
                    <a href={project.projLink} target='_blank'>
                      <div className='work--card--img--mask--logo'>
                        <Eye />
                      </div>
                    </a>
                    <a href={project.githubLink} target='_blank'>
                      <div className='work--card--img--mask--logo'>
                        <GithubLogo />
                      </div>
                    </a>
                  </div>
                </div>
                <div className='work--card--content'>
                  <p className='work--card--content--title'>{project.title}</p>
                  <p className="small-text work--card--content--text">{project.description}</p>
                  <div className='work--card--content--tag'>
                    <p className="small-text">{project.tags[0]}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
