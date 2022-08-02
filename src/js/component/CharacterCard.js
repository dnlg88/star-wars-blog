import React, {useState, useEffect, useContext} from 'react'
import {FaRegHeart} from 'react-icons/fa';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export const CharacterCard = ({elementName, url, type}) => {
    const {store, actions} = useContext(Context)
    const [cardCharacterInfo, setCardCharacterInfo] = useState([])
    const [id, setId] = useState()

    const getCardCharacterInfo = () =>{
        fetch(url)
        .then(resp => resp.json())
        .then(data =>{
            setCardCharacterInfo(data.result.properties)
            setId(data.result.uid)
        })
        }

    useEffect(()=>{
        getCardCharacterInfo()
    },[])

    return (
        <div className="card" style={{width: "18rem"}}>
            <img id="characterImg" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
            className="card-img-top" 
            alt="card-image" />
            <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title text-center mb-3">{elementName}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li className="list-group-item text-muted text-truncate">Gender: {cardCharacterInfo.gender}</li>
                <li className="list-group-item text-muted text-truncate">Eye color: {cardCharacterInfo.eye_color}</li>
                <li className="list-group-item text-muted text-truncate">Hair color: {cardCharacterInfo.hair_color}</li>
            </ul>
            <div className="card-body">
                <Link to={`/${type}/${cardCharacterInfo.name}`} onClick={()=> actions.getCharacterInfo(url)}><a href="#" className="btn btn-outline-primary">Learn more!</a></Link>
                <a href="#" className="btn btn-outline-warning float-end" onClick={()=>actions.setFavorite(cardCharacterInfo.name, type, cardCharacterInfo.url)}> <FaRegHeart/> </a>
            </div>
        </div>


    )}

