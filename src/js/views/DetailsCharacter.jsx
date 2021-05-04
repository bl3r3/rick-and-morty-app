import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Col, Row, Table } from "react-bootstrap";
import { Context } from "../store/appContext";

export const DetailsCharacter = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState(null);
	const { id, type } = useParams();

	useEffect(() => {
		const getResource = async () => {
			let response = await fetch(`https://rickandmortyapi.com/api/${type}/${id}`);
			let result = await response.json();
			setState(result);
		};
		getResource();
	}, []);

	return (
		<>
			{state && (
				<Container className="mt-5 pt-5">
					<Row>
						<Col xs={4}>
							<img src={state.image} className="w-100" />
						</Col>
						<Col xs={8}>
							<h2 className="text-center">{state.name}</h2>
							<p>Status: {state.status}</p>
							<p>Species: {state.species}</p>
							<p>Gender: {state.gender}</p>
							<p>Origin: {state.origin.name}</p>
							<p>Location: {state.location.name}</p>
						</Col>
					</Row>
				</Container>
			)}
		</>
	);
};
