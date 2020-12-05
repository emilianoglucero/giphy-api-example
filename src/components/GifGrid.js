import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGriditem } from './GifGriditem';

export const GifGrid = ( { category } ) => {

    const { loading, data:images } = useFetchGifs( category );


    return (
        <>
        <h3 className="animate__fadeIn animate__flash">{ category }</h3>

        { loading && <p className="animate__flash">Loading...</p> }

        <div className="card-grid"> 
            {
                images.map( img => (
                    <GifGriditem 
                        title={ img.title }
                        url={ img.url }
                        key={img.id}
                    /> 
                ))
            }
        </div>
        </>
    )
}
