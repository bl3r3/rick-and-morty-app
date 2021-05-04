import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import PropType from "prop-types";

export const CardItems = ({ title }) => {
	return (
		<div>
			<Container>
				<Row>
					<Col>
						<h2>{title}</h2>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

CardItems.propTypes = {
	title: PropType.string
};
