import calculate from '../calculate';

test('Returns negative numbers when using +/-', () => {
    const data = {
        total: '35',
        next: '24',
        operation: '+'
    }

    const newData = {
        total: '-35',
        next: '-24',
        operation: '+'
    }

    expect(calculate(data, '+/-')).toEqual(newData);
})