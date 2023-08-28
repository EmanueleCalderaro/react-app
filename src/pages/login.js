import React from 'react';
import Navbar from '../components/navbar';

export function Login (){
    return(
        <div>
            <Navbar></Navbar>
            <div>
                <h1>Login Page</h1>
                <form>
                    <div className='container'>
                        <input type="text" placeholder="Enter Username" name="uname" required></input><br></br>
                        <input type="text" placeholder="Enter Password" name="pws" required></input><br></br>
                        <button className='Button'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}