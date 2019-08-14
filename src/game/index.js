import React, { useState } from 'react';
import Board from './board';

export default function Game() {
  const [state, setState] = useState({
    first: {},
    second: {},
    ready: false
  });

  function change(key, value) {
    const newState = {
      ...state,
      [key]: value
    };

    newState.ready = newState.first.ready && newState.second.ready;

    setState(newState);
  }

  return (
    <div>
      <section>
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
      </section>
    </div>
  );
}
