import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SplashScreen from '..';

describe('SplashScreen', () => {
    test('SplashScreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snap4 = renderer.render(<SplashScreen />);
        expect(snap4).toMatchSnapshot();
    });
});