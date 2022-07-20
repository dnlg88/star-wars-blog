import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
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
					aria-labelledby="dropdownMenu"
					> {}
					<li>
					<Link className="px-1 nav-link text-white go-to-favs" to="/favorites"> My favorites</Link>
					</li>
				</ul>
			</div>

		</nav>
	);
};