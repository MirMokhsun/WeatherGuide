import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import AdditionalHeaderLeft from '../';

describe('AdditionalHeaderLeft', () => {
  test('AdditionalHeaderLeft snapshot', () => {
    const renderer = new ShallowRenderer();
    const snapshot = renderer.render(<AdditionalHeaderLeft />);
    expect(snapshot).toMatchSnapshot();
  });
});
