import React from 'react';

function Result({ success }) {
  return (
    <div className="result">
      {success
        ? 'Ого, вы выиграли! Поздравляем!'
        : 'Не вышло... попробуйте в следующий раз'}
    </div>
  );
}

export default Result;
