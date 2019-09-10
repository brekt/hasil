import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getCombinedColors } from '../utils/color';
import Qubit from './Qubit';

const CombinationContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export default function Combination({ players }) {
	const combinedColor = getCombinedColors(players);
	return (
		<CombinationContainer>
			<Qubit
				color={combinedColor}
				diameter={200}
			/>
		</CombinationContainer>
	);
}

Combination.propTypes = {
	players: PropTypes.arrayOf(PropTypes.object)
};
