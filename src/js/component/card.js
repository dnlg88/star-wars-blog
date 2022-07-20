import React from "react";
import {FaRegHeart} from 'react-icons/fa';

export const Card = ({url, elementName}) => {
	return(
	<div className="card" style={{width: "18rem"}}>
	<img src="..." className="card-img-top" alt="..." />
	<div className="card-body">
	  <h5 className="card-title">{elementName}</h5>
	</div>
	<div className="card-body">
	  <a href="#" className="btn btn-outline-primary">Learn more!</a>
	  <a href="#" className="btn btn-outline-warning"> <FaRegHeart/> </a>
	</div>
	</div>
)}