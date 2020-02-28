import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DrawerContent from '..';

describe('Login', () => {
    test('Login snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<DrawerContent />);
        expect(snapshot).toMatchSnapshot();
    });
});