import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Board from './board';

function Game({ success, fail }) {
  const [state, setState] = useState({
    first: {},
    second: {},
    ready: false
  });

  // on change board state
  function change(key, value) {
    const newState = {
      ...state,
      [key]: value
    };

    newState.ready = newState.first.ready && newState.second.ready;

    setState(newState);
  }

  // on click to show result btn
  function onShowResults() {
    const { first, second } = state;
    const isSuccess = first.success && second.success;

    if (isSuccess) success();
    else fail();
  }

  return (
    <div className="game">
      <Board
        title="Поле 1"
        subtitle="Отметьте 8 чисел."
        min={3}
        max={8}
        count={19}
        change={value => change('first', value)}
      />
      <Board
        title="Поле 2"
        subtitle="Отметьте 1 чисо."
        max={1}
        count={2}
        change={value => change('second', value)}
      />

      <div className="game__footer" align="center">
        <button className="btn" disabled={!state.ready} onClick={onShowResults}>
          Показать результат
        </button>
      </div>
    </div>
  );
}

Game.propTypes = {
  success: PropTypes.func,
  fail: PropTypes.func
};

export default Game;
