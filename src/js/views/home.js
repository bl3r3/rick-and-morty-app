import React, { useContext, useEffect } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardItems from "../component/CardItems.jsx";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<Container className="mt-5 pt-3">
				<Row>
					<Col>
						<h2>PEOPLE</h2>
					</Col>
				</Row>
				<Row className="overflow-auto flex-nowrap">
					{store.characters.map(character => (
						<Col xs={3} key={character.id}>
							<Card>
								<Card.Img variant="top" src={character.image} />
								<Card.Body>
									<Card.Title>{character.name}</Card.Title>
									<Link to={`/details/character/${character.id}`}>
										<Button>Read More!</Button>
									</Link>
									<Button variant="warning" onClick={() => actions.setfavorites(character.name)}>
										Fav
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>

			<Container className="mt-5">
				<Row>
					<Col>
						<h2>PLANETS</h2>
					</Col>
				</Row>
				<Row className="overflow-auto flex-nowrap">
					{store.locations.map(location => (
						<Col xs={3} key={location.id}>
							<Card>
								<Card.Img variant="top" src="https://via.placeholder.com/100" />
								<Card.Body>
									<Card.Title>{location.name}</Card.Title>
									<Link to={`/details/location/1`}>
										<Button>Read More!</Button>
									</Link>
									<Button variant="warning" onClick={() => actions.setfavorites(location.name)}>
										Fav
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>

			{/* <Container className="mt-5">
				<Row>
					<Col>
						<h2>PLANETS</h2>
					</Col>
				</Row>
				<Row className="overflow-auto flex-nowrap">
					{store.planets.map(planet => (
						<Col xs={3} key={planet.uid}>
							<Card>
								<Card.Img variant="top" src="https://via.placeholder.com/100" />
								<Card.Body>
									<Card.Title>{planet.name}</Card.Title>
									<Link to={`/details/planets/${planet.uid}`}>
										<Button>Read More!</Button>
									</Link>
									<Button variant="warning" onClick={() => actions.setfavorites(planet.name)}>
										Fav
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container> */}
		</div>
	);
};
