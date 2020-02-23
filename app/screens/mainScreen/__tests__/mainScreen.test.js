import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MainScreen from '..';

describe('Main', () => {
    test('Main snapshot', () => {
        const renderer = new ShallowRenderer();
        const snap = renderer.render(<MainScreen />);
        expect(snap).toMatchSnapshot();
    });
});