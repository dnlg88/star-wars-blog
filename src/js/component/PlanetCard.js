import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import {FaRegHeart} from 'react-icons/fa';

export const PlanetCard = ({elementName, url, type}) => {
    const {store, actions} = useContext(Context)
    const [cardPlanetInfo, setCardPlanetInfo] = useState([])
    const [id, setId] = useState()

    const getCardPlanetInfo = () =>{
        fetch(url)
        .then(resp => resp.json())
        .then(data =>{ 
            setCardPlanetInfo(data.result.properties)
            setId(data.result.uid)
            })
        }

    useEffect(()=>{
        getCardPlanetInfo()
    },[])

        return (<div className="card" style={{width: "18rem"}}>
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{elementName}</h5>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Climate: {cardPlanetInfo.climate}</li>
            <li className="list-group-item">Population: {cardPlanetInfo.population}</li>
            <li className="list-group-item">Terrain: {cardPlanetInfo.terrain}</li>
        </ul>
        <div className="card-body">
          <Link to={`/${type}/${cardPlanetInfo.name}`} onClick={()=>actions.getPlanetInfo(url)}><a href="#" className="btn btn-outline-primary">Learn more!</a></Link>
          <a href="#" className="btn btn-outline-warning" onClick={()=>actions.setFavorite(elementName)}> <FaRegHeart/> </a>
        </div>
        </div>
    )}