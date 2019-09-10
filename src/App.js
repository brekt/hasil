import React, { useReducer, useEffect } from 'react';
import './App.css';
import {
	AppContext,
	actions,
	initialState,
	reducer
} from './state';
import Board from './components/Board';

function App() {

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		console.log(state);
	}, [state]);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			<div className="App">
				<h1
					onClick={() => {
						dispatch({ type: actions.START_GAME});
					}}
				>
					Hasil
				</h1>
				{
					state.game.inProgress
						? <Board />
						: <p>Click title to start game.</p>
				}
			</div>
		</AppContext.Provider>

	);
}

export default App;