import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DetailsHeadForWeak from '..';

describe('DetailsHeadForWeak', () => {
  test('DetailsHeadForWeak snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<DetailsHeadForWeak />);
    expect(snapshot).toMatchSnapshot();
  });
});
