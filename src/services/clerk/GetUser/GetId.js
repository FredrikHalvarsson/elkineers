import React, { useState, useEffect } from 'react';
import GetUser from './GetUser';
import GetData from '../../notion/getFromNotion/projects/GetData';

function GetId() {
    const user = GetUser();
    const [personId, setPersonId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const people = await GetData('people');
                const person = people.find(item => 
                    item.properties.Email.email.includes('fredrik.p.halvarsson@gmail.com')
                );
                if (person) {
                    setPersonId(person.id.ToString());
                } else {
                    // handle case where person is not found
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