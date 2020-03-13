import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DetailsButtForWeek from '..';

describe('DetailsButtForWeek', () => {
  test('DetailsButtForWeek snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<DetailsButtForWeek />);
    expect(snapshot).toMatchSnapshot();
  });
});
