import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import {FaRegHeart} from 'react-icons/fa';

export const CharacterCard = ({elementName, url}) => {
    const [characterInfo, SetCharacterInfo] = useState({})
    useEffect(()=>{
        getCharacterInfo()
    },[])

    const getCharacterInfo = ()=>{
        fetch(url)
        .then(resp => resp.json())
		.then(data =>{ 
            SetCharacterInfo(data.result.properties)})
            console.log(characterInfo)
        }
        
        return (<div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{elementName}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li className="list-group-item">Gender: {characterInfo.gender}</li>
            <li className="list-group-item">Eye color: {characterInfo.eye_color}</li>
            <li className="list-group-item">Hair color: {characterInfo.hair_color}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="btn btn-outline-primary">Learn more!</a>
          <a href="#" className="btn btn-outline-warning" onClick={()=>setFavorite(elementName)}> <FaRegHeart/> </a>
        </div>
        </div>
    )}