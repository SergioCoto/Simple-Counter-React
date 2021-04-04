import React from "react";
import PropTypes from "prop-types";

export const Counter = props => {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div>{Math.floor(props.value / 100000) % 10}</div>
			<div>{Math.floor(props.value / 10000) % 10}</div>
			<div>{Math.floor(props.value / 1000) % 10}</div>
			<div>{Math.floor(props.value / 100) % 10}</div>
			<div>{Math.floor(props.value / 10) % 10}</div>
			<div>{props.value % 10}</div>
		</div>
	);
};

Counter.propTypes = {
	value: PropTypes.number
};
