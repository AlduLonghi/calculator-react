import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

it('Snapshot test for Footer component', () => {
    const tree = renderer
    .create(<Footer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})