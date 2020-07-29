import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import RequestRegister from "./components/RequestRegister";

function App() {
    return (
        <div className="App">
            <header className='header'>
                <a href="https://safe-zone-il.herokuapp.com/login/oauth2/code/google">
                    <input type="button" value="Login" />
                </a>
                <RequestRegister className = 'checkButton'></RequestRegister>
            </header>
        </div>
    );
}


export default App;
