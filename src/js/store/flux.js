const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
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
			setFavorite: (name)=>{
				let aux = [...getStore().favorites]
				aux.push(name);
				setStore({favorites: aux});
			}
		}
	};
};

export default getState;
