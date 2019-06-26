import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import TelaAutor from './components/TelaAutor';
// import TelaLivro from './components/TelaLivro';

import Menu from './components/Menu';

function App() {
    return (
        <div className="App">
            <Menu/>
        </div>
    );
}

export default App;
