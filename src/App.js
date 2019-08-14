import React, { useState } from 'react';
import Game from './game';
import Result from './game/result';

export default function App() {
  const [state, setState] = useState({
    isResultReady: false,
    isGameWin: null
  });

  function handleGameChange(value) {
    setState({
      isResultReady: true,
      isGameWin: value
    });
  }

  return (
    <main className="app-main">
      <section className="block">
        <header className="block__header">
          <h1 className="block__title">Билет 1</h1>
          <button className="icon-magic"></button>
        </header>

        <div className="block__body">
          {!state.isResultReady ? (
            <Game
              success={() => handleGameChange(true)}
              fail={() => handleGameChange(false)}
            />
          ) : (
            <Result success={state.isGameWin} />
          )}
        </div>
      </section>
    </main>
  );
}
