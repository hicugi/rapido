import React, { useState } from 'react';
import Game from './game';
import Result from './game/result';

export default function App() {
  const [state, setState] = useState({
    isLoading: false,
    isResultReady: false,
    isGameWin: null
  });

  function handleReload() {
    setState({
      ...state,
      isLoading: true
    });

    setTimeout(() => {
      setState({
        ...state,
        isLoading: false
      });
    }, 1000);
  }

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
          <button className="icon-magic" onClick={handleReload}></button>
        </header>

        <div className="block__body">
          {/* loading */}
          {state.isLoading ? (
            <div className="loading">&nbsp;</div>
          ) : (
            <div>
              {!state.isResultReady ? (
                <Game
                  success={() => handleGameChange(true)}
                  fail={() => handleGameChange(false)}
                />
              ) : (
                <Result success={state.isGameWin} />
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
