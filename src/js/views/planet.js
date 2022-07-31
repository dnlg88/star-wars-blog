import React, { useContext, useEffect} from 'react'
import { Context } from '../store/appContext'


export const Planet = () => {
    const { store, actions } = useContext(Context)

    return (
    <div className="container-flex">
      <div className="container">
        <h1 className="text-center text-danger my-3">{store.planetInfo.name}</h1>
        <div className="row text-center my-5">
            <div className="col-md-5 ">
                <img className='' src={`https://starwars-visualguide.com/assets/img/planets/${store.id}.jpg`} width="450px"/>
                
            </div>
            <div className="col-md-7 py-2">
                <p><strong>{store.planetInfo.name}</strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nam molestiae consectetur commodi doloribus eveniet tempore incidunt! Consequatur nostrum consectetur exercitationem molestias, deleniti eligendi consequuntur architecto alias nobis minima numquam enim voluptates vel aliquam commodi maxime est fugiat molestiae ad?</p>
            </div>
        </div>
    </div>
          <div className="row mt-4">
              <div className="d-flex flex-row justify-content-between">
                      <div className="col-sm-2 d-flex danger flex-column">
                          <div className="text-center text-danger">Climate:</div>
                          <div className="text-center"> {store.planetInfo.climate} </div>
                      </div>
                      <div className="col-sm-2 d-flex flex-column">
                          <div className="text-center text-danger">Population:</div>
                          <div className="text-center">{store.planetInfo.population} hab.</div>
                      </div>
                      <div className="col-sm-2 d-flex flex-column">
                          <div className="text-center text-danger">Terrain:</div>
                          <div className="text-center">{store.planetInfo.terrain}</div>
                      </div>
                      <div className="col-sm-2 d-flex flex-column">
                          <div className="text-center text-danger">Orbital Period</div>
                          <div className="text-center">{store.planetInfo.orbital_period} days</div>
                      </div>
                      <div className="col-sm-2 d-flex flex-column">
                          <div className="text-center text-danger">Rotation Period:</div>
                          <div className="text-center">{store.planetInfo.rotation_period} hours</div>
                      </div>
               </div>
          </div>
      </div>
    )}