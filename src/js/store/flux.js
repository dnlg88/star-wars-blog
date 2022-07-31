const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
			characterInfo: [],
			planetInfo: [],
			vehicleInfo: [],
			id: 0
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: ()=>{
				fetch("https://www.swapi.tech/api/people/")
				.then(res => {
					if(res.ok){
						return res.json()
					} else {
						throw new Error("Error cargando los personajes")
					}
					})
				.then(dataChars=>{
					let chars = dataChars.results;
					setStore({characters: chars})
				})
				.catch(error=>console.log(error))
			},
			getPlanets: ()=>{
				fetch("https://www.swapi.tech/api/planets/")
				.then(res => {
					if(res.ok){
						return res.json()
					} else {
						throw new Error("Error cargando los planetas")
					}
					})
				.then(dataPlans=>{
					let plans = dataPlans.results;
					setStore({planets: plans})
				})
				.catch(error=>console.log(error))
			},
			getVehicles: ()=>{
				fetch("https://www.swapi.tech/api/vehicles/")
				.then(res => {
					if(res.ok){
						return res.json()
					} else {
						throw new Error("Error cargando los vehiculos")
					}
					})
				.then(dataVecs=>{
					let vecs = dataVecs.results;
					setStore({vehicles: vecs})
				})
				.catch(error=>console.log(error))
			},
			fetchAll: ()=>{
				getActions().getCharacters();
				getActions().getPlanets();
				getActions().getVehicles();
				console.log(getStore())
			},
			setFavorite: (name, type, url)=>{
				let aux = [...getStore().favorites]
				let isRepeated = false
				aux.map(element => {
					if (element.name == name){
						isRepeated = true
					}
				})
				if(!isRepeated){
					aux.push({name: name, type:type, url});
					setStore({favorites: aux});
				}
			},

			deleteFromFavorites: (name) => {
				const delFav = getStore().favorites.filter((fav) => fav !== name)
				setStore({favorites: delFav})
			},
			getCharacterInfo: (url) => {
				fetch(url)
				.then(resp => resp.json())
				.then(data =>{ 
					setStore({characterInfo: data.result.properties})
					setStore({id:data.result.uid})
					})
				},
			getPlanetInfo: (url) => {
				fetch(url)
				.then(resp => resp.json())
				.then(data =>{ 
					setStore({planetInfo: data.result.properties})
					setStore({id:data.result.uid})
					})
				},
			getVehicleInfo: (url) => {
				fetch(url)
				.then(resp => resp.json())
				.then(data =>{ 
					setStore({vehicleInfo: data.result.properties})
					setStore({id:data.result.uid})
					})
				}
		}
	};
};

export default getState;
