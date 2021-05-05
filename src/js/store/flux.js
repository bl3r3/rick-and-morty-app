const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			locations: [],
			residents: [],
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
			setfavorites: name => {
				let store = getStore();
				// if (!store.favorites.includes(name)) {
				// 	let result = store.favorites;
				// 	result.push(name);
				// 	setStore({ favorites: result });
				// }
				let result = store.favorites;
				result.push(name);
				setStore({ favorites: result });
			},
			deleteFavorite: name => {
				let store = getStore();
				const filterFav = store.favorites.filter(favoritos => favoritos != name);
				setStore({ favorites: filterFav });
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
