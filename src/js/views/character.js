import React, { useContext} from 'react'

import { Context } from '../store/appContext';

export const Character = () => {
    const {store, actions} = useContext(Context)
        
    return (
    <div className="container-flex">
      <div className="container">
        <h1 className="text-center text-danger my-3">{store.characterInfo.name}</h1>
        <div className="row text-center my-5">
            <div className="col-md-5 ">
                <img className='' src={`https://starwars-visualguide.com/assets/img/characters/${store.id}.jpg`} width="450px"/>
                
            </div>
            <div className="col-md-7 py-2 text-light">
                <p><strong>{store.characterInfo.name}</strong>&nbsp; Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nam molestiae consectetur commodi doloribus eveniet tempore incidunt! Consequatur nostrum consectetur exercitationem molestias, deleniti eligendi consequuntur architecto alias nobis minima numquam enim voluptates vel aliquam commodi maxime est fugiat molestiae ad?</p>
            </div>
        </div>
    </div>
          <div className="row mt-4">
              <div className="d-flex flex-row justify-content-between">
                      <div className="col-sm-2 d-flex danger flex-column">
                          <div className="text-center text-danger">Height:</div>
                          <div className="text-center text-light"> {store.characterInfo.height} cm</div>
                      </div>
                      <div className="col-sm-2 d-flex flex-column">
                          <div className="text-center text-danger">Mass:</div>
                          <div className="text-center text-light">{store.characterInfo.mass} kg</div>
                      </div>
                      <div className="col-sm-2 d-flex flex-column">
                          <div className="text-center text-danger">Hair color:</div>
                          <div className="text-center text-light">{store.characterInfo.hair_color}</div>
                      </div>
                      <div className="col-sm-2 d-flex flex-column">
                          <div className="text-center text-danger">Skin color:</div>
                          <div className="text-center text-light">{store.characterInfo.skin_color}</div>
                      </div>
                      <div className="col-sm-2 d-flex flex-column">
                          <div className="text-center text-danger">Eye color:</div>
                          <div className="text-center text-light">{store.characterInfo.eye_color}</div>
                      </div>
               </div>
          </div>
      </div>
    )}