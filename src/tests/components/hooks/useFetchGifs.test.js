//import React from 'react';
import '../../../setupTests';

import '@testing-library/jest-dom';

//import { shallow } from 'enzyme';
import { useFetchGifs } from '../../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';




describe('pruebas en el hook <useFetchGifs />', ()=> {
    

    test('debe de retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One punch' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        //console.log(data, loading);

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
        // { loading, data:images } = useFetchGifs( category );

        
    })

    test('debe de retornar un arreglo de imagenes y el loading en false', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'one punch' ));


        await waitForNextUpdate();


        const { data, loading } = result.current;


        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );


        
    })
    
    
    

    
})