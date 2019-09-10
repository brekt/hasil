import React, { Fragment, useContext } from 'react';
import { AppContext } from '../state';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getRandomColor } from '../utils/color';
import Qubit from './Qubit';
import { actions } from '../state/index';

const PlayerName = styled.h2``;

export default function Side({ player }) {
	const { dispatch } = useContext(AppContext);
	let color;
	if (!player.color) {
		color = getRandomColor();
		dispatch({
			type: actions.CHOOSE_COLOR,
			payload: {
				color,
				id: player.id
			}
		});
	} else {
		color = player.color;
	}

	return (
		<Fragment>
			<PlayerName>{player.name}</PlayerName>
			<Qubit
				color={color}
				diameter={400}
			/>
		</Fragment>
	);
}

Side.propTypes = {
	dispatch: PropTypes.func,
	player: PropTypes.object
};
