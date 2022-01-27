import React from 'react';
import "./Education.css";

export const Education = ({education}) => {
  return( 
  <div className="education_container">
   <div className="education_card">
    {education.map((item) =>{
        return (
            <div className="education_card2" key={JSON.stringify(item)}>
                <p className="name">📕 {item.name}</p>
                <p>{item.where}</p>
                <p>{item.date}</p>
            </div>
        );
    })}
   </div>   
  </div>);
};


