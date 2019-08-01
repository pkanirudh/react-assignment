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
                <div className='p-md-1 m-md-1'>
                    {listItem}
                </div>
            );
        })
    );
    
}

export default Iterator;