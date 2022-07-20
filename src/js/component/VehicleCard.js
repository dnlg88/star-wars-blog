import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import {FaRegHeart} from 'react-icons/fa';

export const VehicleCard = ({elementName, url}) => {
    const [VehicleInfo, SetVehicleInfo] = useState({})
    useEffect(()=>{
        getVehicleInfo()
    },[])

    const getVehicleInfo = ()=>{
        fetch(url)
        .then(resp => resp.json())
		.then(data =>{ 
            SetVehicleInfo(data.result.properties)})
            console.log(VehicleInfo)
        }
        
        return (<div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{elementName}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li className="list-group-item">Model: {VehicleInfo.model}</li>
            <li className="list-group-item">Manufacturer: {VehicleInfo.manufacturer}</li>
            <li className="list-group-item">Length: {VehicleInfo.length}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="btn btn-outline-primary">Learn more!</a>
          <a href="#" className="btn btn-outline-warning" onClick={()=>setFavorite(elementName)}> <FaRegHeart/> </a>
        </div>
        </div>
    )}