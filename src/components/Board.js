import React, { useContext } from 'react';
import { AppContext } from '../state';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Side from './Side';
import Combination from './Combination';

const BoardContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: black;
`;

const Sides = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export default function Board() {
	const { state: { game: { players } } } = useContext(AppContext);
	return (
		<BoardContainer>
			<Sides>
				{
					players.map(player =>  {
						return (
							<Side
								key={`${player.name}-side`}
								player={player}
							/>
						);
					})
				}
			</Sides>
			<Combination
				players={players}
			/>
		</BoardContainer>

	);
}

Board.propTypes = {
	dispatch: PropTypes.func,
	players: PropTypes.arrayOf(PropTypes.object)
};
