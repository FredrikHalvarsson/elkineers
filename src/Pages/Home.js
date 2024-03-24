import React from 'react';
import GetId from '../services/clerk/GetUser/GetId';
import './home.css';

export default function Home () {
    return (
        <div>
            <h1 style={{
                marginLeft: '50%',
                }}>
                Welcome user!
            </h1>
            <main style={{
                minHeight: '100vh',
                marginLeft: '50%',
            }}>
                <br/>
                <p>(Home page is currently under construction)</p>
            </main>
        </div>
    )
}
