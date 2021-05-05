import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

//IMPORTS
import ListResidents from "../component/ListResidents.jsx";

export const DetailsLocation = () => {
	const [state, setState] = useState(null);
	const { id } = useParams();
	const history = useHistory();

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
					<button className="btn btn-outline-danger m-2" onClick={() => history.goBack()}>
						Go Back
					</button>
					<Row>
						<Col xs={6}>
							<img src="https://via.placeholder.com/300" className="w-100" />
						</Col>
						<Col xs={6}>
							<h2 className="text-center">{state.name}</h2>
							<ul>
								<li>Type: {state.type}</li>
								<li>Dimension: {state.dimension}</li>
								<li>
									Residents:
									<ListResidents residents={state.residents} />
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			)}
		</>
	);
};
