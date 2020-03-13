import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ModalHeadForWeek from '..';

describe('ModalHeadForWeek', () => {
  test('ModalHeadForWeek snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<ModalHeadForWeek />);
    expect(snapshot).toMatchSnapshot();
  });
});
