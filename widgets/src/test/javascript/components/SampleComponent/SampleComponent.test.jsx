
import React from 'react';
import renderer from 'react-test-renderer';
import SampleComponent from 'Components/SampleComponent/SampleComponent';

describe('Sample component', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<SampleComponent text="test" />);
        expect(component).toMatchSnapshot();
    });
});
