import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SecondPage from '../';

describe('SecondPage', () => {
    test('SecondPage snapshot', () => {
        const renderer = new ShallowRenderer();
        const snap3 = renderer.render(<SecondPage />);
        expect(snap3).toMatchSnapshot();
    });
});