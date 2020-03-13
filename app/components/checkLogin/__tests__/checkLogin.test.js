import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CheckLogin from '..';

describe('CheckLogin', () => {
  test('CheckLogin snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<CheckLogin />);
    expect(snapshot).toMatchSnapshot();
  });
});
