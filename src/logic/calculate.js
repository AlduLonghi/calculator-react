import operate from './operate';

const calculate = (dataObj, btnName) => {
  const newData = { ...dataObj };

  if (btnName === '+/-') {
    newData.total = (newData.total * -1).toString();
    newData.next = (newData.next * -1).toString();
  } else if (btnName === 'AC') {
    newData.total = '';
    newData.next = '';
    newData.operation = '';
  } else if (btnName === '+' || btnName === '-' || btnName === 'X' || btnName === '÷' || btnName === '%') {
    newData.operation = newData.total !== '' ? btnName : '';
  } else if (btnName === '=') {
    newData.total = operate(Number(newData.total), Number(newData.next), newData.operation);
    newData.next = '';
    newData.operation = '';
  } else if (newData.operation === '') {
    newData.total += btnName;
  } else {
    newData.next += btnName;
  }

  return newData;
};

export default calculate;
