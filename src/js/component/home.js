import React from "react";
import PropTypes from "prop-types";

import { Counter } from "./counter";
import { Options } from "./options";

//create your first component
export const Home = props => {
	return (
		<>
			<Counter value={props.value} />
		</>
	);
};

Home.propTypes = {
	value: PropTypes.number
};
