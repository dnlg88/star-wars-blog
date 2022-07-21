import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"


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

    return (
    <div className="container-flex">
      <div className="container">
        <h1 className="text-center text-danger my-3">{elementName}</h1>
        <div className="row text-center my-5">
            <div className="col-md-5 ">
                <img className='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwOz3a33cWd_HESuK3jWUf28DZH0PhGvUng&usqp=CAU' src="" width="450px"/>
                
            </div>
            <div className="col-md-7 py-2">
                <p><strong>{elementName}</strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nam molestiae consectetur commodi doloribus eveniet tempore incidunt! Consequatur nostrum consectetur exercitationem molestias, deleniti eligendi consequuntur architecto alias nobis minima numquam enim voluptates vel aliquam commodi maxime est fugiat molestiae ad?</p>
            </div>
        </div>
    </div>
          <div className="row mt-4">
              <div className="d-flex flex-row justify-content-between">
                      <div className="col-sm-2 d-flex danger flex-column">
                          <div className="text-center text-danger">Climate:</div>
                          <div className="text-center"> {PlanetInfo.climate} </div>
                      </div>
                      <div className="col-sm-2 d-flex flex-column">
                          <div className="text-center text-danger">Population:</div>
                          <div className="text-center">{PlanetInfo.population} hab.</div>
                      </div>
                      <div className="col-sm-2 d-flex flex-column">
                          <div className="text-center text-danger">Terrain:</div>
                          <div className="text-center">{PlanetInfo.terrain}</div>
                      </div>
                      <div className="col-sm-2 d-flex flex-column">
                          <div className="text-center text-danger">Orbital Period</div>
                          <div className="text-center">{PlanetInfo.orbital_period} days</div>
                      </div>
                      <div className="col-sm-2 d-flex flex-column">
                          <div className="text-center text-danger">Rotation Period:</div>
                          <div className="text-center">{PlanetInfo.rotation_period} hours</div>
                      </div>
               </div>
          </div>
      </div>
    )}