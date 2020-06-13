import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
    it('Should render component', () => {
        const component = shallow(<App />);
        expect(component.find('.App').exists()).toBeTruthy();
    })
})
