import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DetailsTextForWeek from '..';

describe('DetailsTextForWeek', () => {
  test('DetailsTextForWeek snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<DetailsTextForWeek />);
    expect(snapshot).toMatchSnapshot();
  });
});
