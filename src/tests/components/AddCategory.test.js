import React from 'react';

const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");

describe('pruebas en el <AddCategory />', ()=> {
    

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('debe de mostrarse correctamente', () => {


        expect( wrapper ).toMatchSnapshot();

        
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = "Hola mundo";

        input.simulate('change', { target: { value }});

        //expect( wrapper.find('p').text().trim() ).toBe( value );

    })

    test('NO debe de postear la info on submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        expect( setCategories ).not.toHaveBeenCalled();
    })
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        
        
        const input = wrapper.find('input');
        const value = "Hola mundo";
        const novalue = "";
        // simular el inputchange
        input.simulate('change', { target: { value }});
        //simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        // setcategories se debe de haber llamado 1 vez

        expect( setCategories ).toHaveBeenCalled();

        wrapper.find('form').simulate('change', { target: { novalue }});
        
        // el valor del input debe de estar ''

        expect(wrapper.find('input').prop('value')).toBe('');


    })
    


    
    

    
})