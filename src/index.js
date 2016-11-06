import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyDM-W_n6ifxmKpu3uxizkj9r2MVed2kR4M';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('.container'));