import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Board from './board';

function Game({ success, fail }) {
  const [state, setState] = useState({
    first: {},
    second: {},
    ready: false
  });
  const { first, second } = state;

  // on change board state
  function change(key, value) {
    const newState = {
      ...state,
      [key]: value
    };

    newState.ready = newState.first.ready && newState.second.ready;

    setState(newState);
  }

  // send request
  function sendRequest() {
    const timeout = 2000;

    // query
    function axiosQuery() {
      return Axios.post('/finch-test', {
        selectedNumber: {
          firstField: first.fields,
          secondField: second.fields
        },
        isTicketWon: first.success && second.success
      });
    }

    // resend query after 2 sec
    function resendQuery() {
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            const result = await axiosQuery();
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, timeout);
      });
    }

    axiosQuery()
      .catch(resendQuery)
      .catch(resendQuery);
  }

  // on click to show result btn
  function onShowResults() {
    const isSuccess = first.success && second.success;

    sendRequest();

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

      <center className="game__footer">
        <button className="btn" disabled={!state.ready} onClick={onShowResults}>
          Показать результат
        </button>
      </center>
    </div>
  );
}

Game.propTypes = {
  success: PropTypes.func,
  fail: PropTypes.func
};

export default Game;
