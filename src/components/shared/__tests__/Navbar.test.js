import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

it('Snapshot test for Navbar component', () => {
    const tree = renderer
    .create(<Navbar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})