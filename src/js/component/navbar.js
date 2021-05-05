import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 fixed-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						{`Favorites ${store.favorites.length}`}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{store.favorites == 0 ? (
							<></>
						) : (
							store.favorites.map((fav, i) => (
								<Dropdown.Item
									href={
										fav.type === "character"
											? `/details/character/${fav.id}`
											: `/details/location/${fav.id}`
									}
									key={i}>
									{fav.name}
									<span style={{ fontSize: "3rem" }} onClick={() => actions.deleteFavorite(fav)}>
										✖
									</span>
								</Dropdown.Item>
							))
						)}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
