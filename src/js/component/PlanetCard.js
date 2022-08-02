import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import {FaRegHeart} from 'react-icons/fa';

export const PlanetCard = ({elementName, url, type, uid}) => {
    const {store, actions} = useContext(Context)
    const [cardPlanetInfo, setCardPlanetInfo] = useState([])
    const [img, setImg] = useState("https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2018/11/mars-sunrise.jpg?quality=90&strip=all&ssl=1")

    const getCardPlanetInfo = () =>{
        fetch(url)
        .then(resp => resp.json())
        .then(data =>{ 
            setCardPlanetInfo(data.result.properties)
            })
        }
    
    const getPlanetImage = () => {
        let imgUrl = `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`
        fetch(imgUrl)
        .then((resp) =>{
            console.log(resp.ok)
            if(resp.ok){
                setImg(imgUrl)
            }
        })
    }

    useEffect(()=>{
        getCardPlanetInfo()
        getPlanetImage()
    },[])

        return (
        <div className="card" style={{width: "18rem"}}>
            <img id="planetImg"src={img} className="card-img-top"/>
            <div className="card-body">
            <h5 className="card-title">{elementName}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-muted text-truncate">Climate: {cardPlanetInfo.climate}</li>
                <li className="list-group-item text-muted text-truncate">Population: {cardPlanetInfo.population}</li>
                <li className="list-group-item text-muted text-truncate">Terrain: {cardPlanetInfo.terrain}</li>
            </ul>
            <div className="card-body">
                <Link to={`/${type}/${cardPlanetInfo.name}`} onClick={()=>actions.getPlanetInfo(url)}><a href="#" className="btn btn-outline-primary">Learn more!</a></Link>
                <a href="#" className="btn btn-outline-warning float-end" onClick={()=>actions.setFavorite(cardPlanetInfo.name, type, cardPlanetInfo.url)}> <FaRegHeart/> </a>
            </div>
        </div>
    )}