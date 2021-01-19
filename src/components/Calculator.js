import { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../style/App.css';
import Navbar from './shared/Navbar';

const Calculator = () => {
  const [state, setState] = useState({ total: '', next: '', operation: '' });
  const { total } = state;
  const { next } = state;
  const { operation } = state;

  const handleClick = btnName => {
    setState(prevState => ({ ...calculate(prevState, btnName) }));
  };

  return (
    <>
      <Navbar />
      <div className="calculator-body">
        <Display data={{ total, next, operation }} />
        <ButtonPanel onClick={handleClick} />
      </div>
    </>
  );
};

export default Calculator;
