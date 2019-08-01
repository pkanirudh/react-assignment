import React from 'react';

import './Iterator.css';

const Iterator = (props) => {
    if(typeof props.list === 'undefined' || props.list.length === 0){
        return(
            <div>
                <p>No search results</p>
            </div>
        );
    }
    return (
            props.list.map((listItem) => {
            return (
                <div className='p-md-1 m-md-1 bg-secondary col-sm-2 text-white'>
                    {listItem}
                </div>
            );
        })
    );
    
}

export default Iterator;