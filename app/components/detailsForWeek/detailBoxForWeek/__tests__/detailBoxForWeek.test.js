import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DetailsCompWeek from '..';

describe('DetailsCompWeek', () => {
  test('DetailsCompWeek snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<DetailsCompWeek />);
    expect(snapshot).toMatchSnapshot();
  });
});
