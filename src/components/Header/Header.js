import React from 'react';
import Login from '../../services/clerk/Login/Login';

const Header = () => {
  return (
    <header
          style={{
            backgroundColor: ' #008B8B',
            color: 'white',
            textAlign: 'center',
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