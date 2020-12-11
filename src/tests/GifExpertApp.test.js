import React from 'react';
import '../setupTests';

import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('pruebas en el <GifExpertApp />', ()=> {
    

    test('debe de mostrarse correctamente', () => {


        let wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();

        
    });

    test('debe de mostrar una lista de categorias', () => {
        
        const categories = ['One Punch', 'Goku'];
        let wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> );
        expect( wrapper ).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe( categories.length );


        
    })
    
    
    

    
})