import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import HeaderLeft from '..';

describe('HeaderLeft', () => {
    test('HeaderLeft snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<HeaderLeft />);
        expect(snapshot).toMatchSnapshot();
    });
});