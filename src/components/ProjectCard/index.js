import React from "react";
import "./style.css";

function PortfolioCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project Name: </strong>
            {props.name}
          </li>
          <li> 
            <strong>Live Page: </strong> <a href={props.link} >{props.name}</a>
            
          </li>
          <li> 
            <strong>Github Page:</strong> <a href={props.github}>{props.name}</a>
            
          </li>
          <li>
            <strong>Description: </strong> {props.description}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PortfolioCard;
