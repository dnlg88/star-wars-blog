import React, { useEffect, useContext} from 'react'
import {Link} from "react-router-dom"
import {FaRegHeart} from 'react-icons/fa';
import { Context } from '../store/appContext';

export const VehicleCard = ({elementName, url}) => {
    const {store, actions} = useContext(Context)
    
    useEffect(()=>{
        actions.getVehicleInfo(url)
    },[])

    const 
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
                                  <div className="text-center text-danger">Model:</div>
                                  <div className="text-center"> {store.vehicleInfo.model}</div>
                              </div>
                              <div className="col-sm-2 d-flex flex-column">
                                  <div className="text-center text-danger">Manufacturer:</div>
                                  <div className="text-center">{store.vehicleInfo.manufacturer}</div>
                              </div>
                              <div className="col-sm-2 d-flex flex-column">
                                  <div className="text-center text-danger">Length:</div>
                                  <div className="text-center">{store.vehicleInfo.length}</div>
                              </div>
                              <div className="col-sm-2 d-flex flex-column">
                                  <div className="text-center text-danger">Crew:</div>
                                  <div className="text-center">{store.vehicleInfo.crew}</div>
                              </div>
                              <div className="col-sm-2 d-flex flex-column">
                                  <div className="text-center text-danger">Passengers:</div>
                                  <div className="text-center">{store.vehicleInfo.passengers}</div>
                              </div>
                       </div>
                  </div>
              </div>
)}