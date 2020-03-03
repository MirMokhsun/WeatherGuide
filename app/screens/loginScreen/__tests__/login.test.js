import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import LoginScreen from '..';

describe('LoginScreen', () => {
    test('LoginScreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<LoginScreen />);
        expect(snapshot).toMatchSnapshot();
    });
});