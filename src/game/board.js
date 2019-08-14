import React from 'react';
import PropTypes from 'prop-types';
import BoardList from './board-list';

import './index.css';

function Board({ title, subtitle, min, max, count, change }) {
  return (
    <section className="board">
      <header className="board__header">
        <h2 className="board__title">{title}</h2>
        <p className="board__subtitle">{subtitle}</p>
      </header>

      <BoardList min={min} max={max} count={count} change={change} />
    </section>
  );
}

Board.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  count: PropTypes.number,
  change: PropTypes.func
};

export default Board;
