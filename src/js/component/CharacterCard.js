import React, {useContext} from 'react'
import {Link} from "react-router-dom"

import { Context } from "../store/appContext";


const CharacterCard = () => {
    const { store, actions } = useContext(Context);
    const starWarsCharacters = store.people.map((character, i) =>{
        return (
            <div key={i} className='card col-sm-4'>
                <div className='card-header'>{character.name}</div>
                <img
          src=""
          className="card-img-top  card-Details rounded mx-auto d-block display-image-details display-image
           inside-borders-vehicle mt-3 mb-1"
          alt=""
                />
            <div className='card-text text-black card-body card-body-font-size inside-borders-vehicle px-3 py-2'>
                <dl className='row'>
                    <dt className='text-start'>Height:</dt>
                    <dd> {character.height} cm</dd>
                    <dt className='text-start'>Weight:</dt>
                    <dd> {character.mass} Kg</dd>
                    <dt className='text-start'>Hair color:</dt>
                    <dd> {character.hair_color} </dd>
                    <dt className='text-start'>Skin color:</dt>
                    <dd> {character.skin_color} </dd>
                    <dt className='text-start'>Eye color:</dt>
                    <dd> {character.eye_color} </dd>
                 </dl>
                 
                 <div className='d-flex my-1 flex-row justify-content-between align-items-center'>
                    <Link to='/details'>
                        <button className="btn bg-dark text-white rounded info-btn" onClick={() => actions.setDetails(character.url)}>
                        Details
                        </button>
                    </Link>

                    <button onClick={() => actions.addToFavorites(character.name, character.url)}
                            className='fas fa-heart text-danger btn fav-btn mt-2'>
                    </button>

                 </div>
            </div>

            </div>
        );      
    });


  return (
    <div className='container mt-5'>
        <div className='row'>{starWarsCharacter}</div>
    </div>
  )
}

export default People