import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Switcher from '../';

describe('Switcher', () => {
    test('Switcher snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<Switcher />);
        expect(snapshot).toMatchSnapshot();
    });
});