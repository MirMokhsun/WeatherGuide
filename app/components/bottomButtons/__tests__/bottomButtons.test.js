import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import BottomButtons from '..';

describe('BottomButtons', () => {
  test('BottomButtons snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<BottomButtons />);
    expect(snapshot).toMatchSnapshot();
  });
});
