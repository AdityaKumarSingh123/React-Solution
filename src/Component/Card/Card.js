import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="box">
        <img
          src={props.image}
          alt={props.title}
        />
        <div className="box_content">
          <h3 className="title">Rent</h3>
          <span className="post">{props.rent}</span>
        </div>
        <ul className="icon">
          <li>{props.size}</li>
          <li>{props.situation}</li>
          <li>{props.location}</li>
        </ul>
      </div>

     
    </div>
  );
};

export default Card;


