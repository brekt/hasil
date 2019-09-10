import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Circle = styled.div`
	border-radius: 50%;
	background-color: hsla(${props => props.color}, 100%, 50%, 1);
	width: ${props => props.diameter}px;
	height: ${props => props.diameter}px;
	margin: 10px;
`;

export default function Qubit({ color, diameter }) {
	return (
		<Circle
			color={color}
			diameter={diameter}
		/>
	);
}

Qubit.propTypes = {
	color: PropTypes.number,
	diameter: PropTypes.number
};
