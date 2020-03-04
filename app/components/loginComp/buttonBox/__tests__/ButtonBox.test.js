import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ButtonBox from '../';

describe('ButtonBox', () => {
    test('ButtonBox snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<ButtonBox />);
        expect(snapshot).toMatchSnapshot();
    });
});