import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import BackgroundImage from '..';

describe('BackgroundImage', () => {
  test('BackgroundImage snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<BackgroundImage />);
    expect(snapshot).toMatchSnapshot();
  });
});
