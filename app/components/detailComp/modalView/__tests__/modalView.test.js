import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ModalView from '..';

describe('ModalView', () => {
  test('ModalView snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<ModalView />);
    expect(snapshot).toMatchSnapshot();
  });
});
