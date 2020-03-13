import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ModalHead from '..';

describe('ModalHead', () => {
  test('ModalHead snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<ModalHead />);
    expect(snapshot).toMatchSnapshot();
  });
});
