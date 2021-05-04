import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Col, Row, Table } from "react-bootstrap";
import { Context } from "../store/appContext";

export const DetailsLocation = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState(null);
	const [resident, setResident] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const getResource = async () => {
			let response = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
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
							<img src="" className="w-100" />
						</Col>
						<Col xs={8}>
							<h2 className="text-center">{state.name}</h2>
							<ul>
								<li>Type: {state.type}</li>
								<li>Dimension: {state.dimension}</li>
								<li>
									Residents:
									{state.residents.map((r, i) => (
										<ul key={i}>
											<li>{r}</li>
										</ul>
									))}
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			)}
		</>
	);
};
