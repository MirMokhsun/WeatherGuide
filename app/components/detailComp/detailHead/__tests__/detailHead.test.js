import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DetailsHead from '..';

describe('DetailsHead', () => {
  test('DetailsHead snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<DetailsHead />);
    expect(snapshot).toMatchSnapshot();
  });
});
