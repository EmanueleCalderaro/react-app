import React from 'react';
import { Login } from './login';

export function Dashboard() {

    let isLoggedIn = true;
    let content;
    if (isLoggedIn) {
        content = "Logged in";
    } else {
        content = <Login />;
    }
    return (
        <div>
            {content}
        </div>
    );
}