import React from 'react'

export const GifGriditem = ( {title, url} ) => {
    return (
        <div className="card animate__fadeIn">
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}
