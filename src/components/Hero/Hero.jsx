import React from "react";
import "./Hero.css";

 export const Hero = ({hero}) => {
  return (<div className="Hero">
      <img src={hero.image} alt={hero.name}/>
      <div className="card">
      <h2>
          {hero.name} 
      </h2>
      <p>{hero.city}</p>
      <p>{hero.birthDate}</p>
      <p>📨
      <a href={"mailto:" + hero.email}>cortinarcz@gmail.com</a>
      </p>
      <p>💾<a href={hero.gitHub}>GitHub</a>
      </p>
      
      </div>
  </div>);



};


