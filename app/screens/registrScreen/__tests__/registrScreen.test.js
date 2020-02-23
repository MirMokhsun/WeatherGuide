import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import RegistrScreen from '..';

describe('Registr', () => {
    test('Registr snapshot', () => {
        const renderer = new ShallowRenderer();
        const snap2 = renderer.render(<RegistrScreen />);
        expect(snap2).toMatchSnapshot();
    });
});