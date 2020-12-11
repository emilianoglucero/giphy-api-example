import React from 'react';
import '../../setupTests';

import '@testing-library/jest-dom';
import { GifGriditem } from '../../components/GifGriditem';
import { shallow } from 'enzyme';



describe('Pruebas en el gifgriditem', () => {

    const title = "Goku";
    const url = "https://ghiphy.com"
    const wrapper = shallow( <GifGriditem title={ title } url={ url} /> );

    test('debe mostrar el componenete correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe tener un parrafo con el title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim()).toBe( title );
        
    })

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        console.log(img.props());
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    })

    test('debe de tener el animate__fadeIn en el class', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');
        //animate fadein
        console.log(div.prop('className'));

        expect( className.includes('card animate__fadeIn') ).toBe( true );
        
    })
    
    
    


})
