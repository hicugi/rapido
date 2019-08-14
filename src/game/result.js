import React from 'react';
import PropTypes from 'prop-types';

function Result({ success }) {
  return (
    <div className="result">
      {success
        ? 'Ого, вы выиграли! Поздравляем!'
        : 'Не вышло... попробуйте в следующий раз'}
    </div>
  );
}

Result.propTypes = {
  success: PropTypes.bool
};

export default Result;
