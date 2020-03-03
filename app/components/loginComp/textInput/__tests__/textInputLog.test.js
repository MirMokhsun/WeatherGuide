import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TextInputlog from '..';

describe('TextInputlog', () => {
    test('TextInputlog snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<TextInputlog />);
        expect(snapshot).toMatchSnapshot();
    });
});