import React from 'react';
import './App.css';
import store from './store';
import { update_person } from './store/actions/personActions';
import { update_game } from './store/actions/gameActions';

function App() {
    return (
        <div className="App">
            <h1>Redux Tutorial</h1>
            <p>Person name : {store.getState().person.name}</p>
            <button onClick={() => store.dispatch(update_person)}>Update person</button>
            <p>Game name : {store.getState().game.name}</p>
            <button onClick={() => store.dispatch(update_game)}>Update Game</button>
        </div>
    );
}

export default App;
