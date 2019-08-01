import React from 'react';

import './SearchPage.css';
import SearchForm from '../SearchForm/SearchForm.react';

const SearchPage = () => {

    return (
        <div className='searchpage_wrapper'>
            <h3>StackOverFlow</h3>
            <SearchForm/>
        </div>
    );

}

export default SearchPage;