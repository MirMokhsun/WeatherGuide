import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import LocationFind from '../';

describe('LocationFind', () => {
    test('LocationFind snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<LocationFind />);
        expect(snapshot).toMatchSnapshot();
    });
});