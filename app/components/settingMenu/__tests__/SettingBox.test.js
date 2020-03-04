import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SettingBox from '../';

describe('SettingBox', () => {
    test('SettingBox snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<SettingBox />);
        expect(snapshot).toMatchSnapshot();
    });
});