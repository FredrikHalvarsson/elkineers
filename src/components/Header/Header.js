import React from 'react';
import Login from '../../services/clerk/Login/Login'

const Header = () => {
  return (
    <header
        style={{
            backgroundColor: 'teal',
            color: 'white',
            textAlign: 'center',
            marginBottom: '100px',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row'
            }}>
            <div></div>{/*Empty div to center h1*/}
            <h1 style={{color: 'rgb(255,221,60)'}}>ElkApp</h1>
            <clerk style={{
              margin: '15px'
              }}>
            <Login/>
          </clerk>
    </header>
  );
};

export default Header;