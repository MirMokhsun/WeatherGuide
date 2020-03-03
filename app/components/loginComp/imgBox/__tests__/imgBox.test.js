import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ImgBox from '..';

describe('ImgBox', () => {
    test('ImgBox snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<ImgBox />);
        expect(snapshot).toMatchSnapshot();
    });
});