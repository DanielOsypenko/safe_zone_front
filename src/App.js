import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import RequestRegister from "./components/RequestRegister";

function App() {
    return (
        <div className="App">
            <header className='header'>
                <a href="https://safe-zone-il.herokuapp.com/oauth2/authorization/google">
                    <input type="button" value="Login" />
                </a>
                {/*<div className="g-signin2" data-onsuccess="onSignIn"/>*/}
            </header>
            <RequestRegister className = 'checkButton'/>
        </div>
    );
}


export default App;
