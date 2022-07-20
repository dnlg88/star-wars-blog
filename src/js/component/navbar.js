import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import {FaRegTrashAlt} from 'react-icons/fa'

export const Navbar = () => {
	const {store,actions} = useContext(Context);
	const favorites = store.favorites
	return (
		<nav className="navbar px-2 navbar-expand-mb navbar-dark bg-dark text-warning">
			<h1>StarWars</h1>
			<Link className ="nav-link text-warning "to="/">Home</Link>
			<Link className ="nav-link text-warning "to="/people">People</Link>
			<Link className ="nav-link text-warning "to="/vehicles">Vehicles</Link>
			<Link className ="nav-link text-warning "to="/planets">Planets</Link>
			
			<div className="dropdown">
				<button className="d-flex btn btn-dark dropdown-toggle nav-favs"
				type="button"
				id="dropdownMenu"
				data-bs-toggle="dropdown"
				aria-expanded="false"
				>Favorites
					<div className="mx-2 px-2 bg-warning rounded">
					{}
				</div>
				</button>
				<ul className="mt-2 border-2 dropdown-menu dropdown-menu-dark"
					aria-labelledby="dropdownMenu"> 
					
					{favorites.map(element =>{
						return(<div className="listaFav">
							<li>{element}</li>
						<a className="trash" href="#" onClick={()=>actions.deleteFromFavorites(element)}>&nbsp;&nbsp;&nbsp;<FaRegTrashAlt/></a>
						</div>
						) 
					})}
				</ul>
			</div>

		</nav>
	);
};