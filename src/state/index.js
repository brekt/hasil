import { createContext} from 'react';
import produce from 'immer';
import players from '../mock/players';

export const actions = {
	CHOOSE_COLOR: 'CHOOSE_COLOR',
	START_GAME: 'START_GAME'
};

export const initialState = {
	game: {
		inProgress: false,
		players,
	},
};

export const AppContext = createContext(initialState);

export function reducer(state, action) {
	return produce(state, draft => {
		switch (action.type) {
			case actions.CHOOSE_COLOR:
			{
				const { color, id } = action.payload;
				draft.game.players[id].color = color;
				break;
			}
			case actions.START_GAME:
				draft.game.inProgress = true;
				break;
			default:
				throw new Error(`${action.type} is not a known type.`);
		}
	});

}
