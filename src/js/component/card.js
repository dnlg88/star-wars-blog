import React from "react";

export const Card = ({url, elementName}) => {
	return(
	<div className="card" style={{width: "18rem"}}>
	<img src="..." className="card-img-top" alt="..." />
	<div className="card-body">
	  <h5 className="card-title">{elementName}</h5>
	  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	</div>
	<div className="card-body">
	  <a href="#" className="btn btn-success">Learn more!</a>
	  <a href="#" className="card-link">Another link</a>
	</div>
	</div>
)}