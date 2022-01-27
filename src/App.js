import { Hero } from "./components/Hero/Hero.jsx";
import { Education } from "./components/Education/Education";
import {Experience} from "./components/Experience/Experience";
import { Languages } from "./components/Languages/Languages";

import "./App.css";
import { useState } from "react";

import { CV } from "./CV/CV";
import Skills from "./components/Skills/Skills.jsx";
const { hero, education, experience, languages, habilities } = CV;
// languages, habilities, volunteer
function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="container"> 
   
      <Hero hero={hero} />
     
      <div className="pcontainer">
        <p className="pcontainer_1">About Me!</p>
      </div>
     <div className="btn"> 
      <button
        className="custom-btn"
        onClick={() => setShowEducation(true)}
      >
        Education
      </button>
      <button
        className="custom-btn"
        onClick={() => setShowEducation(false)}
      >
        Experience
      </button>
      </div>
      

      <div className="show__item">
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>

      <div className="pcontainer">
        <p className="pcontainer_1">Languages!</p>
      </div>
      <div className="languages_container">
      <Languages languages={languages} />
      </div>
      <div>

      <div className="pcontainer">
        <p className="pcontainer_2">Habilities!</p>
      </div>
      <div className="skill_container">
      <Skills habilities={habilities}/>
      </div>
      </div>

   





    </div>
  );
}

export default App;
