import React from "react";
import "./comp.css";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.urlToImage} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
