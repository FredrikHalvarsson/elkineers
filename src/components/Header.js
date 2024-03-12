import React from 'react';
import GetUser from '../services/clerk/GetUser/GetUser';

const Header = () => {
  return (
    <header
        style={{
            textAlign: 'center',
            margin: '100px 0',
            marginTop: '50px',
            }}> 
            <h1>Welcome user! </h1>
            {GetUser().map((item) =>(
              <div>
              <p>{item.userName}</p>
              <p>{item.userEmail}</p>
              </div>
            ))}
    </header>
  );
};

export default Header;