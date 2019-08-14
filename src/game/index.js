import React from 'react';
import Board from './board';

export default function Game() {
  return (
    <div>
      <section>
        <Board
          title="Поле 1"
          subtitle="Отметьте 8 чисел."
          min={3}
          max={8}
          count={19}
        />
        <Board title="Поле 2" subtitle="Отметьте 1 чисо." max={1} count={2} />
      </section>
    </div>
  );
}
