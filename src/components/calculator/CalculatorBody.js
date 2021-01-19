import { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../../logic/calculate';
import '../../style/App.css';

const CalculatorBody = () => {
  const [state, setState] = useState({ total: '', next: '', operation: '' });
  const { total } = state;
  const { next } = state;
  const { operation } = state;

  const handleClick = btnName => {
    setState(prevState => ({ ...calculate(prevState, btnName) }));
  };

  return (
    <div className="calculator-body">
      <Display data={{ total, next, operation }} />
      <ButtonPanel onClick={handleClick} />
    </div>
  );
};

export default CalculatorBody;
