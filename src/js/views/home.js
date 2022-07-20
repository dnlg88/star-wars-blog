import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {
	const {store, action} = useContext(Context)
	let [people, planets, vehicles] = [store.characters, store.planets, store.vehicles]
	return(
		<div className="container">
			<h1 className="mainChar category">Characters</h1>
			<div className="scroll">
				<ul style={{display: "flex"}}>
					{people.map((element, i) => {
					return <Card key={i} elementName={element.name} url={element.url} />	
				})}
				</ul>
			</div>
			<h1 className="category">Planets</h1>
			<div className="scroll">	
			<ul style={{display: "flex"}}>
				{planets.map((element, i) => {
					return <Card key={i} elementName={element.name} url={element.url} />	
				})}
			</ul>
			</div>
			<h1 className="category">Vehicles</h1>
			<div className="scroll">
				<ul style={{display: "flex"}}>
					{vehicles.map((element, i) => {
					return <Card key={i} elementName={element.name} url={element.url} />	
				})}
				</ul>
			</div>
	</div>
	)
	
	}
