import React from 'react';
import './Experience.css'


export const Experience = ({experience}) => {
  return (
<div className="container_card">
   <div className="experience_card">
    {experience.map((item) =>{
        return (
            <div className="experience_card1" key={JSON.stringify(item)}>
                <p className="name">🗂 {item.name}</p>
                <p>{item.date}</p>
                <p>{item.where}</p>
                <p>{item.description}</p>
                
            </div>
        );
    })}
   </div>   
  </div>);
}


