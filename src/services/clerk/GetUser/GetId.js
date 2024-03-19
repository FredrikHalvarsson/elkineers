import React, { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";
import axios from 'axios';
import GetUser from './GetUser';

function GetId() {
    const [personId, setPersonId] = useState(null);
    const user = GetUser();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const payload = {};
                const response = await axios.post(`http://localhost:3001/notion/api/get/people`, payload);
                console.log("Response Data:", response.data);
                const person = response.data.results.find(item => 
                    item.properties.Email.email.includes(user.userEmail)
                );

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