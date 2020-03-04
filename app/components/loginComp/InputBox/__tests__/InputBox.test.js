import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import InputBox from '../'

describe('InputBox', () => {
    test('InputBox snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<InputBox />);
        expect(snapshot).toMatchSnapshot();
    });
});