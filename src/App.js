import React from 'react';
import Game from './game';

export default function App() {
  return (
    <main className="app-main">
      <section className="block">
        <header className="block__header">
          <h1 className="block__title">Билет 1</h1>
          <button className="icon-magic"></button>
        </header>

        <div className="block__body">
          <Game />
        </div>
      </section>
    </main>
  );
}
