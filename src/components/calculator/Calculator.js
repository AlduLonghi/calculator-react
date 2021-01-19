import CalculatorBody from './CalculatorBody';
import '../../style/App.css';
import calculatorImg from '../../assets/calculator.svg';

const Calculator = () => (
  <div className="calculator-component">
    <div className="calc-text-img">
      <h3>Let&apos;s do some math!</h3>
      <img src={calculatorImg} alt="calculator" />
    </div>
    <CalculatorBody />
  </div>
);

export default Calculator;
