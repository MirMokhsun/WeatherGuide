import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ModalTxtForWeek from '..';

describe('ModalTxtForWeek', () => {
  test('ModalTxtForWeek snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<ModalTxtForWeek />);
    expect(snapshot).toMatchSnapshot();
  });
});
