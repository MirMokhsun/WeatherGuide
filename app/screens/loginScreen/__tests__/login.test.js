import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import LoginScreen from '..';
jest.setMock('AsyncStorage', AsyncStorage)

describe('Login', () => {
    test('Login snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<LoginScreen />);
        expect(snapshot).toMatchSnapshot();
    });
});