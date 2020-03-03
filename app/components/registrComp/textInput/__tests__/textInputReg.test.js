import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TextInputReg from '..';

describe('TextInputReg', () => {
    test('TextInputReg snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<TextInputReg />);
        expect(snapshot).toMatchSnapshot();
    });
});