import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import WeatherBox from '..';

describe('WeatherBox', () => {
    test('WeatherBox snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<WeatherBox />);
        expect(snapshot).toMatchSnapshot();
    });
});