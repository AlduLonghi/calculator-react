import PropTypes from 'prop-types';
import Button from './Button';
import '../style/App.css';

const ButtonPanel = props => {
  const buttonNames = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['.', '0', '='],
  ];
  return (
    <div>
      <div className="button-row">
        {buttonNames[0].map(btnName => <Button name={btnName} key={`btn-${btnName}`} onClick={props.onClick} className="button button-spc" />) }
      </div>
      <div className="button-row">
        {buttonNames[1].map(btnName => <Button name={btnName} key={`btn-${btnName}`} onClick={props.onClick} />) }
      </div>
      <div className="button-row">
        {buttonNames[2].map(btnName => <Button name={btnName} key={`btn-${btnName}`} onClick={props.onClick} />) }
      </div>
      <div className="button-row">
        {buttonNames[3].map(btnName => <Button name={btnName} key={`btn-${btnName}`} onClick={props.onClick} />) }
      </div>
      <div className="button-row">
        {buttonNames[4].map(btnName => <Button name={btnName} key={`btn-${btnName}`} onClick={props.onClick} className={btnName === '=' ? 'button button-equal' : 'button'} />) }
      </div>
    </div>

  );
};

ButtonPanel.propTypes = {
  onClick: PropTypes.func,
};

ButtonPanel.defaultProps = {
  onClick: null,
};

export default ButtonPanel;
