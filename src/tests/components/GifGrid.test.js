import React from 'react';
import '../../setupTests';

import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en el gifgrid', () => {
    

    test('debe mostrar el componenete correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const title = "One punch";
        const wrapper = shallow( <GifGrid category={ title } /> );

        expect( wrapper ).toMatchSnapshot();
    })

    test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'jaja',
                url: 'jojo.com'
            }
        ] 
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const title = "One punch";
        const wrapper = shallow( <GifGrid category={ title } /> );

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGriditem').length).toBe( gifs.length );


    })
    


})
