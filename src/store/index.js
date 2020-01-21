import { createStore, combineReducers } from 'redux';

import gameReducer from './reducers/gameReducer';
import personReducer from './reducers/personReducer';

const allReducers = combineReducers({ game: gameReducer, person: personReducer });
const initialStates = {
    game: { name: 'Football' },
    person: { name: 'Tiago' },
};

const store = createStore(
    allReducers,
    initialStates,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
