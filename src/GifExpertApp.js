import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

  const [categories, setCategories] = useState( defaultCategories );

    return(
      <>
      <h2>My GIPHY api example with React 🥰 </h2>
      <hr />
      <AddCategory 
        setCategories={ setCategories }
      />

      {/* <button onClick={ handleAdd }>Agregar</button> */}

      <ol>
        {
          categories.map( category => (
           <GifGrid 
             key={ category }
             category={ category }
           />
          ))
        }
      </ol>


      </>
    )
  } 