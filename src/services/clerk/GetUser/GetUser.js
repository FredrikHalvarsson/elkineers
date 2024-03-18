import React, { useState } from 'react'
import { useCookies } from "react-cookie";



function GetUser() {
    const [cookies, setCookie] = useCookies(['fullName', 'primaryEmail']);
    const name = cookies.fullName;
    const email = cookies.primaryEmail;
    
    return {
        userName: name,
        userEmail: email,
        }
}

export default GetUser

//example to retrieve data from user
//
// import GetUser from '../services/clerk/GetUser/GetUser';
// {GetUser().map((item) =>(
//     <div>
//     <p>{item.userName}</p>
//     <p>{item.userEmail}</p>
//     </div>
//   ))}