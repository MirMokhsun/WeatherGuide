import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DetailsComp from '..';

describe('DetailsComp', () => {
  test('DetailsComp snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<DetailsComp />);
    expect(snapshot).toMatchSnapshot();
  });
});
