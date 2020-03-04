import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import RegistrScreen from '../';

describe('RegistrScreen', () => {
    test('RegistrScreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<RegistrScreen />);
        expect(snapshot).toMatchSnapshot();
    });
});