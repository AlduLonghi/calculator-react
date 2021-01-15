import operate from './operate';

const calculate = (dataObj, btnName) => {
  const newData = { ...dataObj };

  if (btnName === '+/-') {
    newData.total = (newData.total * -1).toString();
    newData.next = newData.next.length >= 1 ? (newData.next * -1).toString() : newData.next;
  } else if (btnName === 'AC') {
    newData.total = '';
    newData.next = '';
    newData.operation = '';
  } else if (btnName === '+' || btnName === '-' || btnName === 'X' || btnName === '÷') {
    newData.operation = newData.total !== '' ? btnName : newData.operation;
  } else if (btnName === '%') {
    newData.total = (newData.total / 100).toString();
    newData.next = newData.next.length >= 1 ? (newData.next / 100).toString() : newData.next;
  } else if (btnName === '=') {
    newData.total = operate(newData.total * 1, newData.next * 1, newData.operation);
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
