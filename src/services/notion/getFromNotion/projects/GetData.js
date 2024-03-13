import React, {useState, useEffect} from 'react';
import axios from 'axios';

const GetData = (database) =>{ 
 
    const [data, setData] = useState(null); 

    const fetchDataFromNotion = ()=>{
        const payload = {
        };
        axios.post(`http://localhost:3001/notion/api/get/${database}`, payload)
            .then(response => {
                setData(response.data); 
                console.log('Data hämtad från Notion:', response.data);
            })
            .catch(error => {  
                console.error('Fel vid hämtning från Notion:', error);
            });
    };      
         
    useEffect(() => {
    fetchDataFromNotion();
    }, []);
    
    if(!data || !Array.isArray(data?.results)) {
    return null
    }

    return data
}
export default GetData