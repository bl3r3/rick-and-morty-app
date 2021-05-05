import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Badge } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Heart } from "react-bootstrap-icons";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 fixed-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Dropdown>
					<Dropdown.Toggle variant="danger" id="dropdown-basic">
						Favorites <Heart /> <Badge variant="light">{store.favorites.length}</Badge>
					</Dropdown.Toggle>
					<Dropdown.Menu style={{ minWidth: "15rem" }}>
						<ul>
							{store.favorites == 0 ? (
								<li style={{ fontSize: "1.3rem", listStyle: "none" }}>{"(Empty)"}</li>
							) : (
								store.favorites.map((fav, i) => (
									<li key={i} style={{ fontSize: "1.3rem", listStyle: "none" }}>
										<Link
											to={
												fav.type === "character"
													? `/details/character/${fav.id}`
													: `/details/location/${fav.id}`
											}>
											{fav.name}
										</Link>
										<span
											style={{ fontSize: "1.2rem", cursor: "pointer" }}
											onClick={() => actions.deleteFavorite(fav)}>
											✖
										</span>
									</li>
								))
							)}
						</ul>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
