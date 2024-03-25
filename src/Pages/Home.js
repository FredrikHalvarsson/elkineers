import React from 'react';
import GetId from '../services/clerk/GetUser/GetId';
import elklogo from '../elklogo.png'
import './home.css';

export default function Home () {
    return (
        <div style={{background: "linear-gradient(to left, #006666 23%, #7f9d9d 85%)"}}>

            <div style={{
                minHeight: '100vh',
            }}>

                <div className="background-image" style={{
                    width: 'auto',
                    height:'500px',
                    backgroundSize: 'cover',
                    backgroundImage: "url(https://images.unsplash.com/photo-1498334906313-6e099a1bd87b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000)"

                }}>  
                </div>
                <div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'-75px',  marginBottom:'0px'}}>
                    <img src={elklogo} alt="elklogo" style={{height:'120px', alignSelf:'center'}} />
                    </div>
                    <p style={{textAlign:'center', color:'white', fontFamily:"'Courier New', monospace", fontSize:'60px',marginBottom: '0px', marginTop:'0px' }}>Team Elkineers</p>
                    <p style={{textAlign:'center', color:'white', fontFamily:"'Courier New', monospace", fontSize:'30px', marginTop:'0px', marginBottom: '4px' }}> Where Antlers Meet Ingenuity!</p>
                    <p style={{textAlign:'center', color:'white', fontFamily:"'Courier New', monospace", fontSize:'20px',marginTop: '0px', marginBottom:'0px' }}>Team Elkineers is a resourceful team, inspired by the majestic elk and driven by innovation.</p>
                </div> 
            </div>
        </div>
    )
}
