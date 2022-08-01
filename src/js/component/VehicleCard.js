import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../store/appContext';
import {FaRegHeart} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const VehicleCard = ({elementName, url, type}) => {
    const {store, actions} = useContext(Context)
    const [vehicleCardInfo, setVehicleCardInfo] = useState([])
    const [id, setId] = useState()

    const getVehicleCardInfo= () => {
        fetch(url)
        .then(resp => resp.json())
        .then(data =>{ 
            setVehicleCardInfo(data.result.properties)
            setId(data.result.uid)
            })
        }

    useEffect(()=>{
        getVehicleCardInfo()
    },[])

        return (<div className="card" style={{width: "18rem"}}>
        <img id="vehicleImg"src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{elementName}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li className="list-group-item">Model: {vehicleCardInfo.model}</li>
            <li className="list-group-item">Manufacturer: {vehicleCardInfo.manufacturer}</li>
            <li className="list-group-item">Length: {vehicleCardInfo.length}</li>
        </ul>
        <div className="card-body">
        <Link to={`/${type}/${vehicleCardInfo.name}`} onClick={()=>actions.getVehicleInfo(url)}><a href="#" className="btn btn-outline-primary">Learn more!</a></Link>
          <a href="#" className="btn btn-outline-warning float-end" onClick={()=>actions.setFavorite(vehicleCardInfo.name, type, vehicleCardInfo.url)}> <FaRegHeart/> </a>
        </div>
        </div>
    )}