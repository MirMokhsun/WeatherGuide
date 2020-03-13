import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ModalViewForWeek from '..';

describe('ModalViewForWeek', () => {
  test('ModalViewForWeek snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<ModalViewForWeek />);
    expect(snapshot).toMatchSnapshot();
  });
});
