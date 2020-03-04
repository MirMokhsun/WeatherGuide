import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import HeaderRight from '../';

describe('HeaderRight', () => {
    test('HeaderRight snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<HeaderRight />);
        expect(snapshot).toMatchSnapshot();
    });
});