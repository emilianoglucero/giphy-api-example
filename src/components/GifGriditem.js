import React from 'react';
import PropTypes from 'prop-types';

export const GifGriditem = ( {title, url} ) => {
    return (
        <div className="card animate__fadeIn">
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}


GifGriditem.propTypes = {
    title : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired
};
  
