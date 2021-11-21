import React from 'react';
import not from '../../img/404.png'

const NotFound = () => {
    return (
        <div>
            <h2>not found 404</h2>
            <div>
                <img style={{width:'100%'}} src={not} alt="" />
            </div>
            
        </div>
    );
};

export default NotFound;