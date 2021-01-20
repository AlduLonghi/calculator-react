import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

it('Snapshot test for Calculator component', () => {
    const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})