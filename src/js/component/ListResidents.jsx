import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Resident = ({ url }) => {
	const [resident, setResident] = useState();
	useEffect(() => {
		const getResident = async () => {
			const result = await (await fetch(url)).json();
			setResident(result);
		};

		getResident();
	}, [url]);

	if (!resident) {
		return (
			<>
				<span>loading</span>
			</>
		);
	}

	return <li>{resident.name}</li>;
};

const ListResidents = ({ residents }) => {
	return (
		<div>
			<ul>
				{residents.map((e, i) => (
					<Resident url={e} key={i} />
				))}
			</ul>
		</div>
	);
};

Resident.propTypes = {
	url: PropTypes.string
};
ListResidents.propTypes = {
	residents: PropTypes.array
};

export default ListResidents;
