const operate = (num1, num2, operation) => {
  let result;

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case 'X':
      result = num1 * num2;
      break;
    case '÷':
      result = num1 / num2;
      break;
    case '%':
      result = (num1 * num2) / 100;
      break;
    default:
      result = '';
      break;
  }

  return result.toFixed(2).toString();
};

export default operate;
