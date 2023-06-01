import React from "react";
import './card.css';

export default (props) => {
  return (
    <div className="card">
      <div className="title">{props.titulo}</div>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
};
