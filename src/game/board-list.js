import React from 'react';
import PropTypes from 'prop-types';

import './board-list.css';

function rand(max) {
  return Math.floor(Math.random() * max) + 1;
}

class BoardList extends React.Component {
  constructor({ max, count }) {
    super();

    const winingList = [...Array(max)].reduce(res => {
      let val = 0;

      do {
        val = rand(count);
      } while (res.includes(val));

      res.push(val);

      return res;
    }, []);

    this.state = {
      winingList,
      activeList: []
    };
  }

  handleSelect(index) {
    const { min: propMin, max, change } = this.props;
    const min = propMin || max;

    const { winingList, activeList } = this.state;

    const indexFromList = activeList.indexOf(index);

    if (indexFromList > -1) activeList.splice(indexFromList, 1);
    else if (activeList.length < max) {
      activeList.push(index);
    }

    change({
      fields: [...activeList],
      ready: activeList.length === max,
      success: activeList.filter(v => winingList.includes(v)).length >= min
    });

    this.setState({
      activeList
    });
  }

  render() {
    const { count } = this.props;
    const { activeList } = this.state;

    return (
      <ul className="board-list">
        {[...Array(count)].map((_, index) => (
          <li
            key={index}
            className={
              activeList.includes(index + 1) ? 'board-list--active' : undefined
            }
          >
            <button
              className="board-list__item"
              onClick={() => this.handleSelect(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

BoardList.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  count: PropTypes.number,
  change: PropTypes.func
};

export default BoardList;
