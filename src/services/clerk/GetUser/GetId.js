import React, { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";
import axios from 'axios';

function GetUser() {
    const [cookies] = useCookies(['fullName', 'primaryEmail']);
    const name = cookies.fullName;
    const email = cookies.primaryEmail;
    
    return {
        userName: name,
        userEmail: email,
    };
}

function GetId() {
    console.log("steg 1");
    const [personId, setPersonId] = useState(null);
    const user = GetUser();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("steg 3");
                const payload = {};
                const response = await axios.post(`http://localhost:3001/notion/api/get/people`, payload);
                console.log("Response Data:", response.data);
                console.log("steg 4");
                const person = response.data.results.find(item => 
                    item.properties.Email.email.includes(user.userEmail)
                );
                console.log("steg 5");

                if (person) {
                    console.log('person found');
                    setPersonId(person.id);
                } else {
                    // handle case where person is not found
                    console.log('person not found');
                    setPersonId(null);
                }
            } catch (error) {
                // handle error
                console.error('Error fetching data:', error);
                setPersonId(null);
            }
        };
        
        fetchData();
    }, [user.userEmail]);

    return personId;
}

export default GetId;

// let id = null
// if (!id){
//     id = GetId()
// }
// console.log('userID: '+ id)