import React from 'react';
import "./Languages.css";

export const Languages = ({languages}) => {
  return(
    <div className="languages">
    <div className="card">
    <p>{languages.language}</p>
    <p>{languages.wrlevel}</p>
    <p>{languages.splevel}</p>

    </div>

  </div>);
};


