import React from 'react';
import './Skills.css'

const Skills = ({habilities}) => {
  return (
  <div className="Skills">
  <div className="card">
  {habilities.map((item)=>{
      return (
        <div key={JSON.stringify(item)}>
        <p className="p__item">{item}</p>
        </div>
      )
  })}
  
    </div>

  </div>);
};

export default Skills;
