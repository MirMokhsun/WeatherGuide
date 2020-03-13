import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DetailsText from '..';

describe('DetailsText', () => {
  test('DetailsText snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<DetailsText />);
    expect(snapshot).toMatchSnapshot();
  });
});
