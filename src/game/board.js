import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Board({ title, subtitle, count }) {
  return (
    <div className="board">
      <header className="board__header">
        <h2 className="board__title">{title}</h2>
        <p className="board__subtitle">{subtitle}</p>
      </header>

      <ul className="board-list">
        {[...Array(count)].map((_, index) => (
          <li key={index}>
            <button className="board-list__item">{index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Board.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  count: PropTypes.number
};

export default Board;
