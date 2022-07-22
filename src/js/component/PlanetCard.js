import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext';

import {FaRegHeart} from 'react-icons/fa';

export const PlanetCard = ({elementName, url}) => {
    const {store, actions} = useContext(Context)
    const [planetInfo, SetPlanetInfo] = useState([])

    const getPlanetInfo = (url) =>{
        fetch(url)
        .then(resp => resp.json())
        .then(data =>{ 
            SetPlanetInfo(data.result.properties)})
        }

    useEffect(()=>{
        getPlanetInfo()
    },[])

        return (<div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{elementName}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li className="list-group-item">Climate: {planetInfo.climate}</li>
            <li className="list-group-item">Population: {planetInfo.population}</li>
            <li className="list-group-item">Terrain: {planetInfo.terrain}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="btn btn-outline-primary">Learn more!</a>
          <a href="#" className="btn btn-outline-warning" onClick={()=>actions.setFavorite(elementName)}> <FaRegHeart/> </a>
        </div>
        </div>
    )}