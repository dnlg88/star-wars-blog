import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import {FaRegHeart} from 'react-icons/fa';

export const PlanetCard = ({elementName, url}) => {
    const [PlanetInfo, SetPlanetInfo] = useState({})
    useEffect(()=>{
        getPlanetInfo()
    },[])

    const getPlanetInfo = ()=>{
        fetch(url)
        .then(resp => resp.json())
		.then(data =>{ 
            SetPlanetInfo(data.result.properties)})
            console.log(PlanetInfo)
        }
        
        return (<div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{elementName}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li className="list-group-item">Climate: {PlanetInfo.climate}</li>
            <li className="list-group-item">Population: {PlanetInfo.population}</li>
            <li className="list-group-item">Terrain: {PlanetInfo.terrain}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="btn btn-outline-primary">Learn more!</a>
          <a href="#" className="btn btn-outline-warning" onClick={()=>setFavorite(elementName)}> <FaRegHeart/> </a>
        </div>
        </div>
    )}