import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

it('Snapshot test for Home component', () => {
    const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})