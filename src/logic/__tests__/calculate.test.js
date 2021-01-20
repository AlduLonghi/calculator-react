import calculate from '../calculate';

test("Resets all values in data when clicking 'AC'", () => {
  const data = {
    total: '35',
    next: '24',
    operation: '+',
  };

  const newData = {
    total: '',
    next: '',
    operation: '',
  };

  expect(calculate(data, 'AC')).toEqual(newData);
});

test("Returns negative numbers when clicking '+/-'", () => {
  const data = {
    total: '35',
    next: '24',
    operation: '+',
  };

  const newData = {
    total: '-35',
    next: '-24',
    operation: '+',
  };

  expect(calculate(data, '+/-')).toEqual(newData);
});

test("Returns numbers divided by 100 when clicking '%'", () => {
  const data = {
    total: '35',
    next: '24',
    operation: '+',
  };

  const newData = {
    total: '0.35',
    next: '0.24',
    operation: '+',
  };

  expect(calculate(data, '%')).toEqual(newData);
});

test("Returns total divided by next when clicking '=' and operation = '÷'", () => {
  const data = {
    total: '20',
    next: '2',
    operation: '÷',
  };

  const newData = {
    total: '10',
    next: '',
    operation: '',
  };

  expect(calculate(data, '=')).toEqual(newData);
});

test("Returns total multiplied by next when clicking '=' and operation = 'X'", () => {
  const data = {
    total: '20',
    next: '2',
    operation: 'X',
  };

  const newData = {
    total: '40',
    next: '',
    operation: '',
  };

  expect(calculate(data, '=')).toEqual(newData);
});

test("Returns the substraction between total and next when clicking '=' and operation = '-'", () => {
  const data = {
    total: '20',
    next: '2',
    operation: '-',
  };

  const newData = {
    total: '18',
    next: '',
    operation: '',
  };

  expect(calculate(data, '=')).toEqual(newData);
});

test("Returns the sum between total and next when clicking '=' and operation = '+'", () => {
  const data = {
    total: '20',
    next: '2',
    operation: '+',
  };

  const newData = {
    total: '22',
    next: '',
    operation: '',
  };

  expect(calculate(data, '=')).toEqual(newData);
});

test("Adds number to total when clicking a number button and operation = ''", () => {
  const data = {
    total: '2',
    next: '',
    operation: '',
  };

  const newData = {
    total: '22',
    next: '',
    operation: '',
  };

  expect(calculate(data, '2')).toEqual(newData);
});

test("Adds number to next when clicking a number button and operation != ''", () => {
  const data = {
    total: '2',
    next: '',
    operation: '+',
  };

  const newData = {
    total: '2',
    next: '3',
    operation: '+',
  };

  expect(calculate(data, '3')).toEqual(newData);
});

test("Adds operator to operation when clicking a number button and total != ''", () => {
  const data = {
    total: '2',
    next: '',
    operation: '',
  };

  const newData = {
    total: '2',
    next: '',
    operation: '+',
  };

  expect(calculate(data, '+')).toEqual(newData);
});
