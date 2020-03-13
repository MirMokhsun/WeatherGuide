import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ModalTxt from '..';

describe('ModalTxt', () => {
  test('ModalTxt snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<ModalTxt />);
    expect(snapshot).toMatchSnapshot();
  });
});
