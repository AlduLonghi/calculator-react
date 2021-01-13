import Button from './Button';

const ButtonPanel = () => {
  const buttonNames = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['.', '0', '='],
  ];
  return (
    <div>
      <div>
        {buttonNames[0].map(btnName => <Button name={btnName} key={`btn-${btnName}`} />) }
      </div>
      <div>
        {buttonNames[1].map(btnName => <Button name={btnName} key={`btn-${btnName}`} />) }
      </div>
      <div>
        {buttonNames[2].map(btnName => <Button name={btnName} key={`btn-${btnName}`} />) }
      </div>
      <div>
        {buttonNames[3].map(btnName => <Button name={btnName} key={`btn-${btnName}`} />) }
      </div>
      <div>
        {buttonNames[4].map(btnName => <Button name={btnName} key={`btn-${btnName}`} />) }
      </div>
    </div>

  );
};

export default ButtonPanel;
