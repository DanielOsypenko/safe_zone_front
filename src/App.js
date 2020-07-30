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
            <button value='res-get' onClick={fetch('https://safe-zone-il.herokuapp.com/res', {
                method: 'GET',
                name:'res-get',
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache': 'no-cache',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Headers': '*'
                },
                credentials: 'include'
            }).then(response => response.json())
                .then((user) => {
                    console.log(user.toString())
                }).catch((error) => {
                    console.error(error)
                })}>res-get</button>
            <button onClick={fetch('https://safe-zone-il.herokuapp.com/res-pos', {
                method: 'POST',
                name:'res-post',
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache': 'no-cache',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Headers': '*'
                },
                credentials: 'include'
            }).then(response => response.json())
                .then((user) => {
                    console.log(user.toString())
                }).catch((error) => {
                    console.error(error)
                })}>res-post</button>
        </div>
    );
}


export default App;
