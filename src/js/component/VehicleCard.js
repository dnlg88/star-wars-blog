import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../store/appContext';
import {FaRegHeart} from 'react-icons/fa';

export const VehicleCard = ({elementName, url}) => {
    const {store, actions} = useContext(Context)
    const [vehicleInfo, SetVehicleInfo] = useState([])

    const getVehicleInfo= () => {
        fetch(url)
        .then(resp => resp.json())
        .then(data =>{ 
            SetVehicleInfo(data.result.properties)})
        }

    useEffect(()=>{
        getVehicleInfo()
    },[])

        return (<div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{elementName}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li className="list-group-item">Model: {vehicleInfo.model}</li>
            <li className="list-group-item">Manufacturer: {vehicleInfo.manufacturer}</li>
            <li className="list-group-item">Length: {vehicleInfo.length}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="btn btn-outline-primary">Learn more!</a>
          <a href="#" className="btn btn-outline-warning" onClick={()=>actions.setFavorite(elementName)}> <FaRegHeart/> </a>
        </div>
        </div>
    )}