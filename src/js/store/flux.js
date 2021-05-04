const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			locations: [],
			planets: [],
			details: [],
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getCharacters: async () => {
				let response = await fetch("https://rickandmortyapi.com/api/character");
				let body = await response.json();
				setStore({ characters: body.results });
			},
			getLocations: async () => {
				let response = await fetch("https://rickandmortyapi.com/api/location");
				let body = await response.json();
				setStore({ locations: body.results });
			},
			// getPlanets: async () => {
			// 	let response = await fetch("https://www.swapi.tech/api/planets");
			// 	let body = await response.json();
			// 	setStore({ planets: body.results });
			// },
			setfavorites: name => {
				let store = getStore();
				let result = store.favorites.push(name);
				setStore(result);
			},
			deleteFavorite: fav => {
				let store = getStore();
				console.log(store.favorites);
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
