import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DetailsButt from '..';

describe('DetailsButt', () => {
  test('DetailsButt snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<DetailsButt />);
    expect(snapshot).toMatchSnapshot();
  });
});
